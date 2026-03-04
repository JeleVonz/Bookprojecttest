import svgPaths from "./svg-3y23vj7t0l";
import imgImage from "figma:asset/a3a46e049f716894b0ff09783525ca4f55bc0213.png";
import imgImage1 from "figma:asset/d8846db139c16fb67b84037c0345d6913097251f.png";
import imgImage2 from "figma:asset/ece3a6f74a0a006a76f8b2ccd7d6e0c529ca340e.png";
import imgImage3 from "figma:asset/8ee1281c9df8f21831898bbd3f7a1b4ef76578d0.png";
import imgImage4 from "figma:asset/4162f3c232cb7195c08d6687f71ad86c0c1637e2.png";
import imgImage5 from "figma:asset/7615307f2bffde2392b604d62eda923329dfe4ba.png";
import imgImage6 from "figma:asset/930f75d34fbcd56a3b4613885023c7faee527494.png";
import imgImage7 from "figma:asset/9a0701c1bb275382ccee675a8314b32be5eff0ab.png";
import imgImage8 from "figma:asset/3d9341f136493e834de0c206c9fbe8ac5c7390de.png";

function StepName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step name">
      <div className="flex flex-col font-['inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2122] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Books you love</p>
      </div>
    </div>
  );
}

function StepLabel() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="step label">
      <StepName />
      <div className="flex flex-col font-['inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d5a41] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(173,240,199,0.3)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#adf0c7] inset-[0_13.3%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Progress() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] top-[54px] w-[393px]" data-name="Progress">
      <div aria-hidden="true" className="absolute border-[rgba(213,213,213,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <StepLabel />
      <Background />
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
              <p className="leading-[24px]">Save my favourites</p>
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
        <p className="leading-[30px]">Any all-time favorites?</p>
      </div>
    </div>
  );
}

function HeroSubtittle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Hero subtittle">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66696d] text-[18px] w-full">
        <p className="leading-[26px]">Name one or more books you loved. It helps us find your next one.</p>
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

function Field() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="State=Default">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p2a619100} fill="var(--fill-0, #1F2122)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#909090] text-[14px] tracking-[0.14px]">Search books or authors</p>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Karla:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#414346] text-[18px] tracking-[-0.36px] w-full">
        <p className="leading-[24px]">Popular all time favorite</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[146.96%] left-[0.08%] max-w-none top-[-12.26%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function BookName() {
  return (
    <div className="relative shrink-0 w-full" data-name="Book name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="flex flex-col font-['inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] text-left whitespace-nowrap">
          <p className="leading-[12px]">To Kill a Mockingbird</p>
        </div>
      </div>
    </div>
  );
}

function AuthorYear() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author + year">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['inter:Regular',sans-serif] items-center leading-[0] not-italic relative text-[#66696d] text-[10px] text-left w-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[12px]">Harper Lee |</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[12px]">{`1960 | `}</p>
        </div>
      </div>
    </div>
  );
}

function BodyFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[8px] relative shrink-0 w-[140px]" data-name="Body frame">
      <BookName />
      <AuthorYear />
    </div>
  );
}

function Checkbox() {
  return <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] shrink-0" data-name="Checkbox" />;
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <BodyFrame />
        <Checkbox />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">War and Peace</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Leo Tolstoy | 1869 | `}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content2 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.2%] left-[0.08%] max-w-none top-[-0.15%] w-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">The Catcher in the Rye</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`J.D. Salinger | 1951 | `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content4 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard1() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image2 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="flex-[1_0_0] h-[182px] min-h-px min-w-px relative" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.2%] left-[0.1%] max-w-none top-[0.1%] w-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Image3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">The Great Gatsby</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`F. Scott Fitzgerald | 1925 | `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content6 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard2() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[157.9%] left-[-0.34%] max-w-none top-[-18.89%] w-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">1984</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`George Orwell | 1949 | `}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content8 />
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard3() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image4 />
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[182px] relative shrink-0 w-[176.5px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Pride and Prejudice</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Jane Austen | 1813 | `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content10 />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard4() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image5 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[145.32%] left-[-0.04%] max-w-none top-[0.1%] w-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Moby Dick</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Herman Melville | 1851 | `}</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content12 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard5() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image6 />
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">Brave New World</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`Aldous Huxley | 1932 | `}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content14 />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard6() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image7 />
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">The Lord of the Rings</p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#313030] text-[10px] whitespace-nowrap">
        <p className="leading-[12px]">{`J.R.R. Tolkien | 1954 | `}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pt-[8px] px-[8px] relative w-full">
          <Content16 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function SmallBookCard7() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[8px]" data-name="small book card">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Image8 />
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <button className="bg-[#f6f7f8] cursor-pointer h-[230px] max-w-[176.5px] min-h-[230px] min-w-[176.5px] relative rounded-[12px] shrink-0 w-[176.5px]" data-name="small book card">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[2px] relative rounded-[inherit] size-full">
          <Image />
          <Content1 />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </button>
      <SmallBookCard />
      <SmallBookCard1 />
      <SmallBookCard2 />
      <SmallBookCard3 />
      <SmallBookCard4 />
      <SmallBookCard5 />
      <SmallBookCard6 />
      <SmallBookCard7 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Q() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Q2">
      <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full" data-name="Text Field Search">
        <Field />
      </div>
      <Container />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[120px] pt-[16px] px-[16px] relative shrink-0 w-[393px]" data-name="content">
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

export default function PilotStep() {
  return (
    <div className="bg-[#f6f7f8] relative size-full" data-name="Pilot_step_06">
      <Progress />
      <Cta />
      <HomeIndicator />
      <StatusBarIPhone />
      <ContentMain />
    </div>
  );
}