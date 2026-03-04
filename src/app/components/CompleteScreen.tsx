import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";

interface CompleteScreenProps {
  onRestart: () => void;
}

export function CompleteScreen({ onRestart }: CompleteScreenProps) {
  return (
    <div
      className="relative bg-[#f6f7f8] overflow-hidden flex flex-col"
      style={{ width: 393, height: 852 }}
    >
      <HomeIndicator color="#1f2122" />
      <StatusBar variant="light" />

      <div className="flex flex-col items-center justify-center flex-1 px-[24px] text-center">
        {/* Animated check circle */}
        <div
          className="rounded-full flex items-center justify-center mb-[24px]"
          style={{ width: 80, height: 80, background: "#adf0c7" }}
        >
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
            <path
              d="M3 14L13.5 24.5L33 3.5"
              stroke="#2d5a41"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            fontFamily: "Montserrat, Inter, sans-serif",
            fontWeight: 700,
            fontSize: 28,
            lineHeight: "34px",
            color: "#1f2122",
            marginBottom: 12,
          }}
        >
          You're all set!
        </div>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "#66696d",
            marginBottom: 40,
            maxWidth: 280,
          }}
        >
          Your reading profile is ready. We'll use it to find books made for
          you.
        </div>

        <button
          onClick={onRestart}
          className="rounded-[100px] flex items-center justify-center px-[32px]"
          style={{
            height: 56,
            background: "#1f2122",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: "white",
            width: "100%",
            maxWidth: 345,
          }}
        >
          Start discovering books
        </button>

        <button
          onClick={onRestart}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#66696d",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginTop: 16,
          }}
        >
          Restart onboarding
        </button>
      </div>
    </div>
  );
}
