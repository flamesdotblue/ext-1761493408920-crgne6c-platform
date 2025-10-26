import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            PeerLearn: Find study partners, collaborate, and level up
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300">
            Match with peers, join virtual study rooms, and track progress with gamified milestones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="px-6 py-6 text-base">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="px-6 py-6 text-base">
              Explore study rooms
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950/80" />
    </section>
  );
}
