import svgPaths from "./svg-1j6cakt1ua";

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[393px] z-[3]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-[calc(50%+0.5px)] w-[144px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
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
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[393px] z-[2]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function StepName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step name">
      <div className="flex flex-col font-['inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Preferred genres</p>
      </div>
    </div>
  );
}

function StepCount() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="step count">
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">30%</p>
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
      <div className="absolute bg-[#adf0c7] inset-[0_63.99%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Progress() {
  return (
    <div className="relative shrink-0 w-full" data-name="Progress">
      <div aria-hidden="true" className="absolute border-[rgba(213,213,213,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <StepLabel />
        <Background />
      </div>
    </div>
  );
}

function HeroSubtittle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[24px] w-full">
        <p className="leading-[30px]">What genres are you interested in?</p>
      </div>
    </div>
  );
}

function HeroSubtittle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[18px] w-full">
        <p className="leading-[24px]">This narrows down the library for you.</p>
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

function LeadingIcon() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Leading icon">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="State=Fiction">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p28e84200} fill="var(--fill-0, #1F2122)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Label">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Fiction</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <LeadingIcon />
        <Label />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="opacity-0 relative shrink-0" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit]">
        <div className="-translate-y-1/2 absolute left-[4px] overflow-clip size-[24px] top-1/2" data-name="Done">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p2d2aa380} fill="var(--fill-0, #2D5A41)" fillOpacity="0.1" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Leading icon">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="State=Non fiction">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3f7817c0} fill="var(--fill-0, #1F2122)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Label">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Non-fiction</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <LeadingIcon1 />
        <Label1 />
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="opacity-0 relative shrink-0" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit]">
        <div className="-translate-y-1/2 absolute left-[4px] overflow-clip size-[24px] top-1/2" data-name="Done">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p2d2aa380} fill="var(--fill-0, #2D5A41)" fillOpacity="0.1" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Leading icon">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="State=Mix">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p257b4e00} fill="var(--fill-0, #1F2122)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Label">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">A mix of both</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <LeadingIcon2 />
        <Label2 />
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="opacity-0 relative shrink-0" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit]">
        <div className="-translate-y-1/2 absolute left-[4px] overflow-clip size-[24px] top-1/2" data-name="Done">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p2d2aa380} fill="var(--fill-0, #2D5A41)" fillOpacity="0.1" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-white content-stretch flex h-[76px] items-center justify-between px-[18px] py-[14px] relative rounded-[12px] shrink-0 w-[361px]" data-name="Row questionnare">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <Content1 />
        <Checkbox />
      </div>
      <div className="bg-white content-stretch flex h-[76px] items-center justify-between px-[18px] py-[14px] relative rounded-[12px] shrink-0 w-[361px]" data-name="Row questionnare">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <Content2 />
        <Checkbox1 />
      </div>
      <div className="bg-white content-stretch flex h-[76px] items-center justify-between px-[18px] py-[14px] relative rounded-[12px] shrink-0 w-[361px]" data-name="Row questionnare">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <Content3 />
        <Checkbox2 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center p-[16px] relative shrink-0 w-[393px]" data-name="content">
      <QuestionContainer />
      <Container />
    </div>
  );
}

function CtaDisabled() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-white bottom-0 content-stretch flex gap-[8px] items-start justify-center left-0 pb-[40px] pt-[24px] px-[20px] w-[393px]" data-name="CTA disabled">
      <div aria-hidden="true" className="absolute border-[rgba(213,213,213,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-[rgba(0,0,0,0)] h-[48px] relative rounded-[8px] shrink-0 w-[91px]" data-name="Button Gray Subtle L">
        <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Back</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[rgba(12,12,13,0.05)] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[8px]" data-name="Button Gray L">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] relative size-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[24px]">Continue to selection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentMain() {
  return (
    <div className="content-stretch flex flex-col h-[798px] items-center relative shrink-0 z-[1]" data-name="Content main">
      <Progress />
      <Content />
      <CtaDisabled />
    </div>
  );
}

export default function PilotStep() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="Pilot_step_02/00">
      <HomeIndicator />
      <StatusBarIPhone />
      <ContentMain />
    </div>
  );
}