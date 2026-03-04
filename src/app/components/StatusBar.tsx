import svgPaths from "../../imports/svg-ihbn5w9fzu";

interface StatusBarProps {
  variant?: "light" | "dark"; // light = dark icons, dark = white icons
}

export function StatusBar({ variant = "light" }: StatusBarProps) {
  const color = variant === "dark" ? "white" : "#1f2122";

  return (
    <div
      className="flex flex-col h-[54px] items-start pt-[21px] w-[393px] shrink-0"
      style={{ position: "relative", zIndex: 2 }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Time */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-row items-center justify-center">
            <div className="flex items-center justify-center pl-[16px] pr-[6px] w-full">
              <p
                className="shrink-0 w-[71px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: "22px",
                  color,
                }}
              >
                9:41
              </p>
            </div>
          </div>
        </div>
        {/* Dynamic Island spacer */}
        <div className="h-[10px] shrink-0 w-[124px]" />
        {/* Levels */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-row items-center justify-center">
            <div className="flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] w-full">
              {/* Cellular */}
              <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19.2 12.2264"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1e09e400}
                    fill={color}
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              {/* Wifi */}
              <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 17.1417 12.3283"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p18b35300}
                    fill={color}
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              {/* Battery */}
              <div className="h-[13px] relative shrink-0 w-[27.328px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 27.328 13"
                >
                  <g>
                    <rect
                      height="12"
                      opacity="0.35"
                      rx="3.8"
                      stroke={color}
                      width="24"
                      x="0.5"
                      y="0.5"
                    />
                    <path
                      d={svgPaths.p3bbd9700}
                      fill={color}
                      opacity="0.4"
                    />
                    <rect
                      fill={color}
                      height="9"
                      rx="2.5"
                      width="21"
                      x="2"
                      y="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
