import React, { CSSProperties, FC, useState } from 'react';
import useInterval from '../hooks/useInterval';
import type Particle from './Particle';
import Rocket from './Rocket';

interface Props {
  width: number;
  height: number;
  maxParticles: number;
  style: CSSProperties;
}

const Firework: FC<Props> = ({ width, height, style, maxParticles }) => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const loop = () => {
    var existingParticles = [];

    for (i = 0; i < particles.length; i++) {
      particles[i].update();

      // render and save particles that can be rendered
      if (particles[i].exists()) {
        // particles[i].render(context);
        existingParticles.push(particles[i]);
      }
    }

    // update array with existing particles - old particles should be garbage collected
    setParticles(existingParticles);

    var existingRockets = [];

    for (var i = 0; i < rockets.length; i++) {
      // update and render
      rockets[i].update();
      // rockets[i].render(context);

      var distance = Math.sqrt(
        Math.pow(width - rockets[i].pos.x, 2) +
          Math.pow(height - rockets[i].pos.y, 2),
      );

      var randomChance =
        rockets[i].pos.y < (height * 2) / 3 ? Math.random() * 100 <= 1 : false;

      if (
        rockets[i].pos.y < height / 5 ||
        rockets[i].vel.y >= 0 ||
        distance < 50 ||
        randomChance
      ) {
        rockets[i].explode((p: Particle[]) => {
          setParticles([...particles, ...p]);
        });
      } else {
        existingRockets.push(rockets[i]);
      }
    }

    setRockets(existingRockets);
    while (particles.length > maxParticles) {
      particles.shift();
    }
  };

  const launch = () => {
    if (rockets.length < 10) {
      var rocket = new Rocket(width / 2, height);
      rocket.explosionColor = Math.floor((Math.random() * 360) / 10) * 10;
      rocket.vel.y = Math.random() * -3 - 4;
      rocket.vel.x = Math.random() * 6 - 3;
      rocket.size = 8;
      rocket.shrink = 0.999;
      rocket.gravity = 0.01;
      setRockets([...rockets, rocket]);
    }
  };

  useInterval(launch, 800);
  useInterval(loop, 1000 / 50);

  return (
    <svg className="firework" style={{ width, height, ...style }}>
      {particles.map((particle, index) => {
        const x = particle.pos.x;
        const y = particle.pos.y;
        const s = particle.flick
          ? Math.random() * particle.size + particle.size
          : particle.size;

        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={s}
            fill={`hsla(${particle.color}, 100%, 50%, ${particle.alpha})`}
          />
        );
      })}
      {rockets.map((rocket, index) => {
        const x = rocket.pos.x;
        const y = rocket.pos.y;

        return (
          <React.Fragment key={index}>
            <defs>
              <linearGradient
                id={`rocket${index}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: 'rgb(255,255,255)',
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: 'rgba(0,0,0)',
                    stopOpacity: 0,
                  }}
                />
              </linearGradient>
            </defs>
            <line
              x1={width / 2}
              y1={height}
              x2={x}
              y2={y}
              stroke={`url(#rocket${index})`}
              strokeWidth={5}
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};

export default Firework;
