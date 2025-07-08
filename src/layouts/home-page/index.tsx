import FirstSection from './FirstSection';
import LastestNewsSection from './LastestNews';
import LogosSection from './LogosSection';
import MapSection from './MapSection';
import MusicInforSection from './MusicInforSection';
import PricingSection from './PricingSection';
import SocialGallery from './SocialGallerySection';
import SubscribeBannerSection from './SubcriseBannerSection';

function HomePage() {
  return (
    <>
      <FirstSection></FirstSection>
      <PricingSection></PricingSection>
      <MusicInforSection></MusicInforSection>
      <SubscribeBannerSection></SubscribeBannerSection>
      <LastestNewsSection></LastestNewsSection>
      <MapSection></MapSection>
      <LogosSection></LogosSection>
      <SocialGallery></SocialGallery>
    </>
  )
}

export default HomePage;
