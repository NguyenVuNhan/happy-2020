class Particle {
  constructor(pos) {
    this.pos = {x: pos ? pos.x : 0, y: pos ? pos.y : 0};
    this.vel = {x: 0, y: 0};
    this.shrink = 0.97;
    this.size = 2;
    this.resistance = 1;
    this.gravity = 0;
    this.flick = false;
    this.alpha = 1;
    this.fade = 0;
    this.color = 0;
  }
  update() {
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;
    this.vel.y += this.gravity;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.size *= this.shrink;
    this.alpha -= this.fade;
  }
  exists() {
    return this.alpha >= 0.1 && this.size >= 1;
  }
}
export default Particle;
