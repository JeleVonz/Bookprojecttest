interface HomeIndicatorProps {
  color?: string;
}

export function HomeIndicator({ color = "black" }: HomeIndicatorProps) {
  return (
    <div
      className="absolute bottom-0 h-[34px] left-0 w-full"
      style={{ zIndex: 3 }}
    >
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 -translate-x-1/2 w-[144px]">
        <div
          className="h-[5px] rounded-[100px] w-[144px]"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
