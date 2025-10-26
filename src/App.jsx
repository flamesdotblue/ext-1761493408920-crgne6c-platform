import Hero from './components/Hero';
import Features from './components/Features';
import StudyRooms from './components/StudyRooms';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-neutral-950 dark:text-white">
      <Hero />
      <Features />
      <StudyRooms />
      <Footer />
    </div>
  );
}
