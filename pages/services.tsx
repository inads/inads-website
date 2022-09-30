import type { NextPage } from "next";
import { Layout } from "../components";

const Services: NextPage = () => (
    <Layout page="Services">
        {/*//! Hero */}
        <div
            className="pb-36 pt-56"
            style={{
                background:
                    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('services_hero_bg.png')",
            }}
        >
            <div className="container mx-auto px-36 flex justify-between items-center">
                <div className="space-y-3">
                    <h2 className="text-5xl">WHAT ELSE</h2>
                    <h1 className="text-primary text-8xl font-black">
                        <span className="underline underline-offset-[40px] decoration-primary">
                            W
                        </span>
                        E DO?
                    </h1>
                </div>

                <div className="flex flex-col space-y-4">
                    <h3 className="text-4xl">Services</h3>
                    <span className="text-lg">Home - Services</span>
                </div>
            </div>
        </div>
    </Layout>
);

export default Services;
