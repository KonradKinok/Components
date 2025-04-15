import React, { useState, useEffect } from "react";

interface ToolTipComponentProps {
  children: React.ReactNode;
  tooltipText: string;
}

export const ToolTipComponent: React.FC<ToolTipComponentProps> = ({
  children,
  tooltipText,
}) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updateTooltipPosition = (e: Event) => {
      // Rzutujemy e na MouseEvent, bo wiemy, że dotyczy zdarzenia myszy
      const mouseEvent = e as MouseEvent;
      const tooltip = mouseEvent.target as HTMLElement;
      const rect = tooltip.getBoundingClientRect();
      const tooltipWidth = 200; // przykładowa szerokość tooltipa (można dynamicznie ustawić)
      const screenWidth = window.innerWidth;

      let newLeft = rect.left + window.scrollX;
      let newTop = rect.top + window.scrollY - 100; // 40px nad elementem

      // Sprawdzamy, czy tooltip wychodzi poza ekran w prawo
      if (newLeft + tooltipWidth > screenWidth) {
        newLeft = screenWidth - tooltipWidth - 10; // 10px od marginesu
      }

      // Sprawdzamy, czy tooltip wychodzi poza ekran w lewo
      if (newLeft < 10) {
        newLeft = 10; // 10px od marginesu lewej strony
      }

      // Sprawdzamy, czy tooltip wychodzi poza ekran w górę
      if (newTop < 10) {
        newTop = rect.top + window.scrollY + 40; // Jeśli jest zbyt blisko góry, wyświetlamy go poniżej
      }

      setTooltipPosition({
        top: newTop,
        left: newLeft,
      });
    };

    const tooltipElement = document.querySelector("[data-tooltip]");

    tooltipElement?.addEventListener("mouseover", updateTooltipPosition);

    return () => {
      tooltipElement?.removeEventListener("mouseover", updateTooltipPosition);
    };
  }, []);

  return (
    <div
      data-tooltip
      style={{
        position: "relative",
      }}>
      {children}
      <div
        style={{
          position: "absolute",
          top: tooltipPosition.top,
          left: tooltipPosition.left,
          opacity: 1,
          background: "#1E2126",
          color: "#fff",
          borderRadius: "6px",
          padding: ".5rem 1rem",
          fontSize: "13px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          transition: "opacity 0.2s ease-in-out",
        }}>
        {tooltipText}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #1E2126",
            width: 0,
            height: 0,
          }}
        />
      </div>
    </div>
  );
};
