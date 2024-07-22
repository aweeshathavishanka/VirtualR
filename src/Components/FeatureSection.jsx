import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className=" relative mt-20 pt-10 border-b border-neutral-800 min-h-[800px]">
      <div className=" text-center">
        <span className=" bg-neutral-900 text-orange-500 rounded-full h-6 font-medium text-sm px-2 py-1 uppercase">
          Feature
        </span>
        <h1 className=" text-3xl lg:6xl  sm:text-5xl mt-10 lg:mt-15 tracking-wide">
          Easily Build{" "}
          <span className=" bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            Your code
          </span>
        </h1>
      </div>
      <div className=" flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className=" w-full sm:w-1/2 lg:w-1/3">
            <div className=" flex">
              <div className=" flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h1 className=" mt-1 mb-6 text-xl">{feature.text}</h1>
                <p className=" font-md p-2 mb-20 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
