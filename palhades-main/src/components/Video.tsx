import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { SlideRight } from "../animations/animate";

const Video = ({
  playing,
  replay,
  setReplay,
  showLogo,
  setShowLogo,
  setPlaying,
}: {
  playing: boolean;
  replay: boolean;
  setReplay: (value: boolean) => void;
  showLogo: boolean;
  setShowLogo: (value: boolean) => void;
  setPlaying: (value: boolean) => void;
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false); // to ensure one-time start

  // Auto-play after 2s delay when in view, pause when out
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          timeoutRef.current = window.setTimeout(() => {
            setPlaying(true);
            setShowLogo(false);
          }, 2000);
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setPlaying(false);
          setShowLogo(true); // Optional: show logo when scrolled away
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [setPlaying, setShowLogo]);

  // Handle manual replay
  useEffect(() => {
    if (replay) {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
      setPlaying(true);
      setReplay(false);
      setShowLogo(false);
    }
  }, [replay, setReplay, setShowLogo]);

  return (
    <motion.div
      ref={containerRef}
      variants={SlideRight(0.4, 150)}
      initial="initial"
      whileInView="animate"
      className="player-wrapper"
    >
      {showLogo ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.jpg" alt="Video Player" className="rounded-full" />
        </div>
      ) : (
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url="/palhades-video.MOV"
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
          muted={true}
          loop={true}
        />
      )}
    </motion.div>
  );
};

export default Video;
