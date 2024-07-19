
import React from "react";
import { useLottie } from "lottie-react";
import animationData from "../../assets/json/Happy Trail Loader.json";

type LoaderProps = {
  loaderProps?:any
};

const LottieAnimLoader: React.FC<LoaderProps> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);

  return (
    <div className="h-screen flex w-full justify-center items-center">
      <div className="w-96">{View}</div>
    </div>
  );
};

export default LottieAnimLoader;
