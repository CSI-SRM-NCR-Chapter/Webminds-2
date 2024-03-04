import React from "react";
import { Progress } from "@nextui-org/react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function ProgressBar() {
    const [value, setValue] = React.useState(41);

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         setValue((v) => (v >= 100 ? 0 : v + 10));
    //     }, 500);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="flex justify-between items-center h-[50px]">
            <Progress
                aria-label="Progress.."
                size="md"
                value={value}
                color="#124752"
                label=" "
                showValueLabel={true}
                classNames={{
                    base: "!w-11/12",
                    indicator: "!bg-[#124752]",
                    label: "",
                }} />
            <FaCircleArrowRight className="!text-4xl hover:!text-5xl !text-black transition-all" />
        </div>
    );
}
