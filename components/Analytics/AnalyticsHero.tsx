export const AnalyticsHero: React.FC = () => (
    <div
        className="pb-36 pt-56 bg-contain xl:bg-cover"
        style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url('/blockchain.png')",
        }}
    >
        <div className="container mx-auto px-5 flex justify-center items-center">
            <div className="space-y-3 font-np">
                <h1 className="text-primary text-5xl xl:text-8xl font-black">MEASURABLE</h1>
                <h2 className="text-2xl xl:text-5xl">OUTDOOR</h2>
                <h2 className="text-2xl xl:text-5xl">
                    <span className="underline underline-offset-[40px] decoration-primary">AD</span>
                    VERTISING
                </h2>
            </div>

            <div className="hidden xl:flex flex-col space-y-4">
                <h3 className="text-4xl font-np font-medium">Analytics</h3>
                <span className="text-lg font-ps font-normal">Home - Analytics </span>
            </div>
        </div>
    </div>
);
