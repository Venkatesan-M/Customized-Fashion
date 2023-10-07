import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#4a90e2',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './Texture.png',
})

export default state;