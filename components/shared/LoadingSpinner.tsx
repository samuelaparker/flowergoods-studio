import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
  color = "text-black",
}) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-${size} h-${size} rounded-full border-2 border-${color} border-solid border-t-2 border-transparent animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
