import { ReactNode } from "react";
import { StatusBar } from "../StatusBar";
import { HomeIndicator } from "../HomeIndicator";

interface QuestionLayoutProps {
  stepName: string;
  percent: number;
  question: string;
  subtitle: string;
  children: ReactNode;
  backLabel?: string;
  saveLabel: string;
  saveEnabled: boolean;
  onBack: () => void;
  onSave: () => void;
}

export function QuestionLayout({
  stepName,
  percent,
  question,
  subtitle,
  children,
  backLabel = "Back",
  saveLabel,
  saveEnabled,
  onBack,
  onSave,
}: QuestionLayoutProps) {
  return (
    <div
      className="relative bg-[#f6f7f8] overflow-hidden"
      style={{ width: 393, height: 852 }}
    >
      <HomeIndicator color="#1f2122" />

      {/* Status Bar */}
      <StatusBar variant="light" />

      {/* Progress */}
      <div
        className="relative w-full"
        style={{ borderBottom: "1px solid rgba(213,213,213,0.3)" }}
      >
        <div className="flex flex-col gap-[8px] items-start p-[16px] w-full">
          <div className="flex items-end justify-between w-full">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                color: "#1f2122",
              }}
            >
              {stepName}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                color: "#2d5a41",
              }}
            >
              {percent}%
            </span>
          </div>
          {/* Progress bar */}
          <div
            className="rounded-[9999px] overflow-hidden w-full"
            style={{ height: 8, background: "rgba(173,240,199,0.3)" }}
          >
            <div
              className="h-full rounded-[9999px]"
              style={{
                width: `${percent}%`,
                background: "#adf0c7",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="overflow-y-auto"
        style={{ height: 852 - 54 - 68 - 112, paddingBottom: 8 }}
      >
        {/* Question */}
        <div className="flex flex-col gap-[8px] items-start p-[16px] w-full">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "30px",
              color: "#1f2122",
            }}
          >
            {question}
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "24px",
              color: "#66696d",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Content */}
        <div className="px-[16px] w-full">{children}</div>
      </div>

      {/* CTA Bar */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          backdropFilter: "blur(6px)",
          background: "white",
          borderTop: "1px solid rgba(213,213,213,0.3)",
          paddingBottom: 40,
          paddingTop: 24,
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            height: 48,
            width: 91,
            borderRadius: 8,
            border: "1px solid #d5d5d5",
            background: "transparent",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: "#1f2122",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {backLabel}
        </button>

        {/* Save button */}
        <button
          onClick={saveEnabled ? onSave : undefined}
          style={{
            flex: 1,
            height: 48,
            borderRadius: 8,
            border: "none",
            background: saveEnabled ? "#1f2122" : "rgba(12,12,13,0.05)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: saveEnabled ? "white" : "#66696d",
            cursor: saveEnabled ? "pointer" : "default",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          {saveLabel}
        </button>
      </div>
    </div>
  );
}
