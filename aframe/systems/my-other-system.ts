import { BaseSystem, system } from '@/manual_modules/aframe-class-components';

const THREE = AFRAME.THREE;
THREE.Vector2.prototype.toString = function (): string {
  return `(${this.x}, ${this.y})`;
};

@system('my-other-system')
class MyOtherSystem extends BaseSystem {
  init(): void {
    console.log('Hello world from my-other-system!');
    const one = new THREE.Vector2(5, 3);
    const two = new THREE.Vector2(5, 4);

    const onePlusTwo = one.clone();
    onePlusTwo.add(two);
    console.log(`${one} + ${two} = ${onePlusTwo}`);
  }
}
