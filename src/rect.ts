import { Canvas } from "./canvas";
import { Vec } from "./vec";

export class Rect {
    position: Vec;
    size: Vec;
    color: string;

    constructor(position: Vec, size: Vec, color: string) {
        this.position = position;
        this.size = size;
        this.color = color;
    }

    render(canvas: Canvas) {
        canvas.ctx.fillStyle = this.color;
        canvas.ctx.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);
    }
}