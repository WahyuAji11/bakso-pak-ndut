import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Enak banget, kuahnya gurih, dagingnya empuk, pas banget di lidah.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John",
    text: "Baksonya selalu enak, porsinya pas, kuahnya juga enak banget.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "mbape",
    text: "Tempatnya nyaman, pelayanan cepat, baksonya nggak pernah ngecewain.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-8">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-12 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimoni</h1>
            <p className="text-xs text-gray-400">
              Berikut ini beberapa testimoni dari pelanggan kami yang telah menikmati kelezatan Bakso Pak Ndut.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="max-w-[600px] mx-auto"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div key={data.id} className="my-4">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      className="rounded-full block mx-auto w-24 h-24 object-cover"
                      src={data.img}
                      alt={`${data.name}'s profile`}
                    />
                    <p className="text-gray-500 text-sm italic">{data.text}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-4">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
