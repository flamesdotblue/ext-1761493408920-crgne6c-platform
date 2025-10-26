import { Rocket, Users, Trophy, Video } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart peer matching',
    desc: 'Find study partners by course, schedule, and goals to stay accountable.'
  },
  {
    icon: Video,
    title: 'Virtual study rooms',
    desc: 'Focus together with timers, shared notes, and light-weight chat.'
  },
  {
    icon: Trophy,
    title: 'Gamified progress',
    desc: 'Earn streaks, badges, and XP as you complete study sessions.'
  },
  {
    icon: Rocket,
    title: 'Onboarding in minutes',
    desc: 'Set goals, pick courses, and join a room—no heavy setup required.'
  }
];

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Why students love PeerLearn</h2>
        <p className="mt-3 max-w-2xl mx-auto text-center text-slate-700 dark:text-slate-300">
          Designed for focus, built for collaboration.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-6">
              <div className="h-11 w-11 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
