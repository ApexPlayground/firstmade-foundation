import AdvisorCard from "../components/AdvisorCard";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const Advisor = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-orange-600 text-center mb-12">
                    Meet Our Advisors
                </h2>

                {/* Grid layout for cards */}

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <FadeInWhenVisible>
                        <AdvisorCard
                            name="Princess Edna D.D. Azura (Kwatam Mutaku)"
                            title="16th National President, NCWS Nigeria"
                            image="/advisor.jpeg"
                            summary="Princess Edna D.D. Azura is a distinguished stateswoman, farmer, theologian, gospel artist, and transformational leader. Click to learn more about her journey and achievements."
                            link="/advisor1"
                        />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <AdvisorCard
                            name="Engr. Olumuyiwa Ajibola Awoniyi"
                            title="Head of Network Planning & Investment, AEDC"
                            image="/advisor2.jpeg"
                            summary="Engr. Awoniyi is a seasoned power industry expert with over 20 years of experience, specializing in renewable energy and distribution network planning. Click to learn more about his journey and contributions."
                            link="/advisor2"
                        />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <AdvisorCard
                            name="Mrs. Dasola O. Adubi"
                            title="Accountant • Philanthropist • Entrepreneur"
                            image="/advisor3.jpeg"
                            summary="Mrs. Dasola O. Adubi is a passionate accountant, philanthropist, and successful entrepreneur, inspiring many through her business ventures and community impact. Click to learn more about her journey."
                            link="/advisor3"
                        />
                    </FadeInWhenVisible>
                </div>

            </div>
        </section>
    );
};

export default Advisor;
