import { features } from "../constants";
import styles from "../style";

const Features = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {features.map((features) => (
        <div key={features.id} className={`flex-1 flex justify-start items-center flex-col m-3`} >
            <img className=""
            src={features.img} />
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                {features.title}
            </p>
        <div>
            <p className="font-poppins font-light xs:text-[16.45px] text-[15.45px] xs:leading-[20.58px] leading-[15.58px] text-gray-400 lowercase text-center mt-2">
                {features.description}
            </p>
        </div>
        </div>
    ))}
    </section>
);

export default Features;
