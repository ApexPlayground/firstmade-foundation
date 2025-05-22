import FadeInWhenVisible from "../components/FadeInWhenVisible";

const People = () => {
  return (
    <section className="py-10  min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-orange-700 mb-12">
          Meet Our People
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/about.jpg"
                alt="Mr. Olufemi Olusanya"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Mr. Olufemi Olusanya
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4">
                Business strategist, marketing consultant, and Area Sales
                Manager at Olam Grains, Lagos. Olufemi has led the launch of top
                brands like MamaGold and Crown Premium. With a deep background
                in product development, TQM, and sales optimization, he’s a
                recognized force in Nigeria’s business landscape. Passionate
                about youth empowerment and community development, he also
                spearheads initiatives like the Okun Marathon through the
                Firstmade Foundation.
              </p>

              <div className="text-center text-sm text-gray-600 mt-4">
                <span className="font-medium text-orange-600">Phone:</span> +234
                808 565 9220
              </div>
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
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
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
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full">
              <img
                src="/Davis.jpeg"
                alt="Mr. Davies Olaoye Dada"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
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
          <FadeInWhenVisible>
            <div className="h-full bg-orange-50 rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition w-full flex flex-col">
              <img
                src="/Ogundele.jpeg"
                alt="Ogundele Micheal"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-orange-200"
              />
              <h2 className="text-xl font-bold text-center text-orange-700 mb-2">
                Ogundele Micheal
              </h2>
              <p className="text-sm text-gray-700 text-center mb-4 flex-grow">
                Ogundele Michael is an astute businessman. He's a Director in
                Amunifasah Farms (cropping and animal husbandry), and on the
                board of Firstmade Integrated Service Ltd (licensed for lithium
                mining and exploration). He's active in service organizations
                like the Y's Men Club of Lagos, Ilasamaja Lions Club, and the
                Nigeria-Brazil Centre for Business Culture and Cooperation.
              </p>
              <div className="text-center text-sm text-gray-600 mt-auto">
                <span className="font-medium text-orange-600">Phone:</span> +234
                803 194 0116
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default People;
