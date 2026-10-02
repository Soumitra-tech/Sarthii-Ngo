import { Navbar } from '@/components/Navbar'; 
import { WhatsAppButton } from '@/components/WhatsAppButton'; 
import { Hero } from '@/components/sections/Hero'; 
import { About } from '@/components/sections/About'; 
import { CoreValues } from '@/components/sections/CoreValues'; 
import { VisionMission } from '@/components/sections/VisionMission'; 
import { FounderMessage } from '@/components/sections/FounderMessage'; 
import { OurWork } from '@/components/sections/OurWork'; 
import { Gallery } from '@/components/sections/Gallery'; 
import { UpcomingProjects } from '@/components/sections/UpcomingProjects'; 
import { Collaborations } from '@/components/sections/Collaborations'; 
import { CTABanner } from '@/components/sections/CTABanner'; 
import { Contact } from '@/components/sections/Contact'; 
import { Footer } from '@/components/sections/Footer'; 
 
function App() { 
  return ( 
    <> 
      <Navbar /> 
      <main> 
        <Hero /> 
        <About /> 
        <CoreValues /> 
        <VisionMission /> 
        <FounderMessage /> 
        <OurWork /> 
        <Gallery /> 
        <UpcomingProjects /> 
        <Collaborations /> 
        <CTABanner /> 
        <Contact /> 
      </main> 
      <Footer /> 
      <WhatsAppButton /> 
    </> 
  ); 
} 
 
export default App;
