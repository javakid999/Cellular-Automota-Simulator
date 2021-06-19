import { Canvas } from "./canvas";
import { Cell } from "./cell";
import { Vec } from "./vec";

export class Grid {
    dimensions: Vec;
    canvasDimensions: Vec;
    size: Vec;
    grid: Array<Array<Cell>>;
    constructor(dimensions: Vec, canvas: Canvas) {
        this.dimensions = dimensions;
        this.canvasDimensions = canvas.dimensions;
        this.size = new Vec(this.canvasDimensions.x / this.dimensions.x, this.canvasDimensions.y / this.dimensions.y);
        this.grid = Array.from({ length: 9 }, (_L, k) => Array.from({ length: 9 }, (_I, j) => new Cell(k,j,'white')));
        console.log(this);
    }
}