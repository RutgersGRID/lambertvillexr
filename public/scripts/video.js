if (typeof AFRAME === "undefined") {
  throw new Error("Component attempted to register before AFRAME was available.");
}

AFRAME.registerComponent("video", {
  schema: {
    src: { type: "string" },
    width: { default: 16 },
    height: { default: 9 },
  },
  init: function () {
    this.playImageSrc =
      "https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png";
    this.pauseImageSrc =
      "https://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png";

    this.animDuration = 200;
    this.animEasing = "easeOutCubic";
    const percentageOfVideoPlane = 0.3;

    this.playPlane = document.createElement("a-plane");
    this.el.classList.add("clickable");
    this.el.appendChild(this.playPlane);
    const smallestDim = this.data.width < this.data.height ? this.data.width : this.data.height;
    const playPlaneDim = smallestDim * percentageOfVideoPlane;
    this.playPlane.object3D.position.copy(new THREE.Vector3(0, 0, 0.1));
    this.playPlane.object3D.scale.copy(new THREE.Vector3(playPlaneDim, playPlaneDim, playPlaneDim));

    this.update();
    this.updateAnimations(this.animDuration);

    this.el.addEventListener("mouseenter", () => {
      this.isHovering = true;
      this.showControls();
    });
    this.el.addEventListener("mouseleave", () => {
      this.isHovering = false;
      this.hideControls();
      clearTimeout(this.fadeControlsTimer);
    });
    this.el.addEventListener("click", () => {
      if (!this.controlsVisible) return;
      clearTimeout(this.fadeControlsTimer);
      if (!this.isPlayable()) return;
      if (this.isVideoPlaying) {
        this.isVideoPlaying = false;
        this.videoElem.pause();
      } else {
        this.isVideoPlaying = true;
        this.videoElem.play();
        this.fadeControlsTimer = setTimeout(() => this.hideControls(500), 1000);
      }
      this.updatePlaybackUI();
    });
    this.videoElem.addEventListener("ended", () => {
      this.updatePlaybackUI();
    });
  },
  update: function () {
    this.el.setAttribute("material", `shader: flat; src: ${this.data.src};`);
    this.el.setAttribute("geometry", `primitive: plane; width: ${this.data.width}; height: ${this.data.height}`);
    this.videoElem = document.querySelector(this.data.src);
    this.isVideoPlaying = !!(
      this.videoElem.currentTime > 0 &&
      !this.videoElem.paused &&
      !this.videoElem.ended &&
      this.videoElem.readyState > 2
    );
    this.updatePlaybackUI();
  },
  showControls: function (animDuration = this.animDuration) {
    if (this.controlsVisible) return;
    this.controlsVisible = true;
    this.updateAnimations(animDuration);
    this.el.emit("showcontrols");
    this.playPlane.emit("showcontrols");
  },
  hideControls: function (animDuration = this.animDuration) {
    if (!this.controlsVisible) return;
    this.controlsVisible = false;
    this.updateAnimations(animDuration);
    this.el.emit("hidecontrols");
    this.playPlane.emit("hidecontrols");
  },
  isPlayable: function () {
    return this.videoElem.readyState > 2;
  },
  updatePlaybackUI: function () {
    this.playPlane.setAttribute("material", "src", this.isVideoPlaying ? this.pauseImageSrc : this.playImageSrc);
  },
  updateAnimations: function (animDuration = this.animDuration, animEasing = this.animEasing) {
    this.playPlane.setAttribute("material", "transparent", true);
    this.playPlane.setAttribute("material", "opacity", 0);
    this.playPlane.setAttribute("animation__videohoverenter_color", {
      property: "material.opacity",
      to: 1,
      startEvents: "showcontrols",
      dur: animDuration,
      easing: animEasing,
    });
    this.playPlane.setAttribute("animation__videohoverleave_color", {
      property: "material.opacity",
      to: 0,
      startEvents: "hidecontrols",
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute("animation__mouseenter_color", {
      property: "material.color",
      to: "#686868",
      startEvents: "showcontrols",
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute("animation__mouseenter_scale", {
      property: "scale",
      to: { x: 1.01, y: 1.01, z: 1.01 },
      startEvents: "showcontrols",
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute("animation__mouseleave_color", {
      property: "material.color",
      to: "#FFFFFF",
      startEvents: "hidecontrols",
      dur: animDuration,
      easing: animEasing,
    });
    this.el.setAttribute("animation__mouseleave_scale", {
      property: "scale",
      to: { x: 1, y: 1, z: 1 },
      startEvents: "hidecontrols",
      dur: animDuration,
      easing: animEasing,
    });
  },
});
