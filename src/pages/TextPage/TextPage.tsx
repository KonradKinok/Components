import React, { useEffect, useRef } from "react";
import scss from "./TextPage.module.scss";

export default function TextPage() {
  useEffect(() => {
    function triggerAnimation() {
      const elements = document.querySelectorAll("[data-gold]");
      elements.forEach((element) => {
        element.classList.add(`${scss["animate"]}`);
        setTimeout(() => {
          element.classList.remove(`${scss["animate"]}`);
        }, 6000); // Usuń klasę po 2 sekundach (czas trwania animacji)
      });
    }

    triggerAnimation(); // Uruchom od razu po załadowaniu
    const interval = setInterval(triggerAnimation, 16000); // Uruchamiaj co 10 minut

    // Czyszczenie interwału przy odmontowaniu komponentu
    return () => clearInterval(interval);
  }, []); // Pusty dependency array, aby useEffect wykonał się tylko raz

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const containerWidth = 300;
    const containerHeight = 200;
    const dotRadius = 1;

    // Tablica trzech kropek z losowymi początkowymi pozycjami i kątami
    const dots = Array.from({ length: 20 }, () => ({
      x: Math.random() * (containerWidth - 2 * dotRadius) + dotRadius,
      y: Math.random() * (containerHeight - 2 * dotRadius) + dotRadius,
      vx: 0,
      vy: 0,
      speed: 0.01 + Math.random() * 0.09, // Losowa prędkość od 0.01 do 0.1
    }));

    // Ustaw początkowe prędkości dla każdej kropki
    dots.forEach((dot) => {
      const angle = Math.random() * 2 * Math.PI;
      dot.vx = dot.speed * Math.cos(angle);
      dot.vy = dot.speed * Math.sin(angle);
    });

    const animate = () => {
      // Wyczyść canvas
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // Aktualizuj każdą kropkę
      dots.forEach((dot) => {
        // Aktualizuj pozycję
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Sprawdź kolizje z krawędziami
        if (dot.x - dotRadius <= 0 || dot.x + dotRadius >= containerWidth) {
          // Odbicie od lewej/prawej krawędzi
          dot.vx = -dot.vx;
          // Losowy kąt odchylenia (±45 stopni)
          const deviation = ((Math.random() - 0.5) * Math.PI) / 2;
          const newAngle = Math.atan2(dot.vy, dot.vx) + deviation;
          dot.vx = dot.speed * Math.cos(newAngle);
          dot.vy = dot.speed * Math.sin(newAngle);
          // Upewnij się, że kropka nie wychodzi poza krawędź
          dot.x = Math.max(
            dotRadius,
            Math.min(containerWidth - dotRadius, dot.x),
          );
        }

        if (dot.y - dotRadius <= 0 || dot.y + dotRadius >= containerHeight) {
          // Odbicie od górnej/dolnej krawędzi
          dot.vy = -dot.vy;
          // Losowy kąt odchylenia (±45 stopni)
          const deviation = ((Math.random() - 0.5) * Math.PI) / 2;
          const newAngle = Math.atan2(dot.vy, dot.vx) + deviation;
          dot.vx = dot.speed * Math.cos(newAngle);
          dot.vy = dot.speed * Math.sin(newAngle);
          // Upewnij się, że kropka nie wychodzi poza krawędź
          dot.y = Math.max(
            dotRadius,
            Math.min(containerHeight - dotRadius, dot.y),
          );
        }

        // Rysuj kropkę
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fill();
        ctx.closePath();
      });

      // Kontynuuj animację
      requestAnimationFrame(animate);
    };

    // Rozpocznij animację
    animate();

    // Czyszczenie przy odmontowaniu
    return () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);
    };
  }, []);
  return (
    <section className={scss["container-text-page"]}>
      <h1>TextPage</h1>
      <div className={scss["container-gold-text"]}>
        <h2 className={scss["gold-text"]} data-gold="#codevember">
          ADMIN:
        </h2>
        <p className={scss["gold-text"]} data-gold="#codevember">
          ADMIN:
        </p>
      </div>
      <div className={scss["container-silver-text"]}>
        <h2 className={scss["silver-text"]} data-silver="Metallic Text">
          USER:
        </h2>
        <p className={scss["silver-text"]} data-silver="Metallic Text">
          USER:
        </p>
      </div>
      <div className={scss["animation-background-main-container"]}>
        <div className={scss["animation-background-container"]}>
          <canvas
            ref={canvasRef}
            width={300}
            height={200}
            className={scss["canvas"]}
          />
          <div className={scss["canvas"]}>Bilancio</div>
        </div>
      </div>
    </section>
  );
}
