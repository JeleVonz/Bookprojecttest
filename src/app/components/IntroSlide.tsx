import svgPaths from "../../imports/svg-ihbn5w9fzu";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";

interface IntroSlideProps {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  activeDot: number; // 0, 1, 2
  showBack: boolean;
  statusVariant: "light" | "dark";
  imageHeight?: number; // height of the image section
  onNext: () => void;
  onBack?: () => void;
  onSkip: () => void;
  isLastIntro?: boolean;
}

const DARK_DOT = "#1F2122";
const INACTIVE_DOT = "#AAADB1";

export function IntroSlide({
  image,
  eyebrow,
  title,
  body,
  activeDot,
  showBack,
  statusVariant,
  imageHeight = 683,
  onNext,
  onBack,
  onSkip,
  isLastIntro = false,
}: IntroSlideProps) {
  return (
    <div
      className="relative"
      style={{ width: 393, height: 852, background: "#1f2122", overflow: "hidden" }}
    >
      {/* Home Indicator */}
      <HomeIndicator color="black" />

      {/* Status Bar (absolute overlay on image) */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 2 }}>
        <StatusBar variant={statusVariant} />
      </div>

      {/* Main content container */}
      <div
        className="absolute inset-0 rounded-tl-[48px] rounded-tr-[48px] overflow-hidden bg-white"
        style={{ zIndex: 1 }}
      >
        {/* Image background */}
        <div
          className="absolute left-0 top-0 overflow-hidden"
          style={{ width: 393, height: imageHeight, zIndex: 1 }}
        >
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* SKIP button */}
        <button
          onClick={onSkip}
          className="absolute right-[24px]"
          style={{
            top: 491,
            zIndex: 3,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: statusVariant === "dark" ? "white" : "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          SKIP
        </button>

        {/* Background cards (layered effect) */}
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
              {/* Eyebrow */}
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
                {eyebrow}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "Montserrat, Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "28px",
                  color: "#222",
                }}
              >
                {title}
              </div>

              {/* Body */}
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
                {body}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              {/* Back or empty */}
              <div style={{ minWidth: 48 }}>
                {showBack && (
                  <button
                    onClick={onBack}
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
                    BACK
                  </button>
                )}
              </div>

              {/* Dots */}
              <div className="flex items-center gap-[9px]">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: activeDot === i ? DARK_DOT : INACTIVE_DOT,
                    }}
                  />
                ))}
              </div>

              {/* Next arrow */}
              <button
                onClick={onNext}
                className="rounded-full flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  background: "#1f2122",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path d={svgPaths.p3b97c500} fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
