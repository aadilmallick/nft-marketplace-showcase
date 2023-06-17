import { SectionWrapper } from "./components/SectionWrapper";
import hero from "./assets/home_hero.png";
import feature from "./assets/feature.png";
import mockup from "./assets/mockup.png";
function App() {
  return (
    <>
      {/* write me a description for the nft app */}
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={hero}
        withBanner={true}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={feature}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={mockup}
        withBanner={true}
        bannerNumber={2}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={feature}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={mockup}
        withBanner={true}
        bannerNumber={3}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={feature}
      />
      <SectionWrapper
        title="Your own store of nifty NFTs. Start selling and growing"
        description="Buy my app idek what I'm doing anymore I'm just writing random stuff and I'm not even sure if it's going to work"
        mockup={mockup}
        withBanner={true}
        bannerNumber={4}
      />
    </>
  );
}

export default App;
