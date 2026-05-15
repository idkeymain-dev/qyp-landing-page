"use client";

const BLOBS = [
  { left: "10%",  top: "55%", w: 560, h: 460, color: "26,158,148",  alpha: 0.70, anim: "blob0", dur: "7s" },
  { left: "65%",  top: "38%", w: 500, h: 520, color: "46,196,182",  alpha: 0.60, anim: "blob1", dur: "9s" },
  { left: "38%",  top: "25%", w: 340, h: 320, color: "245,166,36",  alpha: 0.40, anim: "blob2", dur: "6s" },
  { left: "62%",  top: "5%",  w: 400, h: 370, color: "26,158,148",  alpha: 0.50, anim: "blob3", dur: "10s" },
  { left: "45%",  top: "70%", w: 440, h: 400, color: "46,196,182",  alpha: 0.45, anim: "blob4", dur: "8s" },
  { left: "25%",  top: "10%", w: 300, h: 280, color: "245,166,36",  alpha: 0.35, anim: "blob5", dur: "11s" },
  { left: "78%",  top: "75%", w: 380, h: 350, color: "26,158,148",  alpha: 0.45, anim: "blob6", dur: "7.5s" },
  { left: "5%",   top: "20%", w: 260, h: 240, color: "46,196,182",  alpha: 0.35, anim: "blob7", dur: "9.5s" },
];

const CSS = `
  @keyframes blob0 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(60px,-40px) scale(1.05); }
    66%      { transform: translate(-30px,30px) scale(0.96); }
  }
  @keyframes blob1 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(-50px,35px) scale(1.04); }
    66%      { transform: translate(40px,-50px) scale(0.97); }
  }
  @keyframes blob2 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(45px,45px) scale(0.95); }
    66%      { transform: translate(-55px,-25px) scale(1.06); }
  }
  @keyframes blob3 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(-40px,-50px) scale(1.07); }
    66%      { transform: translate(50px,30px) scale(0.94); }
  }
  @keyframes blob4 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(35px,-45px) scale(1.03); }
    66%      { transform: translate(-45px,40px) scale(0.98); }
  }
  @keyframes blob5 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(50px,30px) scale(1.06); }
    66%      { transform: translate(-35px,-45px) scale(0.94); }
  }
  @keyframes blob6 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(-55px,25px) scale(0.95); }
    66%      { transform: translate(30px,-40px) scale(1.05); }
  }
  @keyframes blob7 {
    0%,100% { transform: translate(0px,0px) scale(1); }
    33%      { transform: translate(40px,50px) scale(1.04); }
    66%      { transform: translate(-30px,-35px) scale(0.97); }
  }
`;

export function BlobBackground() {
  return (
    <>
      <style>{CSS}</style>
      <div style={{
        position: "fixed", inset: 0, zIndex: -10,
        overflow: "hidden", backgroundColor: "#1a1a1c",
      }}>
        {BLOBS.map((b) => (
          <div
            key={b.anim}
            style={{
              position: "absolute",
              left: b.left, top: b.top,
              width: b.w, height: b.h,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(${b.color},${b.alpha}) 0%, transparent 70%)`,
              filter: "blur(72px)",
              animation: `${b.anim} ${b.dur} ease-in-out infinite`,
              willChange: "transform",
            }}
          />
        ))}
        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, #1a1a1c 100%)",
        }} />
      </div>
    </>
  );
}
