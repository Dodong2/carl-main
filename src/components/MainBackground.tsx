import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import MainBG from '../assets/images/arochaBG.png'

const MainBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const spriteRef = useRef<PIXI.Sprite | null>(null);

  useEffect(() => {
    let mounted = true;

    const initPixi = async () => {
      try {
        const app = new PIXI.Application();
        
        await app.init({
          resizeTo: window,
          backgroundAlpha: 0,
          resolution: window.devicePixelRatio || 1,
          autoDensity: true,
        });

        // Check if component unmounted during init
        if (!mounted || !containerRef.current) {
          app.destroy(true);
          return;
        }

        appRef.current = app;
        containerRef.current.appendChild(app.canvas);

        // Load texture (public folder files are served from root)
        const texture = await PIXI.Assets.load(MainBG);

        // Check again after async operation
        if (!mounted) {
          app.destroy(true);
          return;
        }

        // ✅ PIXEL PERFECT - Correct syntax for PixiJS v8
        texture.source.scaleMode = "nearest";

        const sprite = new PIXI.Sprite(texture);
        spriteRef.current = sprite;
        app.stage.addChild(sprite);

        // Resize function - Update both scale and position
        const resize = () => {
          if (!app || !sprite || !texture) return;

          // Update renderer size first
          app.renderer.resize(window.innerWidth, window.innerHeight);

          const scale = Math.max(
            window.innerWidth / texture.width,
            window.innerHeight / texture.height
          );

          sprite.scale.set(scale);

          // Desktop center | Mobile right-aligned
          if (window.innerWidth < 768) {
            // Mobile: align right
            sprite.x = window.innerWidth - sprite.width;
          } else {
            // Desktop: center
            sprite.x = (window.innerWidth - sprite.width) / 2;
          }

          sprite.y = (window.innerHeight - sprite.height) / 2;
        };

        resize();
        window.addEventListener("resize", resize);

        // Also add ticker to ensure continuous updates
        app.ticker.add(() => {
          if (sprite && texture) {
            const currentWidth = window.innerWidth;
            const scale = Math.max(
              currentWidth / texture.width,
              window.innerHeight / texture.height
            );

            sprite.scale.set(scale);

            if (currentWidth < 768) {
              sprite.x = currentWidth - sprite.width;
            } else {
              sprite.x = (currentWidth - sprite.width) / 2;
            }

            sprite.y = (window.innerHeight - sprite.height) / 2;
          }
        });

        // Store cleanup function
        return () => {
          window.removeEventListener("resize", resize);
        };
      } catch (error) {
        console.error("PixiJS initialization error:", error);
      }
    };

    let cleanup: (() => void) | undefined;
    
    initPixi().then((cleanupFn) => {
      cleanup = cleanupFn;
    });

    return () => {
      mounted = false;

      // Run resize cleanup
      if (cleanup) cleanup();

      // Destroy PixiJS app
      if (appRef.current) {
        appRef.current.destroy(true, { children: true });
        appRef.current = null;
      }

      spriteRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default MainBackground;