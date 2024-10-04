'use client'
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160, // Adjusted default radius to fit within the parent div
  path = true,
}: OrbitingCirclesProps) {
  const [currentRadius, setCurrentRadius] = useState(radius);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      let newRadius = radius; // Default radius

      if (width >= 1000) {
        newRadius = radius;
      } else if (width >= 800) {
        newRadius = radius - 20;
      } else if (width >= 600) {
        newRadius = radius - 40;
      }

      setCurrentRadius(newRadius);
    };

    // Update radius on initial render
    updateRadius();

    // Update radius on window resize
    window.addEventListener('resize', updateRadius);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateRadius);
    };
  }, [radius]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childrenArray = Array.from(container.children);
    const totalChildren = childrenArray.length;
    const angleStep = (2 * Math.PI) / totalChildren;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const angleOffset = (elapsed / (duration * 1000)) * (2 * Math.PI) * (reverse ? -1 : 1);

      childrenArray.forEach((child, index) => {
        const angle = angleStep * index + angleOffset;
        const x = currentRadius * Math.cos(angle);
        const y = currentRadius * Math.sin(angle);
        (child as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [currentRadius, duration, reverse]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center",
        className,
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div className="absolute">
          {child}
        </div>
      ))}
    </div>
  );
}