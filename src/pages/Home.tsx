import FadeInWhenVisible from "../components/FadeInWhenVisible";

const Home = () => {
  return (
    <section className=" py-10">
      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
        {/* Text */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-6 text-orange-600">
            Service to Humanity
          </h1>
          <p className="text-lg text-[#222525] leading-relaxed max-w-xl">
            Firstmade Foundation is a non-profit organization dedicated to
            service to humanity and social responsibility. Our mission is to
            uplift our communities by promoting self-development, youth
            empowerment, and a culture of personal responsibility.
          </p>
        </div>

        {/* Image */}

        <div className="w-full lg:w-1/2 flex justify-center">
          <FadeInWhenVisible>
            <img
              src="/homepage.jpg"
              alt="A kind volunteer"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20 grid gap-10 md:grid-cols-2 mt-20 items-stretch">
        {/* Objectives Card */}
        <FadeInWhenVisible>
          <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition flex flex-col min-h-full w-full">
            <>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                Objectives
              </h2>
              <ul className="space-y-3 text-[#222525] text-base list-disc list-inside">
                <li>
                  To provide relief to vulnerable populations (e.g. poverty,
                  disaster, and illness)
                </li>
                <li>
                  To promote education, healthcare, sports, and social welfare
                </li>
                <li>To promote community development</li>
                <li>To enhance quality of life for marginalized groups</li>
              </ul>
            </>
          </div>
        </FadeInWhenVisible>

        {/* Aims Card */}
        <FadeInWhenVisible>
          <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition flex flex-col min-h-full w-full">
            <>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Aims</h2>
              <ul className="space-y-3 text-[#222525] text-base list-disc list-inside">
                <li>To alleviate suffering and improve well-being</li>
                <li>
                  To facilitate access to essential services (e.g. healthcare,
                  education, sports)
                </li>
                <li>
                  To build partnerships and collaborations for greater impact
                </li>
              </ul>
            </>
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="py-16 max-w-screen-2xl mx-auto px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Moments from Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/home1.jpg",
            "/home2.jpg",
            "/home3.jpg",
            "/home4.jpeg",
            "/home5.jpg",
            "/home6.jpg",
          ].map((src, i) => (
            <FadeInWhenVisible key={i}>
              <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Media ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
