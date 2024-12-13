import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = RadioGroupPrimitive.Root;

const Radio = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
            "peer h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
        )}
        {...props}
    >
        <RadioGroupPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
        >
            <Circle className="h-2 w-2" />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
));

Radio.displayName = RadioGroupPrimitive.Item.displayName;

export default RadioGroup;
export { Radio };
