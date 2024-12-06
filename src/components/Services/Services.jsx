import BaksoImg1 from "../../assets/bakso1.png";
import BaksoImg2 from "../../assets/bakso2.png";
import BaksoImg3 from "../../assets/bakso3.png";

const ServicesData = [
  {
    id: 1,
    img: BaksoImg1,
    name: "Bakso Mercon",
    description:
      "Bakso Mercon, sensasi pedas menggoda yang bikin nagih di setiap gigitan lezat",
  },
  {
    id: 2,
    img: BaksoImg2,
    name: "Bakso Telur",
    description:
      "Bakso Telur, kombinasi sempurna daging lembut dan telur gurih dalam setiap suapan.",
  },
  {
    id: 3,
    img: BaksoImg3,
    name: "Bakso Daging",
    description:
      "Bakso Daging, kenikmatan daging asli dalam setiap suapan.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Layanan Kami
            </p>
            <h1 className="text-3xl font-bold mb-4">Layanan</h1>
            <p className="text-xs text-gray-400">
              Bakso Pak Ndut, hadir dengan cita rasa autentik dan kehangatan sempurna.
              Nikmati setiap suapan dengan sensasi gurih yang memikat.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={`${service.name} Image`}
                    className="max-w-[150px] block mx-auto transform -translate-y-10 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold mt-4">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
