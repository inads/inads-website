import Image from "next/image";
import service_image_1 from "../../public/service_image_1.png";
import IG2 from "../../public/IG2.png";
import production from "../../public/production.png";
import IG4 from "../../public/IG4.png";
import onlinemedia from "../../public/onlinemedia.jpg";
import branding from "../../public/branding.png";
import photo from "../../public/photo.png";
import blogging from "../../public/blogging.png";
import exhibitions from "../../public/exhibitions.png";
import signage from "../../public/signage.png";
import giftitems from "../../public/giftitems.jpg";
import uniforms from "../../public/uniforms.jpg";
import events from "../../public/events.png";
import { motion, Variants } from "framer-motion";

const swoosh: Variants = {
    offscreenR: {
        x: 300,
        opacity: 0,
    },
    onscreenR: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
    offscreenL: {
        x: -300,
        opacity: 0,
    },
    onscreenL: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
};

export const ServicesList = () => (
    <div className="bg-black py-20 xl:py-28">
        <div className="container mx-auto  px-5 md:px-12 lg:px-24 xl:px-36 flex flex-col space-y-32">
            {/*//! Heading  */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-np font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Services
            </h1>

            {/*//! Service List */}
            <section className="flex flex-col space-y-24">
                {/*//// Service 1 */}
                <div className="flex flex-col-reverse items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Media Planning & Strategy
                        </h1>
                        <p className="text-lg md:text-xl text-center xl:text-left font-ps font-normal">
                            INADS focuses on understanding what media a client&apos;s target
                            customer reads, watches, interacts with or hears to develop a strategic
                            plan of relevant advertising opportunities ( broadcast/online display
                            and video search-adword). We create and strategize a good advertising
                            and marketing plan for all your products, business, or brand. We are
                            meant to work within your business objectives and keep within the budget
                            to develop advertising campaigns that attract the attention of potential
                            customers and lure them into buying your products. We focus on securing
                            those media advertising opportunities at the best position and price for
                            the client{" "}
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -right-6 z-10 2xl:right-[2%]"></div>
                        <Image src={service_image_1} alt="Service Image" className="object-cover z-20" />
                    </motion.div>
                </div>

                {/*//// Service 2 */}
                <div className="flex flex-col xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -left-5 z-10"></div>
                        <Image src={IG2} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary md:text-4xl text-3xl text-center xl:text-left font-np font-medium">
                            Creativity
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We are versed in concept knowledge, copywriting, and graphic design, as
                            well as brand engineering and studio work
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 3 */}
                <div className="flex flex-col-reverse xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Production
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We use some of the most advanced commercial printing equipment to create
                            clear high deﬁnition prints & banners including digital printing, Oﬀset
                            Printing, Vehicle Branding, Heat Transfer Printing.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:right-[2%] z-10"></div>
                        <Image
                            src={production}
                            alt="Service Image"
                            className="object-contain z-20"
                        />
                    </motion.div>
                </div>

                {/*//// Service 4 */}
                <div className="flex flex-col xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -left-5 z-10"></div>
                        <Image src={IG4} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Social Media
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            INADS believes that we&apos;re in an Age of Dialogue, a time in which
                            marketing remains inﬂuential in the way consumers perceive brands and
                            what they buy and consume. So, INADS sees the value in integrating its
                            social media skills within the wider context of our total service oﬀer.
                            It is all part of being a communications agency that develops holistic,
                            integrated and media-agnostic campaigns for our clients. We help you
                            establish, grow and manage communities on social media from Facebook and
                            Twitter to LinkedIn, Instagram and engage followers with meaningful;
                            marketing content/ promotions & contests /Monitoring & management.
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 5 */}
                <div className="flex flex-col-reverse xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Online Media
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            Online media planning has never been more important to devise powerful
                            and eﬀective media campaigns online. We work to make sure you&apos;re
                            optimizing your online presence and making the sale before consumers
                            even walk in the door. We design, build, develop and manage dynamic,
                            user-friendly websites and mobile -Social applications. Create email
                            campaigns; produce e-newsletters, and use search engine optimization
                            (SEO) to help you cut through the digital clutter to reach your target
                            audience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:right-[11%] z-10"></div>
                        <Image
                            src={onlinemedia}
                            alt="Service Image"
                            className="object-contain z-20"
                        />
                    </motion.div>
                </div>

                {/*//// Service 6 */}
                <div className="flex flex-col xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -left-5 z-10"></div>
                        <Image src={branding} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Branding
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We help you build a memorable brand by creating a face and voice for
                            your brand, from the logo to the font to the way we tell your story; Key
                            messaging, Logo/identity, Advertising campaigns Video storytelling
                            etc... We show people who you are, what you do and how you&apos;re
                            diﬀerent from competitors.
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 7 */}
                <div className="flex flex-col-reverse xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Photography & Video Production
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            Introduce the world to your business with authentic with high-quality
                            video production content, Professionally shot and high-resolution photos
                            of your team, locations, products, customers and events that would
                            increase engagement, build trust and provide value with and engaging the
                            attention of your online audience.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:right-[2%] z-10"></div>
                        <Image src={photo} alt="Service Image" className="object-contain z-20" />
                    </motion.div>
                </div>

                {/*//// Service 8 */}
                <div className="flex flex-col xl:flex-row xl:space-x-28 items-center justify-center">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -left-5 z-10"></div>
                        <Image src={blogging} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Blogging
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We provide Blogging strategy which help to attracts customers and new
                            visitors through a variety of channels including organic search traffic
                            (SEO), social media, email and more, considered as an add value in
                            earning their trust and leading them deeper into your website where they
                            convert to be-come new customers.
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 9 */}
                <div className="flex flex-col-reverse items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Exhibitions Stands
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We are passionate about supplying innovative exhibition stands from the
                            brieﬁng stage to the ﬁnal execution of the exhibition stand design, we
                            take care of everything for you which build on your brand identity and
                            deliver maximum results for your business. We envision and create
                            enticing visual experiences for your audiences and select the right
                            exhibition stand solution which is tailored to your marketing needs and
                            matches your brand image and marketing requirement along with complete
                            range of services so that you have a successful show.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:right-[2%] z-10"></div>
                        <Image
                            src={exhibitions}
                            alt="Service Image"
                            className="object-contain z-20"
                        />
                    </motion.div>
                </div>

                {/*//// Service 10 */}
                <div className="flex flex-col items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 -left-5 z-10"></div>
                        <Image src={signage} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Signage
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We have invented some of the best, most advanced processes for printing
                            custom signs. Our methods ensure that you get the highest quality sign,
                            in the least amount of time. We build and print all types of signage
                            ranging from budget roller banners through to large scale be-spoke
                            stands with our business banner printing options, you can broadcast a
                            speciﬁc message to the general public with a vinyl banner over other
                            advertising products.
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 11 */}
                <div className="flex flex-col-reverse items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Gift Items
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            Recognize a job well done, celebrate new working relationships or ring
                            in the holidays with custom corporate gifts. We have thousands of
                            gifting options to tell clients, employees or executives how much you
                            value their contributions. Our selection of custom corporate gift items
                            includes jackets, sweaters, dress shirts, mugs, golf gifts, tech and
                            travel gifts and more.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:-right-[5%] z-10"></div>
                        <Image
                            src={giftitems}
                            alt="Service Image"
                            className="object-contain z-20"
                        />
                    </motion.div>
                </div>

                {/*//// Service 12 */}
                <div className="flex flex-col items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-80 -top-5 -left-5 z-10"></div>
                        <Image src={uniforms} alt="Service Image" className="object-contain z-20" />
                    </motion.div>

                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Uniforms
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We design, develop and manufacture professional high-quality uniforms
                            and handle all your supply chain and logistics needs. Our individualized
                            aftersales services can include onsite ﬁttings, alterations, entitlement
                            management, online ordering and reissuing. We oﬀer both customized and
                            standard uniform solutions, along with stewardess hats, pilot caps and a
                            range of uniform accessories.
                        </p>
                    </motion.div>
                </div>

                {/*//// Service 13 */}
                <div className="flex flex-col-reverse items-center justify-center xl:flex-row xl:space-x-28">
                    <motion.div
                        className="space-y-10 xl:w-1/2"
                        variants={swoosh}
                        initial="offscreenL"
                        whileInView="onscreenL"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-primary text-3xl md:text-4xl text-center xl:text-left font-np font-medium">
                            Events
                        </h1>
                        <p className="text-lg md:text-xl xl:text-xl text-center xl:text-left font-ps font-normal">
                            We create events that will leave your guests with a lasting impression
                            by crafting specialty programming for a wide variety of events, such as
                            meetings, conferences, trade shows, product launches, awards galas,
                            fashion shows, Ceremonies, celebrations,, by using the most modern and
                            best audiovisual technology.
                        </p>
                    </motion.div>

                    <motion.div
                        className="xl:w-1/2 relative mb-10 xl:mb-0"
                        variants={swoosh}
                        initial="offscreenR"
                        whileInView="onscreenR"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="hidden xl:block absolute bg-secondary w-96 h-72 -top-5 2xl:right-[2%] z-10"></div>
                        <Image src={events} alt="Service Image" className="object-contain z-20" />
                    </motion.div>
                </div>
            </section>
        </div>
    </div>
);
