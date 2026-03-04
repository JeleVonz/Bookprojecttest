import svgPaths from "./svg-jufph9mgzw";
import imgMedai from "figma:asset/3d19a912f3cce09667062e64dc06e60b742cfb1c.png";

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
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-0 pt-[21px] top-0 w-[393px] z-[2]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Bg() {
  return <div className="absolute bg-[rgba(255,255,255,0.45)] h-[317px] left-[-24px] rounded-tl-[32px] rounded-tr-[32px] top-[-53px] w-[393px]" data-name="bg 5" />;
}

function Bg1() {
  return <div className="absolute bg-[rgba(255,255,255,0.45)] h-[317px] left-[-24px] rounded-tl-[32px] rounded-tr-[32px] top-[-58px] w-[393px]" data-name="bg 6" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Karla:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#66696d] text-[14px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">EVERY BOOK</p>
      </div>
    </div>
  );
}

function HeroSubtittle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[24px] w-full">
        <p className="leading-[28px]">Has its reader</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Bg />
      <Bg1 />
      <Container />
      <HeroSubtittle />
    </div>
  );
}

function BodyText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Body text">
      <div className="flex flex-col font-['Karla:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414346] text-[16px] w-full">
        <p className="leading-[20px]">
          There are thousands of books to choose from.
          <br aria-hidden="true" />
          We help narrow things down to the ones that feel right for you.
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1 />
      <BodyText />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#414346] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">BACK</p>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[6px] relative shrink-0 w-[30px]" data-name="Dots">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 6">
        <g id="Dots">
          <circle cx="3" cy="3" fill="var(--fill-0, #AAADB1)" id="Ellipse" r="3" />
          <circle cx="15" cy="3" fill="var(--fill-0, #AAADB1)" id="Ellipse_2" r="3" />
          <circle cx="27" cy="3" fill="var(--fill-0, #1F2122)" id="Ellipse_3" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[8px] relative shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
      <Dots />
      <div className="bg-[#1f2122] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]" data-name="Button Icon Brand L">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Direction=Right">
          <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p3b97c500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[317px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col items-start justify-between px-[24px] py-[48px] relative size-full">
        <Content1 />
        <Pagination />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] right-[24px] top-[491px] w-[32px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[14px] text-center text-white top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">SKIP</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px overflow-clip relative w-[393px] z-[2]" data-name="Hero">
      <Content />
      <Button1 />
    </div>
  );
}

function Medai() {
  return (
    <div className="absolute h-[683px] left-0 overflow-clip top-0 w-[393px] z-[1]" data-name="medai">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedai} />
    </div>
  );
}

function ContentMain() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[852px] isolate items-center justify-center relative rounded-tl-[48px] rounded-tr-[48px] shrink-0 w-full z-[1]" data-name="Content main">
      <Hero />
      <Medai />
    </div>
  );
}

export default function PilotOnboarding() {
  return (
    <div className="bg-[#1f2122] content-stretch flex flex-col isolate items-start relative size-full" data-name="Pilot onboarding_03">
      <HomeIndicator />
      <StatusBarIPhone />
      <ContentMain />
    </div>
  );
}