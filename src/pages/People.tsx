import FadeInWhenVisible from "../components/FadeInWhenVisible";

const People = () => {
  return (
    <section className="py-10  min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-orange-700 mb-12">
          Meet Our People
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">

          {/* Mrs. Christy A. Eboigbe */}
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/everfresh.jpeg"
                alt="Mrs. Christy A. Eboigbe"
                className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Mrs. Christy A. Eboigbe
              </h2>
              <p className="text-sm text-gray-700 text-center italic mb-2">
                “Madam Everfresh”
              </p>
             <p className="text-sm text-gray-700 text-center mb-4">
                A seasoned entrepreneur with a passion for building and managing multiple successful businesses,
                Mrs. Christy A. Eboigbe finds true fulfillment in empowering others, especially young people,
                to discover their potential and take bold steps toward their goals.
                As a mentor, she values connection, growth, and community development, often engaging with
                young minds ready to make their mark on the world. Her work continues to reflect her passion
                for inspiring and supporting the next generation.
             </p>

            </div>
          </FadeInWhenVisible>



          {/* Chief Kayode Olutayo John */}
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/john.jpeg"
                alt="Chief Kayode Olutayo John"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Chief Kayode Olutayo John
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4">
                Managing Director of Khayjohn Nig Ent Ltd with interests in oil
                & gas, real estate, haulage services, and outsourcing. Holds a
                Master’s degree in Transport Management (Logistics). Former
                Secretary to Yagba West Local Government, now Special Adviser on
                Urban Development to the Executive Governor of Kogi State.
              </p>
              <div className="text-center text-sm text-gray-600 mt-4">
                <span className="font-medium text-orange-600">Phone:</span> +234
                803 194 0116
              </div>
            </div>
          </FadeInWhenVisible>
          {/*Ogundele*/}

          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/Ogundele.jpeg"
                alt="Ogundele Micheal"
                className="w-48 h-48 object-fill rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Ogundele Micheal
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4">
                Ogundele Michael is an astitute businessman He's a Director in
                Amunifasah farms(cropping and animal husbandry)Also,a Director
                on the Board of Firstmade integrated Service Limited(Company
                Lisenced for Mining & Exploration of Lithium) He belongs to many
                service organisations such as:Y's Men Club of Lagos (the service
                arm of YMCA of Lagos)... Ilasamaja Lion's Club and General
                Coordinator Nigeria-Brazil Centre for Business Culture and
                Cooperation(A Chamber of Commerce Incorporated in Brazil)
              </p>
              <div className="text-center text-sm text-gray-600 mt-4">
                <span className="font-medium text-orange-600">Phone:</span>+234
                802 330 4382
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Tayo Leslie */}
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/leslie.jpeg"
                alt="Tayo Leslie"
                className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-4 border-4 border-orange-200"

              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Tayo Leslie
              </h2>
             <p className="text-sm text-gray-700 text-center mb-4">
              Tayo Leslie is a dedicated professional accountant whose career began at the Federal Ministry
              of Agriculture and progressed to key government roles within the Office of the Secretary to
              the Government of the Federation (OSGF). Known for her financial expertise and leadership,
              she served as Project Accountant to prominent government officials, including Senator Ita Enang
              and Senator Babajide Omoworare, both former Special Advisers to the President on National Assembly Matters.
              Tayo is also a passionate sports enthusiast and devoted parent, admired for her discipline, integrity,
              and deep commitment to community service.
             </p>
             <div className="text-center text-sm text-gray-600 mt-4">
                <span className="font-medium text-orange-600">Phone:</span>
              </div>


            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/Davis.jpeg"
                alt="Mr. Davies Olaoye Dada"
                className="w-48 h-48 rounded-full object-cover object-top mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Mr. Davies Olaoye Dada
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4">
                Group Chairman of Mcsond Group. A seasoned insurance expert with
                over 20 years of industry experience, Davies holds a BSc in
                Economics and multiple professional certifications. Known for
                his leadership, strategic thinking, and award-winning
                performance, he leads companies across insurance, logistics, and
                real estate. His career is a testament to perseverance, growth,
                and excellence.
              </p>
              <div className="text-center text-sm text-gray-600 mt-4">
                <span className="font-medium text-orange-600">Phone:</span> +234
                805 269 4400
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="h-full">
            <div className="bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full h-full flex flex-col">
              <img
                src="/Aina.jpg"
                alt="Babafemi Aina"
                className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Babafemi Aina MBA FCCA
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4 flex-grow">
                Babafemi is a seasoned finance specialist with over 23 years of
                experience in audit, advisory, manufacturing, oil & gas, and
                development sectors. He holds a BSc in Accounting from Oxford
                Brookes University and an MBA from the University of East
                London. He is a Fellow of the ACCA and sits on the board of
                several foundations focused on impact and human capital
                development.
              </p>
              <div className="text-center text-sm text-gray-600 mt-auto">
                <span className="font-medium text-orange-600">Phone:</span>+234
                809 491 7896
                {/* Optional */}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default People;
