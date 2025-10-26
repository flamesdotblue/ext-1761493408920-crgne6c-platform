const cards = [
  {
    title: 'CS Algorithms — Pomodoro room',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Calculus II — Problem set sprint',
    image:
      'https://images.unsplash.com/photo-1700773429986-1c28ed71b1d8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWxjdWx1cyUyMElJJTIwJUUyJTgwJTk0JTIwUHJvYmxlbXxlbnwwfDB8fHwxNzYxNDk0MDA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Organic Chem — Concept review',
    image:
      'https://images.unsplash.com/photo-1685270387136-4455e2a0e40f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQ2hlbSUyMCVFMiU4MCU5NCUyMENvbmNlcHQlMjByZXZpZXd8ZW58MHwwfHx8MTc2MTQ5NDAwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Psych 101 — Quiz prep',
    image:
      'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function StudyRooms() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Active study rooms</h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Join a focus room and start learning together.</p>
          </div>
          <a href="#" className="text-sm font-medium underline underline-offset-4">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <img
                src={c.image}
                alt={c.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="text-xs opacity-80">12 students · Focus timer · Notes</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
