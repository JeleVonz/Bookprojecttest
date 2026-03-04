import svgPaths from "./svg-2mmj96p7zb";

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
              <p className="leading-[24px]">Save profile</p>
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
        <p className="leading-[30px]">Your reader profile is set!</p>
      </div>
    </div>
  );
}

function HeroSubtittle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[16px] w-full">
        <p className="leading-[24px]">Foundation for your recommendations</p>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start py-[4px] relative shrink-0 w-full" data-name="Title container">
      <HeroSubtittle />
      <HeroSubtittle1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Icon">
      <div className="content-stretch flex h-full items-start py-[2px] relative">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon animation">
          <div className="absolute inset-[15%_11.67%_15.38%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.4 33.4167">
              <path d={svgPaths.p3c4e2900} fill="url(#paint0_linear_2_823)" id="Vector" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_823" x1="39" x2="18.2" y1="6.2998" y2="33.4167">
                  <stop offset="0.341346" stopColor="#CEF8E0" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#2D5A41" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSubtittle2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[18px] w-full">
        <p className="leading-[26px]">The Empath</p>
      </div>
    </div>
  );
}

function HeroSubtittle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] w-full">
        <p className="leading-[20px]">You read with your heart</p>
      </div>
    </div>
  );
}

function BodyText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body text">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] w-full">
        <p className="leading-[20px]">You’re drawn to soulful characters and emotional connection.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <HeroSubtittle2 />
      <HeroSubtittle3 />
      <BodyText />
    </div>
  );
}

function ProfileTypeCard() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Profile type card" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 345 122\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.20000000298023224\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.048869 9.1123 -25.769 0.082052 172.5 61)\\'><stop stop-color=\\'rgba(173,240,199,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(173,240,199,1)\\' offset=\\'0.94656\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(192,245,213,0.8)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card container">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <ProfileTypeCard />
      </div>
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Top section">
      <TitleContainer />
      <CardContainer />
    </div>
  );
}

function TitleLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Reading motivation</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p105f9a00} fill="var(--fill-0, #66696D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <TitleLabel />
        <Container1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">To relax</p>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Motivation/Relax">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="-translate-x-1/2 absolute aspect-[23.999786376953125/24] bottom-[12.5%] left-1/2 top-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9999 12">
              <path d={svgPaths.p1ca0d880} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Chip />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function PreferenceContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[2px] relative shrink-0 w-full" data-name="Preference container">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Favourite Genres</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p105f9a00} fill="var(--fill-0, #66696D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Heading />
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Fiction</p>
        </div>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Genre">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p2ed7ed40} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Historical fiction</p>
        </div>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Chip1 />
      <Chip2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function PreferenceContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[2px] relative shrink-0 w-full" data-name="Preference container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Story PRIORITY</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p105f9a00} fill="var(--fill-0, #66696D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Heading1 />
        <Container12 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Character driven</p>
        </div>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Priorities">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0003 12.0003">
              <path d={svgPaths.p29e5e700} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Chip3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function PreferenceContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[2px] relative shrink-0 w-full" data-name="Preference container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Writing style</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p105f9a00} fill="var(--fill-0, #66696D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Heading2 />
        <Container17 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Medium pace</p>
        </div>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Pace">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12">
              <path d={svgPaths.p28565780} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Hopeful tone</p>
        </div>
      </div>
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Emoji">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p84ff100} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Rich language</p>
        </div>
      </div>
    </div>
  );
}

function Chip6() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Language">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p1e486b00} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Chip4 />
      <Chip5 />
      <Chip6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function PreferenceContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[2px] relative shrink-0 w-full" data-name="Preference container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">BOOKS YOU LOVE</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p105f9a00} fill="var(--fill-0, #66696D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Heading3 />
        <Container24 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Karla:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">To Kill a Mockingbird</p>
        </div>
      </div>
    </div>
  );
}

function Chip7() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[2px] items-center justify-center px-[13px] py-[5px] relative rounded-[20px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[rgba(213,213,213,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[16px]" data-name="favourites">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p71fca00} fill="var(--fill-0, #1F2122)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container27 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Chip7 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container26 />
      </div>
    </div>
  );
}

function PreferenceContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[2px] relative shrink-0 w-full" data-name="Preference container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function SummaryContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Summary container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[4px] relative w-full">
        <PreferenceContainer />
        <PreferenceContainer1 />
        <PreferenceContainer2 />
        <PreferenceContainer3 />
        <PreferenceContainer4 />
      </div>
    </div>
  );
}

function TitlePreferences() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title + preferences">
      <SummaryContainer />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b140d] text-[14px] w-full">
        <p className="leading-[20px]">Keep learning my taste</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[12px] w-full">
        <p className="leading-[16px]">Use my activity to refine my recommendations.</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <Container28 />
      <Container29 />
    </div>
  );
}

function ToggleElement() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[12px] shrink-0 w-[357px]" data-name="Toggle element">
      <Text1 />
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[32px]" data-name="Switch">
        <div className="absolute bg-[#adf0c7] inset-[18.75%_0] rounded-[100px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute h-[16px] left-[43.75%] right-[6.25%] top-1/2" data-name="Ellipse">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse" r="8" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function ToggleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Toggle container">
      <ToggleElement />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[686px] items-center left-0 pb-[40px] pt-[16px] px-[16px] top-[54px] w-[393px]" data-name="Main container">
      <TopSection />
      <TitlePreferences />
      <ToggleContainer />
    </div>
  );
}

export default function Summary() {
  return (
    <div className="bg-white relative size-full" data-name="Summary">
      <Cta />
      <HomeIndicator />
      <StatusBarIPhone />
      <MainContainer />
    </div>
  );
}