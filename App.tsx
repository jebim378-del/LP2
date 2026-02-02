
import React from 'react';
import Hero from './components/Hero';
import IconMarquee from './components/IconMarquee';
import Features from './components/Features';
import AboutMe from './components/AboutMe';
import MultiStepForm from './components/MultiStepForm';
import BookingCalendar from './components/BookingCalendar';
import Footer from './components/Footer';
import { DottedSurface } from './components/ui/dotted-surface';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-purple-500/30">
      <DottedSurface className="opacity-50" />
      
      <div className="relative z-10">
        <Hero />
        <IconMarquee />
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
          <Features />
          <AboutMe />
          <MultiStepForm />
          <BookingCalendar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
