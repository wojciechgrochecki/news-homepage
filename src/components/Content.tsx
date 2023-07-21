import ImageRetro from "../assets/images/image-retro-pcs.jpg";
import ImageTopLaptops from "../assets/images/image-top-laptops.jpg";
import ImageWebDesktop from "../assets/images/image-web-3-desktop.jpg";
import ImageWebMobile from "../assets/images/image-web-3-mobile.jpg";
import ImageGamingGrowth from "../assets/images/image-gaming-growth.jpg";

const Content = ({}) => {
  return (
    <div className="grid  gap-16 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
      <div className="grid grid-flow-row gap-y-5 sm:grid-cols-[1fr_1fr] md:col-span-2 xl:gap-10">
        <picture className="sm:col-span-2">
          <source srcSet={ImageWebDesktop} media="(min-width:640px)" />
          <img src={ImageWebMobile} alt="interesting image" />
        </picture>
        <h2 className="text-5xl font-bolder text-neutral-very-dark-blue sm:col-span-2 xl:col-span-1 xl:text-7xl">
          The Bright Future of Web 3.0?
        </h2>
        <div className="sm:col-span-2 xl:col-span-1 xl:flex xl:flex-col xl:items-start xl:justify-between">
          <p className="mb-5  text-neutral-dark-grayish-blue md:text-xl  xl:text-[1.30rem]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className=" bg-primary-soft-red px-7 py-3 text-sm font-bold tracking-[0.3rem] text-neutral-off-white hover:bg-neutral-very-dark-blue xl:px-10 xl:py-4">
            READ MORE
          </button>
        </div>
      </div>
      <div
        className="flex flex-col justify-between gap-y-4 bg-neutral-very-dark-blue
        p-6
        xl:py-10
        "
        // [&>div:not(:last-child)]:after:my-6
        // [&>div:not(:last-child)]:after:block
        // [&>div:not(:last-child)]:after:border-b
        // [&>div:not(:last-child)]:after:border-b-neutral-dark-grayish-blue
        // xl:[&>div:not(:last-child)]:after:my-10
      >
        <h3 className="mb-2 text-3xl font-bold text-primary-soft-orange md:text-4xl xl:mb-2 xl:text-5xl">
          New
        </h3>

        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange md:text-2xl xl:text-3xl">
            Hydrogen VS Electric Cars
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue md:text-lg xl:text-xl xl:leading-8">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr className="block border-b border-b-neutral-dark-grayish-blue" />
        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange md:text-2xl xl:text-3xl">
            The Downsides of AI Artistry
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue md:text-lg xl:text-xl xl:leading-8">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr className="block border-b border-b-neutral-dark-grayish-blue" />
        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange md:text-2xl xl:text-3xl">
            Is VC Funding Drying Up?
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue md:text-lg xl:text-xl xl:leading-8">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div
        className="grid grid-flow-row gap-y-7 sm:grid-flow-col sm:justify-between
        md:grid-flow-row
      xl:contents "
      >
        <div
          className="grid grid-cols-[110px_1fr] gap-x-5 text-lg sm:w-[200px] sm:grid-cols-1 sm:gap-y-3 md:w-auto  md:grid-cols-[120px_1fr] xl:w-auto
        xl:grid-cols-[1fr_2fr]"
        >
          <img src={ImageRetro} alt="retro image" />
          <div className="flex flex-col justify-around ">
            <span className="text-4xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              01
            </span>
            <h4 className="md:text-2l mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red xl:text-2xl">
              Reviving Retro PCs
            </h4>
            <p className="text-base text-neutral-dark-grayish-blue md:text-lg xl:text-[1.30rem]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div
          className=" grid grid-cols-[110px_1fr] gap-x-5 text-lg sm:w-[200px] sm:grid-cols-1 sm:gap-y-3 md:w-auto  md:grid-cols-[120px_1fr] xl:w-auto
        xl:grid-cols-[1fr_2fr]"
        >
          <img src={ImageTopLaptops} alt="keyboard image" />
          <div className="flex flex-col justify-around ">
            <span className="text-4xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              02
            </span>
            <h4 className="mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red md:text-xl xl:text-2xl">
              Top 10 Laptops of 2022
            </h4>
            <p className="text-base text-neutral-dark-grayish-blue md:text-lg xl:text-[1.30rem]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div
          className=" grid grid-cols-[110px_1fr] gap-x-5 text-lg sm:w-[200px] sm:grid-cols-1 sm:gap-y-3 md:w-auto  md:grid-cols-[120px_1fr] xl:w-auto
        xl:grid-cols-[1fr_2fr]"
        >
          <img src={ImageGamingGrowth} alt="gaming image" />
          <div className="flex flex-col justify-around ">
            <span className="text-4xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              03
            </span>
            <h4 className="mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red md:text-xl xl:text-2xl">
              The Growth of Gaming
            </h4>
            <p className="text-base text-neutral-dark-grayish-blue md:text-lg xl:text-[1.30rem]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
