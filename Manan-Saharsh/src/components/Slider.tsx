import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, value , ...props }: SliderProps) {
  return (
    <div className="flex flex-col text-sm border-2 p-2 justify-center  w-[40%] 
    text-[#0F3941]">
        <div><p className="text-[#0F3941]">Weeks:
            {value}
            </p>
            </div>
        <Slider
            name="Week"
          defaultValue={[1]}    
          max={8}
          step={1}
          className={cn("w-[100%] border-2] ", className)}
          {...props}
        />
    </div>
  )
}
