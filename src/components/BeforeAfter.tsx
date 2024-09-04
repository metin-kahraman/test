import React, { useState, useRef, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import { CustomBeforeAfterSliderProps } from '@/types'; // Import the types

const BeforeAfter: React.FC<CustomBeforeAfterSliderProps> = ({ beforeImage, afterImage, handleImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      if (position >= 0 && position <= 100) {
        setSliderPosition(position);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      if (position >= 0 && position <= 100) {
        setSliderPosition(position);
      }
    }
  };

  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      handleMouseMove(e as unknown as React.MouseEvent<HTMLDivElement>);
    };

    const handleDocumentTouchMove = (e: TouchEvent) => {
      handleTouchMove(e as unknown as React.TouchEvent<HTMLDivElement>);
    };

    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("touchmove", handleDocumentTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
    };
  }, [isDragging]);

  return (
    <Paper elevation={3} sx={{ padding: 5, backgroundColor: "orange" }}>
      <Box
        ref={sliderRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          overflow: "hidden",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown} // Ensure touch interactions also start dragging
        onTouchEnd={handleMouseUp}
      >
        <Box
          component="img"
          src={beforeImage}
          alt="Before"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          component="img"
          src={afterImage}
          alt="After"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: `${sliderPosition}%`,
            width: "2px",
            height: "100%",
            backgroundColor: "white",
            transform: "translateX(-50%)",
          }}
        />
        <Box
          component="img"
          src={handleImage}
          alt="Handle"
          sx={{
            position: "absolute",
            top: "50%",
            left: `${sliderPosition}%`,
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            borderRadius: 3
          }}
          draggable={false}
        />
      </Box>
    </Paper>
  );
};

export default BeforeAfter;
