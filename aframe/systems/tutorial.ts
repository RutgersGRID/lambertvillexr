import { BaseSystem, system } from '~/manual_modules/aframe-class-components';
import document from '@/utils/document';
import { Entity } from 'aframe';

export class TutorialSegment {}

export class TutorialSystem extends BaseSystem {
  ballScenes?: TutorialSegment[];
  currSegment?: TutorialSegment;
}
