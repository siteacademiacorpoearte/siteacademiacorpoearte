import { createFileRoute } from "@tanstack/react-router";
import { Check, Dumbbell, Music, Clock, MapPin, Star, Users, Instagram, Phone } from "lucide-react";
import React from "react";
import dance from "@/assets/dance-class.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


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

const proAthletes = [
  { name: "Carlos Mendes", role: "Atleta de Fisiculturismo", desc: "Treino de hipertrofia e definição avançada", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80" },
  { name: "Juliana Silveira", role: "Professora de Dança", desc: "Ritmos e zumba com muita energia", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
  { name: "Bruno Lima", role: "Especialista em Levantamento de Peso", desc: "Força bruta e técnica de levantamento olímpico", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
  { name: "Fernanda Costa", role: "Instrutora de Ciclismo Indoor", desc: "Resistência cardiorrespiratória e alta performance", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80" },
  { name: "Marcos Vinícius", role: "Coach de Fisiculturismo", desc: "Preparação de campeonatos e poses", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80" },
  { name: "Patrícia Dias", role: "Personal de Musculação", desc: "Musculação focada em resultados rápidos", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80" },
  { name: "Lucas Gabriel", role: "Atleta de Powerlifting", desc: "Levantamento de peso básico e progressão de carga", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=600&q=80" },
  { name: "Beatriz Ramos", role: "Professora de Dança & Ginástica", desc: "Expressão corporal, jazz e aeróbica", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
];

const units = [
  { n: "CorpoeArte Centro", a: "Rua das Flores, 120 — Centro" },
  { n: "CorpoeArte Jardins", a: "Av. Brasil, 850 — Jardins" },
  { n: "CorpoeArte Norte", a: "Rua do Sol, 45 — Zona Norte" },
];

const storeProducts = [
  { id: 1, name: "Whey Protein Isolado 900g", category: "Suplemento", price: "149,90", img: "https://images.unsplash.com/photo-1579722820308-d74e57170ca9?auto=format&fit=crop&w=600&q=80", desc: "Proteína de alta pureza para ganho de massa muscular e recuperação." },
  { id: 2, name: "Squeeze Térmico Aço Inox 750ml", category: "Acessório", price: "59,90", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80", desc: "Mantém sua água gelada durante todo o treino pesado." },
  { id: 3, name: "Camisa Oversized Dry-Fit", category: "Vestuário", price: "79,90", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", desc: "Tecido respirável de alta performance e máximo conforto." },
  { id: 4, name: "Calça Jogger / Legging Fitness Pro", category: "Vestuário", price: "119,90", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80", desc: "Flexibilidade total e toque suave para agachamentos perfeitos." },
  { id: 5, name: "Tênis de Treino Cross-Lift", category: "Calçado", price: "299,90", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", desc: "Solado plano e estabilidade extrema para musculação e levantamento." },
  { id: 6, name: "Luva de Musculação com Munhequeira", category: "Acessório", price: "49,90", img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80", desc: "Proteção avançada para as mãos e firmeza na pegada da barra." },
  { id: 7, name: "Corda de Pular de Alta Velocidade", category: "Cardio", price: "39,90", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80", desc: "Rolamento blindado para saltos rápidos e treino aeróbico eficiente." },
  { id: 8, name: "Kit Elásticos Extensores / Pilates", category: "Acessório", price: "69,90", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", desc: "Diferentes níveis de resistência para treinos funcionais e em casa." },
  { id: 9, name: "Shorts de Compressão Masculino/Feminino", category: "Vestuário", price: "69,90", img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=600&q=80", desc: "Sustentação muscular e liberdade de movimento impecável." },
  { id: 10, name: "Smartwatch Esportivo Fitness Tracker", category: "Tecnologia", price: "199,90", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", desc: "Monitoramento cardíaco, passos, calorias e modos de treino." },
  { id: 11, name: "Creatina Monohidratada 300g", category: "Suplemento", price: "89,90", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", desc: "Aumento de força, explosão muscular e volumização celular." },
  { id: 12, name: "Coqueteleira 3 Compartimentos", category: "Acessório", price: "34,90", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80", desc: "Praticidade para levar seu pré-treino, pós-treino e cápsulas." }
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src="/uploads/1794117136891-0-images-10-.jpg" alt="Corpo e Arte Logo" className="h-18 w-18 rounded-full object-cover border border-primary/40 shadow-md" />
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-wide leading-none">CORPO<span className="text-primary">E</span>ARTE</span>
              <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mt-0.5">Academia Fitness</span>
            </div>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#planos" className="hover:text-primary">Planos</a>
            <a href="#modalidades" className="hover:text-primary">Modalidades</a>
            <a href="#loja" className="hover:text-primary">Nossa Loja</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#loja" className="relative group rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20 shadow-[0_0_15px_rgba(239,68,68,0.2)] flex items-center gap-1.5">
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Nossa Loja
            </a>
            <a href="#planos" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90">Matricule-se</a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]} className="w-full h-full">
            <CarouselContent className="h-[90vh] ml-0">
              {proAthletes.slice(0, 8).map((athlete, index) => (
                <CarouselItem key={index} className="relative h-full w-full pl-0">
                  <img src={athlete.img} alt={athlete.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0">
                    <div className="mx-auto w-full max-w-6xl px-5 pb-20">
                      <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-3 backdrop-blur-md">
                        {athlete.role}
                      </span>
                      <h1 className="font-display text-6xl leading-none md:text-8xl">
                        {athlete.name}
                      </h1>
                      <p className="mt-3 max-w-md text-lg text-muted-foreground">
                        {athlete.desc}
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <a href="#planos" className="inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground">
                          Ver planos
                        </a>
                        <a href="#modalidades" className="inline-block rounded-full border border-border bg-card/60 backdrop-blur px-8 py-4 font-semibold text-foreground hover:border-primary">
                          Nossas modalidades
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-6 bg-background/80 hover:bg-background text-foreground border-border" />
              <CarouselNext className="right-6 bg-background/80 hover:bg-background text-foreground border-border" />
            </div>
          </Carousel>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="font-display text-5xl">CONHEÇA NOSSOS <span className="text-primary">PLANOS</span></h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Compare e escolha o plano com o melhor custo-benefício para os seus objetivos.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`flex flex-col items-center text-center rounded-2xl border p-8 ${p.featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card"}`}>
              {p.featured && <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">MAIS ESCOLHIDO</span>}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground">A partir de</p>
              <p className="font-display text-5xl text-primary">R$ {p.price}</p>
              <p className="text-sm text-muted-foreground">{p.note}</p>
              <ul className="my-8 flex-1 space-y-3 text-sm w-full">
                {p.items.map((i) => <li key={i} className="flex items-center justify-center gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{i}</li>)}
              </ul>
              <a href="#unidades" className={`w-full rounded-full py-3 text-center font-semibold ${p.featured ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"}`}>Matricule-se!</a>
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

      <section id="loja" className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-3">EQUIPAMENTOS & SUPLEMENTOS</span>
          <h2 className="font-display text-5xl">NOSSA <span className="text-primary">LOJA</span></h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
            Tudo o que você precisa para elevar o nível dos seus treinos de musculação, performance e recuperação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {storeProducts.map((prod) => (
            <div key={prod.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:border-primary/50">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={prod.img} alt={prod.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-1">{prod.category}</span>
                <h3 className="font-semibold text-foreground text-base leading-tight line-clamp-1">{prod.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2 flex-1">{prod.desc}</p>
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/60">
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Preço</span>
                    <span className="font-display text-xl text-primary">R$ {prod.price}</span>
                  </div>
                  <button onClick={() => alert(`Produto "${prod.name}" adicionado ao carrinho! Dirija-se à recepção da academia para retirar.`)} className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow transition-opacity hover:opacity-90">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
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

      <section className="bg-secondary/50 py-24 border-y border-border">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Galeria Randômica</p>
              <h2 className="font-display text-5xl">PROFISSIONAIS <span className="text-primary">& ATLETAS</span></h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mt-4 md:mt-0">Conheça nossos especialistas em fisiculturismo, musculação, ciclismo, levantamento de peso e dança.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...proAthletes].sort(() => Math.random() - 0.5).map((p, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:border-primary/50">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 p-5 w-full">
                  <span className="inline-block rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-semibold text-primary mb-2">{p.role}</span>
                  <h3 className="font-display text-2xl leading-none text-foreground">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
          <div className="flex items-center gap-3">
            <img src="/uploads/1794117136891-0-images-10-.jpg" alt="Corpo e Arte Logo" className="h-15 w-15 rounded-full object-cover border border-primary/30" />
            <div className="flex flex-col">
              <span className="font-display text-lg text-foreground leading-none">CORPO<span className="text-primary">E</span>ARTE</span>
              <span className="text-[9px] uppercase font-semibold text-muted-foreground tracking-wider mt-0.5">Academia Fitness</span>
            </div>
          </div>
          <div className="flex gap-6"><span className="flex items-center gap-2"><Phone className="h-4 w-4" />(00) 0000-0000</span><span className="flex items-center gap-2"><Instagram className="h-4 w-4" />@corpoearte</span></div>
          <span>© 2026 CorpoeArte Academia</span>
        </div>
      </footer>
    </div>
  );
}
