/* Loads three.js as ES modules and exposes it as window.THREE for the classic scripts. */
import * as T from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
window.THREE = Object.assign({}, T, { GLTFLoader, EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, OutputPass });
window.dispatchEvent(new Event("three-ready"));
