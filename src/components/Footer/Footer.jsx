import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/pakndut.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Bakso Prasmanan Pak Ndut
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Mimbo, sumberanyar, Situbondo</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+62 823-3532-3637</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with by Wahyu Aji
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
