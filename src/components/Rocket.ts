import Particle from './Particle';

class Rocket extends Particle {
  explosionColor: number;

  constructor(x: number, y: number) {
    super({ x, y });
    this.explosionColor = 0;
  }

  explode(pushParticles: (p: Particle[]) => void) {
    var count = Math.random() * 10 + 80;

    let thisParticles = [];
    for (var i = 0; i < count; i++) {
      var particle = new Particle(this.pos);
      var angle = Math.random() * Math.PI * 2;
      var speed = Math.cos((Math.random() * Math.PI) / 2) * 15;
      particle.vel.x = Math.cos(angle) * speed;
      particle.vel.y = Math.sin(angle) * speed;
      particle.size = 5;
      particle.gravity = 0.2;
      particle.resistance = 0.92;
      particle.shrink = Math.random() * 0.05 + 0.93;
      particle.flick = true;
      particle.color = this.explosionColor;
      thisParticles.push(particle);
    }
    pushParticles(thisParticles);
  }
}

export default Rocket;
