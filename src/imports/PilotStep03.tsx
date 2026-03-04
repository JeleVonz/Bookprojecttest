import svgPaths from "./svg-oi4d790du6";

function Cta() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-white bottom-0 content-stretch flex gap-[8px] items-start justify-center left-0 pb-[40px] pt-[24px] px-[20px] w-[393px]" data-name="CTA">
      <div aria-hidden="true" className="absolute border-[rgba(213,213,213,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-[rgba(0,0,0,0)] h-[48px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Button Gray Subtle L">
        <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Back</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[#1f2122] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Button Gray L">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Save genres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[393px]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-[calc(50%+0.5px)] w-[144px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#1f2122] h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#1f2122] text-[17px] w-[71px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, #1F2122)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, #1F2122)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, #1F2122)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, #1F2122)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, #1F2122)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute bg-[#f5f7f8] content-stretch flex flex-col h-[54px] items-start left-0 pt-[21px] top-0 w-[393px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function HeroSubtittle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[24px] w-full">
        <p className="leading-[30px]">Which of these do you enjoy?</p>
      </div>
    </div>
  );
}

function HeroSubtittle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[18px] w-full">
        <p className="leading-[24px]">Tap your favourite subgenres.</p>
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Question container">
      <HeroSubtittle />
      <HeroSubtittle1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">Fiction</p>
      </div>
      <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Row Divider">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 1">
                  <line id="Line 1" stroke="var(--stroke-0, #D5D5D5)" x2="148" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] h-[24px] relative rounded-[8px] shrink-0" data-name="Button Gohst-text XS">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[8px] relative rounded-[inherit]">
          <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Select all fiction</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(102,105,109,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Romance</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Thriller</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Mystery</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Fantasy</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Sci-Fi</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Historical Fiction</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">{`Literary `}</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Young Adult</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Horror</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start pr-[2px] relative">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] text-left whitespace-nowrap">
          <p className="leading-[20px]">Short Stories</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start cursor-pointer flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container2 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container3 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container4 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container5 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container6 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container7 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container8 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container9 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container10 />
      </button>
      <button className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] h-[38px] items-center px-[13px] py-[9px] relative rounded-[20px] shrink-0" data-name="Chip">
        <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Container11 />
      </button>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Q() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-[353px]" data-name="Q2">
      <Container />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative shrink-0 w-[393px]" data-name="content">
      <QuestionContainer />
      <Q />
    </div>
  );
}

function ContentMain() {
  return (
    <div className="absolute content-stretch flex flex-col h-[798px] items-center left-0 pt-[68px] top-[54px]" data-name="Content main">
      <Content />
    </div>
  );
}

function StepName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step name">
      <div className="flex flex-col font-['inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Your genre preferences</p>
      </div>
    </div>
  );
}

function StepCount() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="step count">
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function StepLabel() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="step label">
      <StepName />
      <StepCount />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(173,240,199,0.3)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#adf0c7] inset-[0_47.65%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Progress() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] top-[54px] w-[393px]" data-name="Progress">
      <div aria-hidden="true" className="absolute border-[rgba(213,213,213,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <StepLabel />
      <Background />
    </div>
  );
}

export default function PilotStep() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Pilot_step_03">
      <Cta />
      <HomeIndicator />
      <StatusBarIPhone />
      <ContentMain />
      <Progress />
    </div>
  );
}