"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./TypingEffect.css"; 

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Designer",
        "<span style='color: orange;'>Web Developer</span>",
        "Freelancer"
      ],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 2000, 
      startDelay: 1000, 
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|", 
      onComplete: (self) => {
        self.cursor.style.animation = "blink 1s infinite";
      },
      preStringTyped: (arrayPos, self) => {
        self.cursor.style.animation = "none";
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypingEffect;
