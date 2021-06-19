import { Canvas } from './canvas';
import { Grid } from './grid';
import { Rect } from './rect';
import { Vec } from './vec';


const C = new Canvas(new Vec(600,600));
C.renderer.add(new Rect(new Vec(20,20), new Vec(20,20), "#ff0000"));
C.render();

const G = new Grid(new Vec(40,40), C);
