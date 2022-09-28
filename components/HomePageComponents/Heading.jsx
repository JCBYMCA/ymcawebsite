import {TAGLINE} from "../../config/constants";

const Heading = () => {
    return (
    <div className="mt-20 relative text-white">

        <div className={'w-20'}>
            <h1 className={'ml-20 relative font-bold text-6xl '}>{TAGLINE}</h1>
        </div>
        <div className={'top-0 z-0 absolute w-1/12 bg-[#AA0E30] h-60'}>
        </div>
    </div>
  );
}

export default Heading;