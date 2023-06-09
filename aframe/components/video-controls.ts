import { Entity, Schema } from 'aframe';
import { Mesh, MeshStandardMaterial } from 'three';
import {
  BaseComponent,
  component,
  system,
} from '~/manual_modules/aframe-class-components';

const THREE = AFRAME.THREE;
const DEFAULT_INFO_TEXT_BOTTOM =
  'Double-click outside player to hide or show it.';
const DEFAULT_INFO_TEXT_TOP =
  'Look+click on play or bar. Space bar and arrows also work.';

export interface VideoControlsComponentData {
  src: string;
  size: number;
  distance: number;
  backgroundColor: string;
  barColor: string;
  textColor: string;
  infoTextBottom: string;
  infoTextTop: string;
  infoTextFont: string;
  statusTextFont: string;
  timeTextFont: string;
}

@component('video-controls')
export class VideoControlsComponent extends BaseComponent<VideoControlsComponentData> {
  static schema: Schema<VideoControlsComponentData> = {
    src: { type: 'string' },
    size: { type: 'number', default: 1.0 },
    distance: { type: 'number', default: 2.0 },
    backgroundColor: { default: 'black' },
    barColor: { default: 'red' },
    textColor: { default: 'yellow' },
    infoTextBottom: { default: DEFAULT_INFO_TEXT_BOTTOM },
    infoTextTop: { default: DEFAULT_INFO_TEXT_TOP },
    infoTextFont: { default: '35px Helvetica Neue' },
    statusTextFont: { default: '30px Helvetica Neue' },
    timeTextFont: { default: '70px Helvetica Neue' },
  };

  last_time: number = 0;
  current_step: number = 0;
  bar_steps: number = 0;
  video_el?: HTMLMediaElement;
  play_image_src: string = '';
  pause_image_src: string = '';
  play_image?: Entity;
  bar_canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D;
  texture?: THREE.Texture;
  bar?: Entity;
  endedListener?: () => void;
  pauseListener?: () => void;
  playingListener?: () => void;

  position_time_from_steps() {
    if (!this.video_el) return;

    var unit_offset = this.current_step / this.bar_steps;

    if (this.video_el.readyState > 0) {
      this.video_el.currentTime = unit_offset * this.video_el.duration;
    }
  }

  // Puts the control in from of the camera, at this.data.distance, facing it...

