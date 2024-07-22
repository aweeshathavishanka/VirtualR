import video1 from "../assets/assets/video1.mp4";
import video2 from "../assets/assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center mt-6 lg:mt-10">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools <br />{" "}
        <span className=" bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text font-medium">
          for developers
        </span>
      </h1>
      <p className=" mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Welcome to VirtualR! Elevate your projects with expert full-stack
        development, UI/UX design, and branding solutions. Join us to transform
        ideas into exceptional digital experiences.
      </p>
      <div className=" flex justify-center my-10">
        <a
          href="#"
          className=" bg-gradient-to-r from-orange-500 to-red-600 py-3 px-4 mx-3 rounded-md">
          Start for Free
        </a>
        <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className=" flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className=" rounded-md w-1/2 border border-orange-700 shadow-orange-600 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className=" rounded-md w-1/2 border border-orange-700 shadow-orange-600 mx-2 my-4">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
