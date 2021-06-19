import { Rect } from "./rect";
import { Vec } from "./vec";

export class Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dimensions: Vec;
    renderer: Set<Rect>;

    constructor(dimensions: Vec) {
        this.canvas = document.createElement('CANVAS') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.dimensions = dimensions;
        this.canvas.width = dimensions.x;
        this.canvas.height = dimensions.y;
        this.renderer = new Set();
        document.body.appendChild(this.canvas);
    }

    render() {
        this.renderer.forEach((object) => {
            object.render(this);
        });
    }
}