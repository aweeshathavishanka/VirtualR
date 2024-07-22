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
    </div>
  );
};

export default FeatureSection;
