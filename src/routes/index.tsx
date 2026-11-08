import { createFileRoute } from "@tanstack/react-router";
import { Check, Dumbbell, Music, Clock, MapPin, Star, Users, Instagram, Phone } from "lucide-react";
import hero from "@/assets/hero-gym.jpg";
import dance from "@/assets/dance-class.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CorpoeArte Academia — Treine do seu jeito" },
      { name: "description", content: "Musculação, dança e ginástica com planos sem fidelidade e sem anuidade. Matricule-se na CorpoeArte." },
      { property: "og:title", content: "CorpoeArte Academia — Treine do seu jeito" },
      { property: "og:description", content: "Planos acessíveis, horário livre e aulas coletivas. Venha para a CorpoeArte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const plans = [
  { name: "Plano Essencial", price: "89,90", note: "por mês", items: ["Sem fidelidade", "Sem anuidade", "Musculação e ergometria", "Horário livre", "Avaliação física inicial"] },
  { name: "Plano Arte", price: "119,90", note: "por mês", featured: true, items: ["Sem fidelidade", "Sem anuidade", "Musculação e ergometria", "Aulas de dança e ginástica", "Treine em todas as unidades", "Acompanhante grátis 4x/mês"] },
  { name: "Plano Anual", price: "99,90", note: "por mês, 12 meses", items: ["Tudo do Plano Arte", "Personal 1x por mês", "Camiseta exclusiva", "Desconto em parceiros"] },
];

const mods = [
  { icon: Dumbbell, t: "Musculação", d: "Equipamentos modernos e professores no salão o dia todo." },
  { icon: Music, t: "Dança", d: "Ritmos, zumba e jazz para treinar se divertindo." },
  { icon: Users, t: "Ginástica", d: "Funcional, abdominal, alongamento e muito mais." },
  { icon: Clock, t: "Horário livre", d: "Aberto de segunda a domingo, das 5h às 23h." },
];

const reviews = [
  { n: "Mariana Lopes", u: "Unidade Centro", t: "Ambiente acolhedor e as aulas de dança são incríveis!" },
  { n: "Rafael Souza", u: "Unidade Jardins", t: "Equipamentos novos e professores atenciosos. Recomendo." },
  { n: "Camila Reis", u: "Unidade Centro", t: "Melhor custo-benefício da cidade, sem fidelidade nenhuma." },
];

const units = [
  { n: "CorpoeArte Centro", a: "Rua das Flores, 120 — Centro" },
  { n: "CorpoeArte Jardins", a: "Av. Brasil, 850 — Jardins" },
  { n: "CorpoeArte Norte", a: "Rua do Sol, 45 — Zona Norte" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-display text-2xl tracking-wide">CORPO<span className="text-primary">E</span>ARTE</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#planos" className="hover:text-primary">Planos</a>
            <a href="#modalidades" className="hover:text-primary">Modalidades</a>
            <a href="#unidades" className="hover:text-primary">Unidades</a>
          </nav>
          <a href="#planos" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Matricule-se</a>
        </div>
      </header>

      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <img src={hero} alt="Aluna treinando com cordas na academia" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Academia sem fidelidade</p>
          <h1 className="font-display text-6xl leading-none md:text-8xl">TREINE<br />DO SEU <span className="text-primary">JEITO</span></h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">Musculação, dança e ginástica a partir de R$ 89,90 por mês. Sem anuidade, sem complicação.</p>
          <a href="#planos" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground">Ver planos</a>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-5xl">CONHEÇA NOSSOS <span className="text-primary">PLANOS</span></h2>
        <p className="mt-3 max-w-xl text-muted-foreground">Compare e escolha o plano com o melhor custo-benefício para os seus objetivos.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`flex flex-col rounded-2xl border p-8 ${p.featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card"}`}>
              {p.featured && <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">MAIS ESCOLHIDO</span>}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground">A partir de</p>
              <p className="font-display text-5xl text-primary">R$ {p.price}</p>
              <p className="text-sm text-muted-foreground">{p.note}</p>
              <ul className="my-8 flex-1 space-y-3 text-sm">
                {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{i}</li>)}
              </ul>
              <a href="#unidades" className={`rounded-full py-3 text-center font-semibold ${p.featured ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"}`}>Matricule-se!</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">*Valores podem variar por unidade. Menores de 18 anos devem estar acompanhados do responsável legal no primeiro acesso.</p>
      </section>

      <section id="modalidades" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img src={dance} alt="Aula coletiva de dança" loading="lazy" width={1200} height={912} className="rounded-2xl object-cover" />
          <div>
            <h2 className="font-display text-5xl">EXPERIMENTE A ACADEMIA <span className="text-primary">COMPLETA</span></h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {mods.map(({ icon: I, t, d }) => (
                <div key={t}><I className="mb-3 h-8 w-8 text-primary" /><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-5xl">O QUE NOSSOS ALUNOS <span className="text-primary">DIZEM</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 text-primary">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4">"{r.t}"</p>
              <p className="mt-4 font-semibold">{r.n}</p>
              <p className="text-xs text-muted-foreground">{r.u}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="unidades" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-5xl">NOSSAS <span className="text-primary">UNIDADES</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {units.map((u) => (
              <div key={u.n} className="rounded-2xl bg-secondary p-6">
                <MapPin className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-semibold">{u.n}</h3>
                <p className="text-sm text-muted-foreground">{u.a}</p>
                <a href="#planos" className="mt-4 inline-block text-sm font-semibold text-primary">Matricular nesta unidade →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
          <span className="font-display text-xl text-foreground">CORPO<span className="text-primary">E</span>ARTE</span>
          <div className="flex gap-6"><span className="flex items-center gap-2"><Phone className="h-4 w-4" />(00) 0000-0000</span><span className="flex items-center gap-2"><Instagram className="h-4 w-4" />@corpoearte</span></div>
          <span>© 2026 CorpoeArte Academia</span>
        </div>
      </footer>
    </div>
  );
}
