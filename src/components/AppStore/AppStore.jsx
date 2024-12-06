
import Gif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Bakso Prasmanan Pak Ndut
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <p className="w-full">
                  Hadir dengan konsep prasmanan, nikmati bakso dengan berbagai pilihan topping dan kuah sesuai selera. Cocok untuk dinikmati kapan saja.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
