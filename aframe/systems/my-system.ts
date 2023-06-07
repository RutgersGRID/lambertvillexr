import { BaseSystem, system } from '@/manual_modules/aframe-class-components';

const THREE = AFRAME.THREE;

THREE.Vector2.prototype.toString = function (): string {
  return `(${this.x}, ${this.y})`;
};

@system('my-system')
class MySystem extends BaseSystem {
  init(): void {
    console.log('Hello world from my-system!');
    const one = new THREE.Vector2(1, 3);
    const two = new THREE.Vector2(2, 4);

    const onePlusTwo = one.clone();
    onePlusTwo.add(two);
    console.log(`${one} + ${two} = ${onePlusTwo}`);
  }
}
