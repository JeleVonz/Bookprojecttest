import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import svgPaths from "../../imports/svg-2mmj96p7zb";
import {
  ReaderAnswers,
  computeReaderType,
  getMotivationLabel,
  getGenreLabel,
  getPriorityLabel,
  getPaceLabel,
  getToneLabel,
  getLanguageLabel,
} from "../types";

interface ProfileSummaryProps {
  answers: ReaderAnswers;
  onBack: () => void;
  onSave: () => void;
  onEdit: (step: number) => void;
}

// ── Small chip component ─────────────────────────────────────────────────────

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
}

function SummaryChip({ label, icon }: ChipProps) {
  return (
    <div
      className="flex items-center gap-[2px] px-[13px] py-[5px] rounded-[20px] shrink-0"
      style={{
        background: "rgba(255,255,255,0.8)",
        border: "1px solid rgba(213,213,213,0.3)",
      }}
    >
      {icon && (
        <div className="relative shrink-0 mr-[4px]" style={{ width: 16, height: 16 }}>
          {icon}
        </div>
      )}
      <span
        style={{
          fontFamily: "Karla, Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "20px",
          color: "#1f2122",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Edit button ──────────────────────────────────────────────────────────────

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center shrink-0"
      style={{ width: 24, height: 24, background: "none", border: "none", cursor: "pointer" }}
    >
      <div className="relative" style={{ width: 18, height: 18 }}>
        <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 18 18">
          <path d={svgPaths.p105f9a00} fill="#66696D" />
        </svg>
      </div>
    </button>
  );
}

// ── Preference row ────────────────────────────────────────────────────────────

interface PreferenceRowProps {
  label: string;
  chips: Array<{ label: string; icon?: React.ReactNode }>;
  onEdit: () => void;
}

function PreferenceRow({ label, chips, onEdit }: PreferenceRowProps) {
  return (
    <div className="flex flex-col gap-[4px] py-[2px] w-full">
      {/* Row header */}
      <div className="flex items-center gap-[8px] w-full">
        <span
          className="flex-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "#66696d",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <EditButton onClick={onEdit} />
      </div>
      {/* Chips */}
      <div className="flex flex-wrap gap-[8px]">
        {chips.map((chip, i) => (
          <SummaryChip key={i} label={chip.label} icon={chip.icon} />
        ))}
      </div>
    </div>
  );
}

// ── Icon helpers ─────────────────────────────────────────────────────────────

function MotivationIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 11.9999 12">
      <path d={svgPaths.p1ca0d880} fill="#1F2122" />
    </svg>
  );
}

function GenreIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p2ed7ed40} fill="#1F2122" />
    </svg>
  );
}

function PriorityIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 12.0003 12.0003">
      <path d={svgPaths.p29e5e700} fill="#1F2122" />
    </svg>
  );
}

function PaceIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 13.3333 12">
      <path d={svgPaths.p28565780} fill="#1F2122" />
    </svg>
  );
}

function ToneIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p84ff100} fill="#1F2122" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p1e486b00} fill="#1F2122" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p71fca00} fill="#1F2122" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function ProfileSummary({ answers, onBack, onSave, onEdit }: ProfileSummaryProps) {
  const [keepLearning, setKeepLearning] = useState(true);

  const readerType = computeReaderType(answers);

  // Build genre chips (genre + subgenres)
  const genreLabel = getGenreLabel(answers.genre);
  const genreChips = [
    { label: genreLabel, icon: <GenreIcon /> },
    ...answers.subgenres.slice(0, 3).map((sg) => ({ label: sg })),
  ];

  // Writing style chips
  const writingChips = [
    { label: getPaceLabel(answers.style.pace), icon: <PaceIcon /> },
    { label: getToneLabel(answers.style.tone), icon: <ToneIcon /> },
    { label: getLanguageLabel(answers.style.language), icon: <LanguageIcon /> },
  ];

  // Books chips
  const bookChips = answers.books.slice(0, 3).map((title) => ({
    label: title,
    icon: <BookIcon />,
  }));

  return (
    <div
      className="relative bg-[#f6f7f8] overflow-hidden"
      style={{ width: 393, height: 852 }}
    >
      <HomeIndicator color="#1f2122" />
      <StatusBar variant="light" />

      {/* Scrollable content */}
      <div
        className="overflow-y-auto"
        style={{ height: 852 - 54 - 112, paddingBottom: 8 }}
      >
        {/* Title section */}
        <div className="flex flex-col gap-[8px] items-start px-[24px] pt-[24px] pb-[16px] w-full">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "30px",
              color: "#1f2122",
            }}
          >
            Your reader profile is set!
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "#414346",
            }}
          >
            Foundation for your recommendations
          </div>
        </div>

        {/* Reader type card */}
        <div className="px-[20px] pb-[16px] w-full">
          <div
            className="relative rounded-[20px] w-full overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(173,240,199,0.25) 0%, rgba(255,255,255,1) 100%)",
              border: "2px solid rgba(192,245,213,0.8)",
              boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex gap-[12px] items-start p-[16px] w-full">
              {/* Icon */}
              <div className="relative shrink-0 self-stretch flex items-start py-[2px]">
                <div className="relative overflow-hidden" style={{ width: 48, height: 48 }}>
                  <div
                    className="absolute"
                    style={{ inset: "15% 11.67% 15.38% 12.5%" }}
                  >
                    <svg
                      className="absolute block w-full h-full"
                      fill="none"
                      viewBox="0 0 36.4 33.4167"
                    >
                      <defs>
                        <linearGradient
                          id="empath-gradient"
                          gradientUnits="userSpaceOnUse"
                          x1="39"
                          x2="18.2"
                          y1="6.2998"
                          y2="33.4167"
                        >
                          <stop offset="0.341346" stopColor="#CEF8E0" stopOpacity="0.2" />
                          <stop offset="1" stopColor="#2D5A41" />
                        </linearGradient>
                      </defs>
                      <path
                        d={svgPaths.p3c4e2900}
                        fill="url(#empath-gradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: "26px",
                    color: "#2d5a41",
                  }}
                >
                  {readerType.name}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#66696d",
                  }}
                >
                  {readerType.tagline}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#414346",
                  }}
                >
                  {readerType.description}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences list */}
        <div
          className="mx-[20px] rounded-[16px] px-[16px] py-[12px] flex flex-col gap-[12px]"
          style={{ background: "white" }}
        >
          {/* Reading Motivation */}
          <PreferenceRow
            label="Reading Motivation"
            chips={[
              {
                label: getMotivationLabel(answers.motivation),
                icon: <MotivationIcon />,
              },
            ]}
            onEdit={() => onEdit(4)}
          />

          <div style={{ height: 1, background: "rgba(213,213,213,0.4)" }} />

          {/* Favourite Genres */}
          <PreferenceRow
            label="Favourite Genres"
            chips={genreChips}
            onEdit={() => onEdit(5)}
          />

          <div style={{ height: 1, background: "rgba(213,213,213,0.4)" }} />

          {/* Story Priority */}
          <PreferenceRow
            label="Story Priority"
            chips={[
              {
                label: getPriorityLabel(answers.priority),
                icon: <PriorityIcon />,
              },
            ]}
            onEdit={() => onEdit(7)}
          />

          <div style={{ height: 1, background: "rgba(213,213,213,0.4)" }} />

          {/* Writing Style */}
          <PreferenceRow
            label="Writing Style"
            chips={writingChips}
            onEdit={() => onEdit(8)}
          />

          {bookChips.length > 0 && (
            <>
              <div style={{ height: 1, background: "rgba(213,213,213,0.4)" }} />
              {/* Books You Love */}
              <PreferenceRow
                label="Books You Love"
                chips={bookChips}
                onEdit={() => onEdit(9)}
              />
            </>
          )}
        </div>

        {/* Keep learning my taste toggle */}
        <div
          className="mx-[20px] mt-[12px] rounded-[16px] px-[16px] py-[16px] flex items-center gap-[12px]"
          style={{ background: "white" }}
        >
          <div className="flex flex-col gap-[2px] flex-1 min-w-0">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                lineHeight: "22px",
                color: "#1f2122",
              }}
            >
              Keep learning my taste
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "18px",
                color: "#66696d",
              }}
            >
              Use my activity to refine my recommendations.
            </span>
          </div>

          {/* Toggle switch */}
          <button
            onClick={() => setKeepLearning((v) => !v)}
            className="relative shrink-0 rounded-[100px] transition-all duration-200"
            style={{
              width: 51,
              height: 31,
              background: keepLearning ? "#adf0c7" : "#e1e3e6",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              className="absolute rounded-full bg-white shadow-md transition-all duration-200"
              style={{
                width: 27,
                height: 27,
                top: 2,
                left: keepLearning ? 22 : 2,
                boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
              }}
            />
          </button>
        </div>

        {/* Bottom spacer */}
        <div style={{ height: 16 }} />
      </div>

      {/* CTA bar */}
      <div
        className="absolute bottom-0 left-0 w-full flex gap-[8px]"
        style={{
          backdropFilter: "blur(6px)",
          background: "white",
          borderTop: "1px solid rgba(213,213,213,0.3)",
          paddingBottom: 40,
          paddingTop: 24,
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 10,
        }}
      >
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
          Back
        </button>
        <button
          onClick={onSave}
          style={{
            flex: 1,
            height: 48,
            borderRadius: 8,
            border: "none",
            background: "#1f2122",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save profile
        </button>
      </div>
    </div>
  );
}
