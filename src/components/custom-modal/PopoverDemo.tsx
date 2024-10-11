import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { PopoverProps } from "../types/CustomPopover.types";

const PopoverDemo: React.FC<PopoverProps> = ({
  buttonColor,
  titlePopover,
  descriptionPopover,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="default" style={{ backgroundColor: buttonColor }}>
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm text-black dark:text-white font-medium">
        <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-md sm:tracking-tight">
          {titlePopover}
        </h2>
        <p className="text-base">{descriptionPopover}</p>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDemo;
