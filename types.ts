import * as THREE from 'three';

export enum AppMode {
  TREE = 'TREE',
  SCATTER = 'SCATTER',
}

export interface HandData {
  gesture: 'FIST' | 'OPEN' | 'UNKNOWN' | 'NONE';
  position: { x: number; y: number; z: number }; // Normalized 0-1
  tilt: number; // Rotation factor
}

export interface ParticleData {
  id: number;
  initialPos: THREE.Vector3;
  treePos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  color: THREE.Color;
  size: number;
  speed: number;
}

export interface PhotoData {
  id: string;
  url: string;
  ratio: number;
}
