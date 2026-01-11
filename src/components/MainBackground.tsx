import { useEffect, useState, useRef } from "react";
import { Application } from '@pixi/react';
import { Application as PixiApp, Sprite, Assets } from 'pixi.js';
import MainBG from '../assets/images/arochaBG.png';

const MainBackground = () => {
  const [app, setApp] = useState<PixiApp | null>(null);
  const [isLoaded, setIsLoaded] = useState(false)
  const spriteRef = useRef<Sprite | null>(null);
  const fixedHeightRef = useRef<number>(0); // ✅ Store initial height

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const texture = await Assets.load(MainBG);
        texture.source.scaleMode = "nearest";

        const newSprite = new Sprite(texture);
        spriteRef.current = newSprite;
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to load texture:", error);
      }
    };

    loadTexture();

    // ✅ Capture initial viewport height (before Chrome toolbar hides)
    fixedHeightRef.current = window.innerHeight;
  }, []);

  useEffect(() => {
    const sprite = spriteRef.current;
    if (!app || !sprite || !isLoaded) return;

    const stage = app.stage;
    stage.addChild(sprite);

    const resize = () => {
      if (!sprite) return;
      
      const texture = sprite.texture;
      
      // ✅ Use FIXED height instead of dynamic window.innerHeight
      const viewportHeight = fixedHeightRef.current || window.innerHeight;
      
      const scale = Math.max(
        window.innerWidth / texture.width,
        viewportHeight / texture.height
      );

      sprite.scale.set(scale);

      // Desktop center | Mobile right-aligned
      if (window.innerWidth < 768) {
        sprite.x = window.innerWidth - sprite.width + 100;
      } else {
        sprite.x = (window.innerWidth - sprite.width) / 2;
      }

      sprite.y = (viewportHeight - sprite.height) / 2;
    };

    resize();
    
    // ✅ Only listen to width changes, ignore height changes on mobile
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      if (sprite && stage.children.includes(sprite)) {
        stage.removeChild(sprite);
      }
    };
  }, [app, isLoaded]);

  return (
    <div className="fixed inset-0 -z-10">
      <Application
        background="transparent"
        resizeTo={window}
        resolution={window.devicePixelRatio || 1}
        autoDensity={true}
        onInit={(application) => setApp(application)}
      />
    </div>
  );
};

export default MainBackground;