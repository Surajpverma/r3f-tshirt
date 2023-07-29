import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#D9003D',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './dark.png',
  fullDecal: './dark.png',
});

export default state;