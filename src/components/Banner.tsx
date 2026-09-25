import BannerImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="px-16 bg-base-200 min--screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={BannerImg} alt='Interface Stack Image'/>
                <div>
            <h1 className='text-6xl font-extrabold'>Build You Ideal <br /> 
                        <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                <p className="py-6">
                    Explore frontend, backend, and tooling options, <br />
                    compare them side by side, and put together a stack that fits your next project.
                </p>
                <div className='flex py-8 gap-x-3'>
                        <button className="btn bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)]">Explore Technologies</button>
                        <button className="btn px-12 btn-neutral btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;