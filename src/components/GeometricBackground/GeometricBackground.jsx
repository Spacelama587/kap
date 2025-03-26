"use client";

import React, { useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { Shapes } from 'lucide-react';

const GeometricBackground= () => {
  const containerRef = useRef(null);
  const shapesRefs = useRef([]);

  useGSAP(() => {
    const shapes = shapesRefs.current;

    // Staggered float animation
    gsap.fromTo(shapes, 
      { 
        y: 20, 
        opacity: 0,
        scale: 0.8,
        rotation: -10
      },
      {
        y: -20,
        opacity: 1,
        scale: 1,
        rotation: 10,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.2,
        yoyo: true,
        repeat: -1
      }
    );

    // Subtle rotation of entire container
    gsap.to(containerRef.current, {
      rotation: 2,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64">
        <div 
          ref={(el) => shapesRefs.current[0] = el}
          className="absolute top-0 left-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"
        />
        <div 
          ref={(el) => shapesRefs.current[1] = el}
          className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/20 rounded-lg transform rotate-45 blur-xl"
        />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-64 h-64">
        <div 
          ref={(el) => shapesRefs.current[2] = el}
          className="absolute top-0 right-0 w-40 h-40 bg-gray-500/20 rounded-tr-[50px] transform -rotate-12 blur-xl"
        />
        <div 
          ref={(el) => shapesRefs.current[3] = el}
          className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 hexagon transform blur-2xl"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Shapes 
          className="w-24 h-24 text-gray-300/30 animate-pulse"
        />
      </div>
    </div>
  );
};

export default GeometricBackground;