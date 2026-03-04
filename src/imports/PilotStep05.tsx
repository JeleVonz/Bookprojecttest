import svgPaths from "./svg-5rmk2tukx2";

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[393px] z-[3]" data-name="Home Indicator">
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
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[393px] z-[2]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function StepName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step name">
      <div className="flex flex-col font-['inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Writting style</p>
      </div>
    </div>
  );
}

function StepLabel() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="step label">
      <StepName />
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(173,240,199,0.3)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#adf0c7] inset-[0_25.76%_0_0] rounded-[9999px]" data-name="Background" />
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
        <p className="leading-[30px]">How do you like the writing?</p>
      </div>
    </div>
  );
}

function HeroSubtittle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[18px] w-full">
        <p className="leading-[26px]">Adjust these sliders to set your preferred writting style.</p>
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

function Icon() {
  return (
    <div className="h-full relative shrink-0" data-name="Icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center py-[4px] relative">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Pace">
            <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                <path d={svgPaths.p3f84b580} fill="var(--fill-0, #1F2122)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-[197px]" data-name="Title and Detail">
      <div className="flex flex-col font-['inter:Regular',sans-serif] h-[22px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1f2122] text-[16px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Pace</p>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title and Trailing Accessories">
      <TitleAndDetail />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px relative" data-name="left_side">
      <Icon />
      <TitleAndTrailingAccessories />
    </div>
  );
}

function Detail() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Detail">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Medium</p>
      </div>
    </div>
  );
}

function ContentsTrailing() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end py-[8px] relative shrink-0" data-name="Contents - Trailing">
      <Detail />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="right_side">
      <ContentsTrailing />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <LeftSide />
      </div>
      <RightSide />
    </div>
  );
}

function Handle() {
  return <div className="-translate-y-1/2 absolute bg-[#adf0c7] border-2 border-solid border-white right-[174px] rounded-[16px] size-[24px] top-1/2" data-name="Handle" />;
}

function Background1() {
  return (
    <div className="absolute h-[8px] left-0 right-0 rounded-[100px] top-[8px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(173, 240, 199, 0) 30%, rgb(173, 240, 199) 40%, rgb(173, 240, 199) 60%, rgba(173, 240, 199, 0) 70%), linear-gradient(90deg, rgb(225, 227, 230) 0%, rgb(225, 227, 230) 100%)" }}>
      <Handle />
    </div>
  );
}

function Bar() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Bar">
      <Background1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['inter:Regular',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#414346] text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Slow</p>
      <p className="relative shrink-0">Fast</p>
    </div>
  );
}

function DiscoverSlider() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Discover slider">
      <div className="content-stretch flex items-center min-h-[68px] relative shrink-0 w-full" data-name="Row setting">
        <Contents />
      </div>
      <div className="relative shrink-0 w-full" data-name="Slider S">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[4px] relative w-full">
          <Bar />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-full relative shrink-0" data-name="Icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center py-[4px] relative">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mood slider">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%+0.2px)] top-1/2 w-[20.4px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4 17">
                <path d={svgPaths.p47f9b80} fill="var(--fill-0, #1F2122)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-[197px]" data-name="Title and Detail">
      <div className="flex flex-col font-['inter:Regular',sans-serif] h-[22px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1f2122] text-[16px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Tone</p>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title and Trailing Accessories">
      <TitleAndDetail1 />
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px relative" data-name="left_side">
      <Icon1 />
      <TitleAndTrailingAccessories1 />
    </div>
  );
}

function Detail1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Detail">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Hopeful</p>
      </div>
    </div>
  );
}

function ContentsTrailing1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end py-[8px] relative shrink-0" data-name="Contents - Trailing">
      <Detail1 />
    </div>
  );
}

function RightSide1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="right_side">
      <ContentsTrailing1 />
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <LeftSide1 />
      </div>
      <RightSide1 />
    </div>
  );
}

function Handle1() {
  return <div className="-translate-y-1/2 absolute bg-[#adf0c7] border-2 border-solid border-white right-[248px] rounded-[16px] size-[24px] top-1/2" data-name="Handle" />;
}

function Background2() {
  return (
    <div className="absolute h-[8px] left-0 right-0 rounded-[100px] top-[8px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(173, 240, 199, 0) 7.6923%, rgb(173, 240, 199) 16.823%, rgb(173, 240, 199) 32.316%, rgba(173, 240, 199, 0) 46.682%), linear-gradient(90deg, rgb(225, 227, 230) 0%, rgb(225, 227, 230) 100%)" }}>
      <Handle1 />
    </div>
  );
}

function Bar1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Bar">
      <Background2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['inter:Regular',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#414346] text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Hopeful</p>
      <p className="relative shrink-0">Dark</p>
    </div>
  );
}

function SliderS() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider S">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[4px] relative w-full">
        <Bar1 />
        <Frame2 />
      </div>
    </div>
  );
}

function DiscoverSlider1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Discover slider">
      <div className="content-stretch flex items-center min-h-[68px] relative shrink-0 w-full" data-name="Row setting">
        <Contents1 />
      </div>
      <SliderS />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-full relative shrink-0" data-name="Icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center py-[4px] relative">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Language">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p3511ef80} fill="var(--fill-0, #1F2122)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-[197px]" data-name="Title and Detail">
      <div className="flex flex-col font-['inter:Regular',sans-serif] h-[22px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1f2122] text-[16px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Language</p>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title and Trailing Accessories">
      <TitleAndDetail2 />
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px relative" data-name="left_side">
      <Icon2 />
      <TitleAndTrailingAccessories2 />
    </div>
  );
}

function Detail2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Detail">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Rich</p>
      </div>
    </div>
  );
}

function ContentsTrailing2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end py-[8px] relative shrink-0" data-name="Contents - Trailing">
      <Detail2 />
    </div>
  );
}

function RightSide2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end p-[4px] relative shrink-0" data-name="right_side">
      <ContentsTrailing2 />
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <LeftSide2 />
      </div>
      <RightSide2 />
    </div>
  );
}

function Handle2() {
  return <div className="-translate-y-1/2 absolute bg-[#adf0c7] border-2 border-solid border-white right-[20px] rounded-[16px] size-[24px] top-1/2" data-name="Handle" />;
}

function Background3() {
  return (
    <div className="absolute h-[8px] left-0 right-0 rounded-[100px] top-[8px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(173, 240, 199, 0) 73.558%, rgb(173, 240, 199) 85.096%, rgb(173, 240, 199) 96.635%, rgba(173, 240, 199, 0) 100%), linear-gradient(90deg, rgb(225, 227, 230) 0%, rgb(225, 227, 230) 100%)" }}>
      <Handle2 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Bar">
      <Background3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['inter:Regular',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#414346] text-[12px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Simple</p>
      <p className="relative shrink-0">Rich</p>
    </div>
  );
}

function SliderS1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider S">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[4px] relative w-full">
        <Bar2 />
        <Frame3 />
      </div>
    </div>
  );
}

function DiscoverSlider2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Discover slider">
      <div className="content-stretch flex items-center min-h-[68px] relative shrink-0 w-full" data-name="Row setting">
        <Contents2 />
      </div>
      <SliderS1 />
    </div>
  );
}

function Q() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[436px] items-start py-[8px] relative shrink-0 w-full" data-name="Q2">
      <DiscoverSlider />
      <DiscoverSlider1 />
      <DiscoverSlider2 />
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
              <p className="leading-[24px]">Save style</p>
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
      <Cta />
    </div>
  );
}

export default function PilotStep() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="Pilot_step_05">
      <HomeIndicator />
      <StatusBarIPhone />
      <ContentMain />
    </div>
  );
}