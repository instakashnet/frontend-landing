"use client";
import { RefreshCcw } from "lucide-react";

interface SwipButtonProps {
  onClick: () => void;
}

function SwipeButton({ onClick }: SwipButtonProps) {
  return (
    <button className='flex items-center justify-center rounded-full w-12 h-12 border-4 border-primary bg-[#67be9f]' onClick={onClick}>
      <RefreshCcw className='text-primary' size={24} />
    </button>
  );
}

export default SwipeButton;
