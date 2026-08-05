import { 
  ThemeProvider, 
  Navbar, 
  HeroSection, 
  SpeakersGrid, 
  ScheduleTimeline, 
  RegistrationCards, 
  Footer 
} from '@conf/ui-core/components';
import { nursingConferencePreset } from '@conf/ui-core/config/presets';

export default function Home() {
  return (
    <ThemeProvider config={nursingConferencePreset}>
      <Navbar />
      <main>
        <HeroSection />
        <SpeakersGrid />
        <ScheduleTimeline />
        <RegistrationCards />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
