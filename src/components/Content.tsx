import ImageRetro from "../assets/images/image-retro-pcs.jpg";
import ImageTopLaptops from "../assets/images/image-top-laptops.jpg";
import ImageWebDesktop from "../assets/images/image-web-3-desktop.jpg";
import ImageWebMobile from "../assets/images/image-web-3-mobile.jpg";
import ImageGamingGrowth from "../assets/images/image-gaming-growth.jpg";

const Content = ({}) => {
  return (
    <div className="grid grid-flow-row gap-5">
      <picture>
        <source srcSet={ImageWebDesktop} media="(min-width:640px)" />
        <img src={ImageWebMobile} alt="interesting image" />
      </picture>
      <h2 className="text-5xl font-bolder text-neutral-very-dark-blue">
        The Bright Future of Web 3.0?
      </h2>
      <div>
        <p className="mb-5  text-neutral-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="mb-10 bg-primary-soft-red px-7 py-3 text-sm font-bold tracking-[0.3rem] text-neutral-off-white">
          READ MORE
        </button>
        <div
          className="bg-neutral-very-dark-blue p-6
        [&_div:not(:last-child)]:after:my-6
        [&_div:not(:last-child)]:after:block
        [&_div:not(:last-child)]:after:border-b
        [&_div:not(:last-child)]:after:border-b-neutral-dark-grayish-blue
        "
        >
          <h3 className="mb-7 text-3xl font-bold text-primary-soft-orange">
            New
          </h3>
          <div className="text-neutral-off-white">
            <h4 className="mb-1 text-lg font-bold ">
              Hydrogen VS Electric Cars
            </h4>
            <p className="text-base leading-6 text-neutral-grayish-blue">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="text-neutral-off-white">
            <h4 className="mb-1 text-lg font-bold ">
              The Downsides of AI Artistry
            </h4>
            <p className="text-base leading-6 text-neutral-grayish-blue">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="text-neutral-off-white">
            <h4 className="mb-1 text-lg font-bold ">
              Is VC Funding Drying Up?
            </h4>
            <p className="text-base leading-6 text-neutral-grayish-blue">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-y-7">
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 ">
          <img src={ImageRetro} alt="retro image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80">
              01
            </span>
            <h4 className="mb-1 text-lg font-bolder">Reviving Retro PCs</h4>
            <p className="text-neutral-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 ">
          <img src={ImageTopLaptops} alt="keyboard image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80">
              02
            </span>
            <h4 className="mb-1 text-lg font-bolder">Top 10 Laptops of 2022</h4>
            <p className="text-neutral-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-5 ">
          <img src={ImageGamingGrowth} alt="gaming image" />
          <div className="flex flex-col justify-around ">
            <span className="text-3xl font-bold text-neutral-grayish-blue/80">
              03
            </span>
            <h4 className="mb-1 text-lg font-bolder">The Growth of Gaming</h4>
            <p className="text-neutral-dark-grayish-blue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
