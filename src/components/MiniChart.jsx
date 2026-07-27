import React, { useEffect, useRef } from "react";

const MiniChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    const basePoints = [52, 48, 62, 58, 70, 65, 74, 72, 80, 76, 84, 88];
    let offset = 0;
    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const pts = basePoints.map((v, i) => ({
        x: (i / (basePoints.length - 1)) * W,
        y: H - (v / 100) * H * 0.85 - H * 0.05 + Math.sin(i * 0.8 + offset) * 4,
      }));

      // Gradient fill
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "rgba(0,212,200,0.25)");
      grad.addColorStop(1, "rgba(0,212,200,0)");
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cx = (pts[i - 1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cx, pts[i - 1].y, cx, pts[i].y, pts[i].x, pts[i].y);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Line
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cx = (pts[i - 1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cx, pts[i - 1].y, cx, pts[i].y, pts[i].x, pts[i].y);
      }
      ctx.strokeStyle = "#00D4C8";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // End dot
      const last = pts[pts.length - 1];
      ctx.beginPath();
      ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#00D4C8";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(last.x, last.y, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,212,200,0.2)";
      ctx.fill();

      offset += 0.025;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="420"
      height="90"
      className="w-full h-[90px] block"
    />
  );
};

export default MiniChart;
