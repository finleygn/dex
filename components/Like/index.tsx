import React, { FC, useEffect, useRef } from 'react';
import ParticleManager from './particles';
import { Canvas, Container, Svg } from './style';

interface LikeProps {
  liked: boolean;
}

const Like: FC<LikeProps> = ({ liked }) => {
  const canvas = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (liked && canvas.current) {
      const ctx = canvas.current.getContext('2d');
      const { width, height } = canvas.current.getBoundingClientRect();

      canvas.current.width = width;
      canvas.current.height = height;

      const particleManager = new ParticleManager(canvas.current, ctx);
      particleManager.explode();

      let then = Date.now();

      const loop = () => {
        const now = Date.now();
        const dt = now - then;
        then = now;

        particleManager.draw(ctx);
        particleManager.update(dt);

        if (particleManager.done()) {
          return;
        }

        window.requestAnimationFrame(loop);
      };

      loop();
    }
  }, [liked]);

  const style = liked
    ? {
        fill: '#e62e2e',
        stroke: '#e62e2e',
        strokeWidth: '2px',
      }
    : {
        stroke: '#fff',
        strokeWidth: '2px',
        fill: 'transparent',
      };

  return (
    <Container>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -4 24 24"
        width="36"
        height="36"
      >
        <path
          {...style}
          d="M9.293 1.55l.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"
        ></path>
      </Svg>
      {liked && <Canvas ref={canvas} />}
    </Container>
  );
};

export default Like;