  position_control_from_camera() {
    if (!this.el.sceneEl) return;

    var camera = this.el.sceneEl.camera;

    if (camera) {
      var camera_rotation = camera.el.getAttribute('rotation');

      var camera_yaw = camera_rotation.y;

      // Set position of menu based on camera yaw and data.pitch

      this.el.components.position.data.x = 1;
      this.el.components.position.data.y =
        -this.data.distance * Math.sin((camera_yaw * Math.PI) / 180.0);
      this.el.components.position.data.z =
        -this.data.distance * Math.cos((camera_yaw * Math.PI) / 180.0);

      this.el.setAttribute(
        'position',
        [
          this.el.components.position.data.x,
          this.el.components.position.data.y,
          this.el.components.position.data.z,
        ].join(' ')
      );

      // and now, make our controls rotate towards origin

      let cameraWorldPos = new THREE.Vector3();
      camera.getWorldPosition(cameraWorldPos);
      this.el.object3D.lookAt(cameraWorldPos);
    }
  }

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init() {
    // Next two vars used to control transport bar with keyboard arrows

    this.bar_steps = 10.0;

    this.current_step = 0.0;

    this.el.setAttribute('visible', true);

    // image sources for play/pause

    this.play_image_src = document.getElementById('video-play-image')
      ? '#video-play-image'
      : 'https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png';
    this.pause_image_src = document.getElementById('video-pause-image')
      ? '#video-pause-image'
      : 'https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png';

    // Create icon image (play/pause), different image whether video is playing.

    this.play_image = document.createElement('a-image');
    this.play_image.classList.add('clickable');

    this.bar_canvas = <HTMLCanvasElement>(
      (<unknown>document.createElement('canvas'))
    );
    this.bar_canvas.setAttribute('id', 'video_player_canvas');
    this.bar_canvas.width = 1024;
    this.bar_canvas.height = 256;
    this.bar_canvas.style.display = 'none';

    let context = this.bar_canvas.getContext('2d');
    if (!context) throw new Error('Expected canvas context to not be null');
    this.context = context;

    this.texture = new THREE.Texture(this.bar_canvas);

    // On icon image, change video state and icon (play/pause)

    this.play_image.addEventListener('click', (event) => {
      if (!this.video_el || !this.play_image) return;

      if (!this.video_el.paused) {
        this.play_image.setAttribute('src', this.play_image_src);

        this.video_el.pause();
      } else {
        this.play_image.setAttribute('src', this.pause_image_src);

        this.video_el.play();
      }

      // Prevent propagation upwards (e.g: canvas click)
      event.stopPropagation();
      event.preventDefault();
    });

    window.addEventListener(
      'keyup',
      (event) => {
        switch (event.key) {
          // If space bar is pressed, fire click on play_image
          case ' ':
            this.play_image?.dispatchEvent(new Event('click'));
            break;

          // Arrow left: beginning
          case 'ArrowLeft':
            this.current_step = 0.0;
            this.position_time_from_steps();
            break;

          // Arrow right: end
          case 'ArrowRight':
            this.current_step = this.bar_steps;
            this.position_time_from_steps();

            break;

          // Arrow up: one step forward
          case 'ArrowUp':
            this.current_step =
              this.current_step < this.bar_steps
                ? this.current_step + 1
                : this.current_step;
            this.position_time_from_steps();
            break;

          // Arrow down: one step back
          case 'ArrowDown':
            this.current_step =
              this.current_step > 0 ? this.current_step - 1 : this.current_step;
            this.position_time_from_steps();
            break;
        }
      },
      false
    );

    // Create transport bar

    this.bar = document.createElement('a-plane');

    // On transport bar click, get point clicked, infer % of new pointer, and make video seek to that point

    this.bar.addEventListener('click', (event) => {
      if (!this.bar || !this.video_el) return;
      // Get raycast intersection point, and from there, x_offset in bar

      var point = document
        .querySelector('a-cursor')
        .components.raycaster.raycaster.intersectObject(
          this.bar.object3D,
          true
        )[0].point;

      var x_offset = this.bar.object3D.worldToLocal(point).x;

      var unit_offset = x_offset / this.data.size + 0.5;

      // Update current step for coherence between point+click and key methods

      this.current_step = Math.round(unit_offset * this.bar_steps);

      if (this.video_el.readyState > 0) {
        this.video_el.currentTime = unit_offset * this.video_el.duration;
      }

      // Prevent propagation upwards (e.g: canvas click)

      event.stopPropagation();

      event.preventDefault();
    });

    // Append image icon + info text + bar to component root

    this.el.appendChild(this.bar_canvas);
    this.el.appendChild(this.play_image);
    this.el.appendChild(this.bar);

    // Attach double click behavior outside player once scene is loaded

    this.el.sceneEl?.addEventListener('loaded', () => {
      this.position_control_from_camera();

      this.el.sceneEl?.addEventListener('dblclick', () => {
        var raycaster =
          document.querySelector('a-cursor').components.raycaster.raycaster;

        // Double click is outside the player
        // (note that for some reason you cannot prevent a dblclick on player from bubbling up (??)

        if (raycaster.intersectObject(this.el.object3D, true).length == 0) {
          // If controls are show: hide

          if (this.el.getAttribute('visible')) {
            this.el.setAttribute('visible', false);
          }
          // Else, show at 'distance' from camera
          else {
            this.el.setAttribute('visible', true);

            this.position_control_from_camera();
          }
        }
      });
    });
  }

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update() {
    const video_selector = this.data.src;
    this.video_el = <HTMLVideoElement>(
      (<unknown>document.querySelector(video_selector))
    );

    if (this.video_el.paused) {
      this.play_image?.setAttribute('src', this.play_image_src);
    } else {
      this.play_image?.setAttribute('src', this.pause_image_src);
    }

    // Change icon to 'play' on end

    if (this.video_el && this.endedListener)
      this.video_el.removeEventListener('ended', this.endedListener);
    this.endedListener = () => {
      this.video_el?.setAttribute('src', this.play_image_src);
    };
    this.video_el.addEventListener('ended', this.endedListener);

    // Change icon to 'pause' on start.

    if (this.video_el && this.pauseListener)
      this.video_el.removeEventListener('pause', this.pauseListener);
    this.pauseListener = () => {
      this.play_image?.setAttribute('src', this.play_image_src);
    };
    this.video_el.addEventListener('pause', this.pauseListener);

    // Change icon to 'play' on pause.

    if (this.video_el && this.playingListener)
      this.video_el.removeEventListener('playing', this.playingListener);
    this.playingListener = () => {
      this.play_image?.setAttribute('src', this.pause_image_src);
    };
    this.video_el.addEventListener('playing', this.playingListener);

    this.position_control_from_camera();
    this.el.setAttribute('visible', true);

    this.bar?.setAttribute('height', this.data.size / 4.0);
    this.bar?.setAttribute('width', this.data.size);
    this.bar?.setAttribute('position', '0.0 0.0 0');

    this.play_image?.setAttribute('height', this.data.size / 4.0);
    this.play_image?.setAttribute('width', this.data.size / 4.0);
    this.play_image?.setAttribute(
      'position',
      (-this.data.size / 2.0) * 1.4 + ' 0 0'
    );
  }
  /**
   * Called on each scene tick.
   */
  tick(t: number) {
    if (!this.video_el || !this.bar_canvas) return;

    // Refresh every 250 millis

    if (typeof this.last_time === 'undefined' || t - this.last_time > 250) {
      // At the very least, have all video metadata
      // (https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState)

      if (this.video_el.readyState > 0) {
        // Get current position minutes and second, and add leading zeroes if needed

        const current_minutes = Math.floor(this.video_el.currentTime / 60);
        const current_seconds = Math.floor(this.video_el.currentTime % 60);

        const current_minutes_str =
          current_minutes < 10 ? '0' + current_minutes : current_minutes;
        const current_seconds_str =
          current_seconds < 10 ? '0' + current_seconds : current_seconds;

        // Get video duration in  minutes and second, and add leading zeroes if needed

        const duration_minutes = Math.floor(this.video_el.duration / 60);
        const duration_seconds = Math.floor(this.video_el.duration % 60);

        const duration_minutes_str =
          duration_minutes < 10 ? '0' + duration_minutes : duration_minutes;
        const duration_seconds_str =
          duration_seconds < 10 ? '0' + duration_seconds : duration_seconds;

        // Refresh time information : currentTime / duration

        var time_info_text =
          current_minutes_str +
          ':' +
          current_seconds_str +
          ' / ' +
          duration_minutes_str +
          ':' +
          duration_seconds_str;

        //  Refresh transport bar canvas

        var inc = this.bar_canvas.width / this.video_el.duration;

        //  display buffered TimeRanges

        if (this.video_el.buffered.length > 0) {
          // Synchronize current step with currentTime

          this.current_step = Math.round(
            (this.video_el.currentTime / this.video_el.duration) *
              this.bar_steps
          );

          var ctx = this.context;
          if (!ctx) return;

          ctx.fillStyle = this.data.backgroundColor;
          ctx.fillRect(0, 0, this.bar_canvas.width, this.bar_canvas.height);

          // Uncomment to draw a single bar for loaded data instead of 'bins'

          //                ctx.fillStyle = "grey";
          //
          //                ctx.fillRect(0, 0,
          //                    (this.video_el.buffered.end(this.video_el.buffered.length - 1) / this.video_el.duration)*this.bar_canvas.width,
          //                    this.bar_canvas.height/2);

          // Display time info text

          ctx.font = this.data.timeTextFont;
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.fillText(
            time_info_text,
            this.bar_canvas.width / 2,
            this.bar_canvas.height * 0.65
          );

          // DEBUG PURPOSES

          //                ctx.fillText(this.video_el.readyState, this.bar_canvas.width*0.1, this.bar_canvas.height* 0.65);

          // If seeking to position, show

          if (this.video_el.seeking) {
            ctx.font = this.data.statusTextFont;
            ctx.fillStyle = this.data.textColor;
            ctx.textAlign = 'end';
            ctx.fillText(
              'Seeking',
              this.bar_canvas.width * 0.95,
              this.bar_canvas.height * 0.6
            );
          }

          // Uncomment below to see % of video loaded...
          else {
            var percent =
              (this.video_el.buffered.end(this.video_el.buffered.length - 1) /
                this.video_el.duration) *
              100;

            ctx.font = this.data.statusTextFont;
            ctx.fillStyle = this.data.textColor;
            ctx.textAlign = 'end';

            ctx.fillText(
              percent.toFixed(0) + '% loaded',
              this.bar_canvas.width * 0.95,
              this.bar_canvas.height * 0.6
            );
          }

          // Info text

          ctx.fillStyle = this.data.textColor;
          ctx.font = this.data.infoTextFont;
          ctx.textAlign = 'center';
          ctx.fillText(
            this.data.infoTextTop,
            this.bar_canvas.width / 2,
            this.bar_canvas.height * 0.8
          );
          ctx.fillText(
            this.data.infoTextBottom,
            this.bar_canvas.width / 2,
            this.bar_canvas.height * 0.95
          );

          // Show buffered ranges 'bins'

          for (var i = 0; i < this.video_el.buffered.length; i++) {
            var startX = this.video_el.buffered.start(i) * inc;
            var endX = this.video_el.buffered.end(i) * inc;
            var width = endX - startX;

            ctx.fillStyle = 'grey';
            ctx.fillRect(startX, 0, width, this.bar_canvas.height / 3);
          }

          // Red bar with already played range

          ctx.fillStyle = this.data.barColor;
          ctx.fillRect(
            0,
            0,
            (this.video_el.currentTime / this.video_el.duration) *
              this.bar_canvas.width,
            this.bar_canvas.height / 3
          );
        }

        // If material is not mapped yet to canvas texture and bar object3D is ready
        // assign canvas as a texture

        if (this.bar && this.bar.object3D.children.length > 0) {
          // If material is not mapped yet to canvas texture...

          const mesh = this.bar.object3D.children[0] as Mesh;
          const material = mesh.material as MeshStandardMaterial;

          if (material?.map == null) {
            const basicMaterial = new THREE.MeshBasicMaterial();
            basicMaterial.map = this.texture ?? null;
            mesh.material = basicMaterial;
          }

          if (this.texture) this.texture.needsUpdate = true;
        }
      }

      // Save this 't' to last_time

      this.last_time = t;
    }
  }
}
