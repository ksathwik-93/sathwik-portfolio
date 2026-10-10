import { stats } from '@/data/portfolio';
import { ScrollReveal, CountUp } from '@/components/animations';

export default function Stats() {
  return (
    <section className="section-padding relative">
      <div className="max-w-content">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="card-base p-6 sm:p-8 text-center hover:border-emerald/30 transition-all duration-500 group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
                    <span className="text-gradient transition-all duration-500 group-hover:scale-110 inline-block">
                      <CountUp
                        end={stat.value}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </span>
                  </div>
                  <p className="text-sm text-[#8B9691] font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
