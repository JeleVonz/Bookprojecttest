import imgLibrary from "figma:asset/323b9bf3762217d940b8f06920cbaf7f759a3476.png";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";

interface ProfileSetupProps {
  onNext: () => void;
  onSkip: () => void;
}

export function ProfileSetup({ onNext, onSkip }: ProfileSetupProps) {
  return (
    <div
      className="relative"
      style={{ width: 393, height: 852, background: "#1f2122", overflow: "hidden" }}
    >
      {/* Home Indicator */}
      <HomeIndicator color="#1f2122" />

      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 2 }}>
        <StatusBar variant="dark" />
      </div>

      {/* Main content */}
      <div
        className="absolute inset-0 rounded-tl-[48px] rounded-tr-[48px] overflow-hidden bg-white"
        style={{ zIndex: 1 }}
      >
        {/* Library image */}
        <div
          className="absolute left-0 top-0 overflow-hidden"
          style={{ width: 393, height: 557, zIndex: 1 }}
        >
          <img
            src={imgLibrary}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Background cards */}
        <div
          className="absolute left-0 rounded-tl-[32px] rounded-tr-[32px]"
          style={{
            width: 393,
            height: 317,
            top: 525,
            background: "rgba(255,255,255,0.45)",
            zIndex: 2,
          }}
        />
        <div
          className="absolute left-0 rounded-tl-[32px] rounded-tr-[32px]"
          style={{
            width: 393,
            height: 317,
            top: 530,
            background: "rgba(255,255,255,0.45)",
            zIndex: 2,
          }}
        />

        {/* White content card */}
        <div
          className="absolute left-0 bg-white rounded-tl-[32px] rounded-tr-[32px]"
          style={{
            width: 393,
            height: 317,
            bottom: 0,
            zIndex: 4,
          }}
        >
          <div className="flex flex-col justify-between h-full px-[24px] py-[48px]">
            {/* Text content */}
            <div className="flex flex-col gap-[8px]">
              <div
                style={{
                  fontFamily: "Karla, Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "18px",
                  color: "#66696d",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}
              >
                LET'S
              </div>
              <div
                style={{
                  fontFamily: "Montserrat, Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "28px",
                  color: "#222",
                }}
              >
                Set up your reading profile
              </div>
              <div
                style={{
                  fontFamily: "Karla, Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "20px",
                  color: "#414346",
                  marginTop: 4,
                }}
              >
                Help us understand what you love, so we can recommend books you
                won't want to put down.
              </div>
            </div>

            {/* Bottom actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={onSkip}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#414346",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                SKIP
              </button>

              <button
                onClick={onNext}
                className="rounded-[100px] flex items-center justify-center px-[16px]"
                style={{
                  height: 48,
                  background: "#1f2122",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "white",
                  minWidth: 120,
                }}
              >
                I'm ready
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
