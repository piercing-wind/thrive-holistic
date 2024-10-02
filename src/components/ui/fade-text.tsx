"use client";

import { useMemo, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

type FadeTextProps = {
  className?: string;
  classNameDiv?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: string;
};

export function FadeText({
  direction = "up",
  className,
  classNameDiv,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 4, type: "tween", ease: "easeInOut" } },
  },
  text,
}: FadeTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const directionOffset = useMemo(() => {
    const map = { up: 100, down: -50, left: -100, right: 100 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={FADE_ANIMATION_VARIANTS}
      className={classNameDiv}
    >
      <motion.span className={className}>{text}</motion.span>
    </motion.div>
  );
}