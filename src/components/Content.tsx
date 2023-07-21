import ImageRetro from "../assets/images/image-retro-pcs.jpg";
import ImageTopLaptops from "../assets/images/image-top-laptops.jpg";
import ImageWebDesktop from "../assets/images/image-web-3-desktop.jpg";
import ImageWebMobile from "../assets/images/image-web-3-mobile.jpg";
import ImageGamingGrowth from "../assets/images/image-gaming-growth.jpg";

const Content = ({}) => {
  return (
    <div className="grid grid-flow-row gap-10 sm:grid-cols-3">
      <div className="grid grid-flow-row gap-y-5 sm:col-span-2 sm:grid-cols-[1fr_1fr] sm:gap-10">
        <picture className="sm:col-span-2">
          <source srcSet={ImageWebDesktop} media="(min-width:640px)" />
          <img src={ImageWebMobile} alt="interesting image" />
        </picture>
        <h2 className="text-5xl font-bolder text-neutral-very-dark-blue sm:text-7xl">
          The Bright Future of Web 3.0?
        </h2>
        <div className="xl:flex xl:flex-col xl:items-start xl:justify-between">
          <p className="mb-5  text-neutral-dark-grayish-blue xl:text-[1.30rem] ">
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
        className="bg-neutral-very-dark-blue p-6 xl:py-10
        [&_div:not(:last-child)]:after:my-6
        [&_div:not(:last-child)]:after:block
        [&_div:not(:last-child)]:after:border-b
        [&_div:not(:last-child)]:after:border-b-neutral-dark-grayish-blue
        xl:[&_div:not(:last-child)]:after:my-10
        "
      >
        <h3 className="mb-7 text-3xl font-bold text-primary-soft-orange xl:text-5xl">
          New
        </h3>
        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange xl:text-3xl">
            Hydrogen VS Electric Cars
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue xl:text-xl xl:leading-8">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange xl:text-3xl">
            The Downsides of AI Artistry
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue xl:text-xl xl:leading-8">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="text-neutral-off-white">
          <h4 className="mb-1 text-lg font-bold hover:cursor-pointer hover:text-primary-soft-orange xl:text-3xl">
            Is VC Funding Drying Up?
          </h4>
          <p className="text-base leading-6 text-neutral-grayish-blue xl:text-xl xl:leading-8">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>

      <div
        className="contents grid-flow-row gap-y-7 sm:col-span-3 sm:grid-flow-col
      sm:gap-x-10 "
      >
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 sm:col-span-1 ">
          <img src={ImageRetro} alt="retro image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              01
            </span>
            <h4 className="mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red xl:text-2xl">
              Reviving Retro PCs
            </h4>
            <p className="text-neutral-dark-grayish-blue xl:text-[1.30rem]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 ">
          <img src={ImageTopLaptops} alt="keyboard image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              02
            </span>
            <h4 className="mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red xl:text-2xl">
              Top 10 Laptops of 2022
            </h4>
            <p className="text-neutral-dark-grayish-blue xl:text-[1.30rem]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 ">
          <img src={ImageGamingGrowth} alt="gaming image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80 xl:text-5xl">
              03
            </span>
            <h4 className="mb-1 text-lg font-bolder hover:cursor-pointer hover:text-primary-soft-red xl:text-2xl">
              The Growth of Gaming
            </h4>
            <p className="text-neutral-dark-grayish-blue xl:text-[1.30rem]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
