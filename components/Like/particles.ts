interface Point {
  x: number;
  y: number;
}

interface Particle {
  location: Point;
  angle: number;
  velocity: number;
  startingVelocity: number;
  decay: number;
  radius: number;
}

class ParticleManager {
  particles: Set<Particle> = new Set();
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.canvas = canvas;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const particle of this.particles) {
      ctx.beginPath();

      ctx.fillStyle = `rgba(230, 46, 46, ${Math.sin(
        (particle.velocity / particle.startingVelocity) * Math.PI
      )})`;

      ctx.arc(
        particle.location.x,
        particle.location.y,
        particle.radius,
        0,
        2 * Math.PI,
        false
      );

      ctx.fill();
    }
  }

  public update(dt: number): void {
    for (const particle of this.particles) {
      particle.location.x +=
        Math.sin(particle.angle) * (particle.velocity * dt);
      particle.location.y +=
        Math.cos(particle.angle) * (particle.velocity * dt);

      particle.velocity *= particle.decay;

      if (particle.velocity < 0.001) {
        this.particles.delete(particle);
      }
    }
  }

  public done(): boolean {
    return this.particles.size === 0;
  }

  public explode(count = 50): void {
    for (let i = 0; i < count; i++) {
      const radius = 1 + Math.floor(Math.random() * 3);
      const velocity = Math.random() / 4 + 0.01;

      this.particles.add({
        location: { x: this.canvas.width / 2, y: this.canvas.height / 2 },
        angle: Math.random() * (Math.PI * 2),
        decay: 0.86,
        startingVelocity: velocity,
        velocity,
        radius,
      });
    }
  }
}

export default ParticleManager;
