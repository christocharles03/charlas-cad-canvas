
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xdc2626, // AutoCAD Red color
        backgroundColor: 0x1a1a1a, // Dark background
        points: 8.00,
        maxDistance: 25.00,
        spacing: 20.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default VantaBackground;
