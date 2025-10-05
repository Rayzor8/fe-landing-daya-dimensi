
import HomeActivities from "@/components/home/activities";
import HomeBanner from "@/components/home/banner";
import HomeBannerBottom from "@/components/home/banner-bottom";
import HomeCollaboration from "@/components/home/collaboration";
import HomeContent from "@/components/home/content";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeCollaboration/>
      <HomeActivities/>
      <HomeBannerBottom/>
    </>
  );
}
