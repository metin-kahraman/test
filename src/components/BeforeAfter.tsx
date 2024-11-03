import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Grid2, Paper, Zoom } from "@mui/material";
import { CustomBeforeAfterSliderProps } from '@/types'; 
import { IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CloseRounded from "@mui/icons-material/CloseRounded";
import SitemarkIcon from "./SitemarkIcon";

const BeforeAfter: React.FC<CustomBeforeAfterSliderProps> = ({ beforeImage, afterImage, handleImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <Paper elevation={3} sx={{ padding: 5, backgroundColor: "white" }}>
      <Box
        ref={sliderRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "210px",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          overflow: "hidden",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Before and After Images */}
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
            border: '1px solid #FFA500',
            borderRadius: '15px',
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
            border: '1px solid #FFA500',
            borderRadius: '15px',
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
            width: "30px",
            height: "33px",
            cursor: "pointer",
            borderRadius: '50%',
            border: 2,
            borderColor: 'white'
          }}
          draggable={false}
        />
      </Box>
      {/* Zoom Button */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 3 }}>
        <IconButton onClick={() => setOpen(true)} aria-label="zoom" sx={{ color: "orange" }}>
          <ZoomInIcon />
        </IconButton>
      </div>
      {/* Dialog for Zoomed Image */}
      <Dialog open={open} onClose={() => setOpen(false)} aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          <Grid2 size={{ xs: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 3 }}>
              <SitemarkIcon />
            </div>
            <Grid2 size={{ xs: 12 }}>
              <img src={afterImage} style={{ borderWidth: 2, borderRadius: 3 }} width='100%' alt="" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>İMZA</Grid2>
            <img src={beforeImage} style={{ borderWidth: 2, borderRadius: 3 }} width='100%' alt="" />
          </Grid2>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={() => setOpen(false)} aria-label="zoomClose" sx={{ color: "orange" }}>
            <CloseRounded />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default BeforeAfter;
