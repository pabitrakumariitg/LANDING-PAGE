import HeroSection from '@/components/HeroSection';
import QuerySection from '@/components/QuerySection';
import HowItWorks from '@/components/HowItWorks';
import ComparisonSection from '@/components/ComparisonSection';
import DelegateSection from '@/components/DelegateSection';
import SearchSection from '@/components/SearchSection';
import PresentationSection from '@/components/PresentationSection';
import WorkspaceSection from '@/components/WorkspaceSection';
import Footer from '@/components/Footer';
import FinancialCarousel from '@/components/FinancialCarousel';

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <QuerySection /> */}
      <HowItWorks />
      <ComparisonSection />
      <FinancialCarousel/>
      {/* <DelegateSection />
      <SearchSection />
      <PresentationSection />
      <WorkspaceSection /> */}
      <Footer />
    </main>
  );
}