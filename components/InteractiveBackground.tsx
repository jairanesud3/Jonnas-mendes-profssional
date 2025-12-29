import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    // Configuration - MADE SQUARES MORE VISIBLE
    const SQUARE_SIZE = 2; 
    const GRID_SPACING = 35; // Tighter grid
    const SPEED_X = 0.4; 
    const SPEED_Y = -0.4; 
    const INTERACTION_RADIUS = 180; 

    interface Point {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
    }
    
    let points: Point[] = [];

    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      points = [];
      const cols = Math.ceil(width / GRID_SPACING) + 2; 
      const rows = Math.ceil(height / GRID_SPACING) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          points.push({
            x: i * GRID_SPACING,
            y: j * GRID_SPACING,
            baseX: i * GRID_SPACING,
            baseY: j * GRID_SPACING
          });
        }
      }
    };

    const handleResize = () => {
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    initGrid();

    let globalOffsetX = 0;
    let globalOffsetY = 0;

    const animate = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      globalOffsetX += SPEED_X;
      globalOffsetY += SPEED_Y;

      if (globalOffsetX > GRID_SPACING) globalOffsetX -= GRID_SPACING;
      if (globalOffsetY < -GRID_SPACING) globalOffsetY += GRID_SPACING;

      points.forEach(point => {
        let currentBaseX = point.baseX + globalOffsetX;
        let currentBaseY = point.baseY + globalOffsetY;

        const dx = mouseX - currentBaseX;
        const dy = mouseY - currentBaseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let renderX = currentBaseX;
        let renderY = currentBaseY;
        let size = SQUARE_SIZE;
        // INCREASED VISIBILITY HERE: 0.15 opacity instead of 0.05
        let color = 'rgba(255, 255, 255, 0.15)'; 

        if (distance < INTERACTION_RADIUS) {
          const force = (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;
          const angle = Math.atan2(dy, dx);
          
          const moveDistance = force * 50; 
          renderX -= Math.cos(angle) * moveDistance;
          renderY -= Math.sin(angle) * moveDistance;

          size = SQUARE_SIZE + (force * 3.5); 
          const alpha = 0.3 + (force * 0.7);
          color = `rgba(0, 255, 255, ${alpha})`; // Cyan highlight
        }

        ctx.fillStyle = color;
        ctx.fillRect(renderX - size / 2, renderY - size / 2, size, size);
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }} 
    />
  );
};