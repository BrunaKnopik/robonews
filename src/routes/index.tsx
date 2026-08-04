import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/robonews-logo.png";
import logoRoboteasy from "@/assets/logo-roboteasy.png";
import alemaoVini from "@/assets/alemao-vini.jpg";
import theoVini from "@/assets/theo-vini.jpg";
import ludyVini from "@/assets/ludy-vini.jpg";
import odinHelio from "@/assets/odin-helio.jpg";
import peraltaHelio from "@/assets/peralta-helio.jpg";
import perolaDaniel1 from "@/assets/perola-2-daniel.jpg";
import perolaDaniel2 from "@/assets/perola-1-daniel.jpeg";
import perolaDaniel3 from "@/assets/perola-3-daniel.jpeg";
import brisaAdriano from "@/assets/brisa-adriano.jpg";
import jacobAdriano from "@/assets/jacob-adriano.jpg";
import lunaAdriano from "@/assets/luna-adriano.jpg";
import tootElaine from "@/assets/toot-elaine.jpeg";
import snoopyElaine from "@/assets/snoopy-elaine.jpeg";
import marvinBruna from "@/assets/marvin-bruna.jpg";
import speedBruna from "@/assets/speed-bruna.jpg";
import ravennaBruna from "@/assets/ravenna-bruna.jpg";
import dominicBruna from "@/assets/dominic-bruna.jpg";
import bolotaBruna from "@/assets/bolota-bruna.jpg";
import gayaMari from "@/assets/gaya-mari.jpg";
import banguela1Ana from "@/assets/banguela-1-ana.jpeg";
import banguela2Ana from "@/assets/banguela-2-ana.jpeg";
import gamora1CamilaRafa from "@/assets/gamora-1-camila-rafa.jpg";
import gamora2CamilaRafa from "@/assets/gamora-2-camila-rafa.jpg";
import ottoEGamoraCamilaRafa from "@/assets/otto-e-gamora-camila-rafa.jpg";
import linlin1Polini from "@/assets/linlin-1-polini.jpeg";
import linlin2Polini from "@/assets/linlin-2-polini.jpeg";
import {
  PawPrint,
  Camera,
  Crown,
  Sparkles,
  Heart,
  Eye,
  Moon,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "robonews especial · Desfile Pet 🐾 | Edição #111" },
      {
        name: "description",
        content:
          "Edição especial do Robonews dedicada aos pets do time da Roboteasy: o elenco e os prêmios do Desfile Pet.",
      },
    ],
  }),
  component: Index,
});

const tickerItems = [
  "Edição #111 · Especial",
  "🐾 Desfile Pet",
  "04 Ago 2026",
  "💙 Prepare o coração",
];

const bynumbers = [
  { value: "21+", label: "Pets no elenco" },
  { value: "10", label: "Famílias representadas" },
  { value: "100%", label: "Nível de fofura" },
];

const coverLines = [
  { emoji: "👑", text: "Ludy: a rainha do desfile (segundo ela mesma)", href: "#elenco" },
  { emoji: "👀", text: "Pérola, a fofoqueira oficial que vê tudo pela janela", href: "#elenco" },
  { emoji: "🏆", text: "Prêmios: as categorias e os favoritos do time", href: "#premios" },
];

const toc = [
  { n: "01", label: "Editorial", href: "#editorial" },
  { n: "02", label: "O Elenco", href: "#elenco" },
  { n: "03", label: "Prêmios Desfile Pet", href: "#premios" },
];

type Pet = {
  photo: string;
  name: string;
  role: string;
  tag: string;
  aspect: string;
  story: string;
  gallery?: string[];
  objectPosition?: string;
};

type PetFamily = {
  family: string;
  kicker: string;
  intro: string;
  pets: Pet[];
};

const petFamilies: PetFamily[] = [
  {
    family: "A família felina do Vini",
    kicker: "🐱 Time da casa do Vini",
    intro: "Vini provou que existe, sim, espaço para muito amor felino.",
    pets: [
      {
        photo: alemaoVini,
        name: "Alemão",
        role: "O gigante da casa.",
        tag: "🐈 Presença gigante",
        aspect: "aspect-[3/4]",
        story:
          'A principal curiosidade sobre ele é bem simples: ele é imenso. Daqueles gatos que fazem qualquer visita perguntar "isso é um gato mesmo?" 😄',
      },
      {
        photo: theoVini,
        name: "Theo",
        role: "O parceiro oficial.",
        tag: "🐈 Companheiro inseparável",
        aspect: "aspect-[3/4]",
        story: "Sempre por perto, Theo faz jus ao título de companheiro inseparável.",
      },
      {
        photo: ludyVini,
        name: "Ludy",
        role: "A realeza da casa.",
        tag: "👑 Realeza felina",
        aspect: "aspect-video",
        story:
          "Se tivesse uma monarquia entre os gatos, ela provavelmente ocuparia o trono. E se fosse pra resumir a vibe da Ludy, a gente diria: ✨ Deusa. ✨ Rainha. ✨ Aura.",
      },
    ],
  },
  {
    family: "Os companheiros do Hélio",
    kicker: "🐱 Time da casa do Hélio",
    intro: "",
    pets: [
      {
        photo: odinHelio,
        name: "DinDin (Odin)",
        role: "O convidado especial de toda call.",
        tag: "🎥 Estrela das videochamadas",
        aspect: "aspect-[3/4]",
        story:
          "Seu nome oficial é Odin. Mas, como todo bom membro da família, ganhou um apelido carinhoso e virou DinDin. Quem já participou de alguma call com o Hélio provavelmente também já participou de uma call com o DinDin. Ele passa boa parte do expediente fazendo companhia ao notebook e garantindo que o home office nunca seja solitário.",
      },
      {
        photo: peraltaHelio,
        name: "Pepê (Peralta)",
        role: "O melhor amigo da família.",
        tag: "🍈 Fã de frutas",
        aspect: "aspect-[3/4]",
        story:
          "Pepê é praticamente o melhor amigo da filha do Hélio. Passa boa parte do tempo deitado na cama assistindo televisão ao lado dela e ainda surpreende por outro motivo... É um apaixonado por frutas. Mamão? Sim. Melão? Também. O Robonews ainda está processando essa informação.",
      },
    ],
  },
  {
    family: "A vigilância oficial do Daniel",
    kicker: "🐶 Segurança da casa do Daniel",
    intro: "",
    pets: [
      {
        photo: perolaDaniel1,
        gallery: [perolaDaniel2, perolaDaniel3],
        name: "Pérola",
        role: "A observadora oficial (apelido: Fofoqueira 👀).",
        tag: "👀 Fofoqueira oficial",
        aspect: "aspect-[3/4]",
        story:
          "Passa boa parte do dia observando absolutamente tudo o que acontece na rua. Como se isso não bastasse, ela aparentemente ainda acredita ser um gato (ou talvez uma galinha), já que vive em cima de mesas e móveis da casa.",
      },
    ],
  },
  {
    family: "O trio do Adriano",
    kicker: "🐶 O trio do Adriano",
    intro: "",
    pets: [
      {
        photo: brisaAdriano,
        name: "Brisa",
        role: "A veterana.",
        tag: "🌪️ A veterana",
        aspect: "aspect-[3/4]",
        story:
          "Já viu de tudo. Dorme em qualquer lugar com a autoridade de quem sabe exatamente quem manda na casa.",
      },
      {
        photo: jacobAdriano,
        name: "Jacob",
        role: "A bola de pelos rabugenta.",
        tag: "😒 Bola de pelos",
        aspect: "aspect-[3/4]",
        story:
          "Uma verdadeira bola de pelos. Fofíssimo nas fotos e rabugento na vida real. Sorri apenas quando considera necessário.",
      },
      {
        photo: lunaAdriano,
        name: "Luna",
        role: "O equilíbrio da casa.",
        tag: "🤍 O equilíbrio",
        aspect: "aspect-[3/4]",
        story:
          "Enquanto Brisa organiza a hierarquia e Jacob reclama da existência, Luna distribui carinho e tranquilidade para todo mundo.",
      },
    ],
  },
  {
    family: "Os companheiros da Elaine",
    kicker: "🐾 Time da casa da Elaine",
    intro: "",
    pets: [
      {
        photo: tootElaine,
        name: "Toot",
        role: "O veterano da turma.",
        tag: "🐾 16 anos de história",
        aspect: "aspect-[3/4]",
        story: "Com 16 anos de muitas histórias, continua sendo o grande companheiro da Elaine.",
      },
      {
        photo: snoopyElaine,
        name: "Snoopy",
        role: "A energia da casa.",
        tag: "⚡ Energia pura",
        aspect: "aspect-[3/4]",
        story:
          "Já o Snoopy é o responsável pela energia da casa. Com 10 anos, continua aprontando como se ainda fosse filhote.",
      },
    ],
  },
  {
    family: "A tropa da Bruna",
    kicker: "🐱 Time da casa da Bruna",
    intro: "A Bruna praticamente administra um condomínio felino 😄",
    pets: [
      {
        photo: marvinBruna,
        name: "Marvin",
        role: "O mais desconfiado da Terra.",
        tag: "🕵️ Desconfiado profissional",
        aspect: "aspect-[3/4]",
        story:
          "Marrom, elegante e desconfiado de absolutamente tudo, inclusive de você. Adora aparecer no meio das reuniões, como se tivesse pauta própria, mas colo é onde ele traça a linha: nem pensar.",
      },
      {
        photo: speedBruna,
        name: "Speed",
        role: "O nome é ironia pura.",
        tag: "🐱 Gordinho e temperamental",
        aspect: "aspect-[3/4]",
        story:
          "Cinzento, gordinho e com um temperamento à altura do peso. A velocidade ficou só no nome. Hoje o esporte favorito é discordar de tudo com o olhar.",
      },
      {
        photo: ravennaBruna,
        name: "Ravenna",
        role: "A bruxinha da casa.",
        tag: "🔮 Bruxinha oficial",
        aspect: "aspect-[3/4]",
        story:
          "Apelidada de Bruxinha, vive de cara fechada e não é força de expressão: ela é a dona do pedaço. Todo mundo em casa tem um certo receio dela... e, sinceramente, com toda razão.",
      },
      {
        photo: dominicBruna,
        name: "Dominic",
        role: "O rei do drama (e do colo).",
        tag: "🎭 Rei do drama",
        aspect: "aspect-[3/4]",
        story:
          "Também conhecido como Bolinha, é carinhoso até demais. Só quer colo, escalar tudo o que encontra pela frente e uma dose diária de amor. Sem isso, prepare-se para o drama.",
      },
      {
        photo: bolotaBruna,
        name: "Bolota",
        role: "Tamanho de filhote, personalidade de esquilo.",
        tag: "🐿️ Comportamento de esquilo",
        aspect: "aspect-[3/4]",
        objectPosition: "object-top",
        story:
          "Com 3 aninhos e apenas 1,100kg, ainda parece um filhote, e talvez nunca deixe de ser. É friorenta, vive grudada no Dominic e tem lá seus ares de esquilo: elétrica, curiosa e sempre em movimento.",
      },
    ],
  },
  {
    family: "Gaya, a diva da Mari",
    kicker: "👑 Time da casa da Mari",
    intro: "",
    pets: [
      {
        photo: gayaMari,
        name: "Gaya",
        role: "A diva nata.",
        tag: "👑 Diva nata",
        aspect: "aspect-[3/4]",
        story:
          "A Gaya tem esse olhar marcante e a famosa aura. Segundo a Mari, uma das melhores sensações do mundo: apertar a Gaya de tanto amor. E sinceramente... depois dessas fotos, a gente entende perfeitamente.",
      },
    ],
  },
  {
    family: "Banguela, o dragão da Ana",
    kicker: "🐉 Time da casa da Ana",
    intro: "",
    pets: [
      {
        photo: banguela1Ana,
        gallery: [banguela2Ana],
        name: "Banguela",
        role: "O dragão mais carinhoso da casa.",
        tag: "🐉 Inspirado no filme",
        aspect: "aspect-[3/4]",
        story:
          "Inspirado no dragão de Como Treinar o Seu Dragão, Banguela honra o nome. É brincalhão, cheio de energia e extremamente carinhoso. Daqueles cães que fazem qualquer visita esquecer completamente o motivo de ter ido até a casa, pois ele vira protagonista da visita.",
      },
    ],
  },
  {
    family: "Os supergêmeos da Camila e do Rafa",
    kicker: "🐱 Time da casa da Camila e do Rafa",
    intro: "",
    pets: [
      {
        photo: ottoEGamoraCamilaRafa,
        gallery: [gamora1CamilaRafa, gamora2CamilaRafa],
        name: "Gamora & Otto",
        role: "A dupla inseparável.",
        tag: "🐱 Dupla inseparável",
        aspect: "aspect-[4/5]",
        story:
          "Fofos, curiosos, arteiros e especialistas em transformar qualquer canto da casa em um parque de diversões.",
      },
    ],
  },
  {
    family: "Linlin, a recepcionista oficial do Polini",
    kicker: "🐾 Time da casa do Polini",
    intro: "",
    pets: [
      {
        photo: linlin1Polini,
        gallery: [linlin2Polini],
        name: "Linlin",
        role: "A recepcionista oficial.",
        tag: "🔔 Fiscal do expediente",
        aspect: "aspect-[3/4]",
        story:
          "Uma shih-tzu de quase 4 anos que leva muito a sério o papel de recepcionista da casa. Toda visita é recebida com lambidas no rosto (e, se deixar, na orelha também 😄), sempre pede ajuda para subir e descer da cama e, todas as manhãs, faz questão de conferir se o Polini ainda está em casa. Uma verdadeira fiscal do expediente! 🐾💙",
      },
    ],
  },
];

const awards = [
  {
    icon: Crown,
    category: "Rei/Rainha do Home Office",
    winner: "Ludy",
    blurb: "Se existisse uma monarquia entre os gatos, ela ocuparia o trono sem disputa.",
  },
  {
    icon: Camera,
    category: "Mais Flagrado(a) em Reunião",
    winner: "DinDin (Odin)",
    blurb: "Quem já teve call com o Hélio provavelmente já teve call com ele também.",
  },
  {
    icon: Heart,
    category: "Parceiro(a) Oficial",
    winner: "Theo",
    blurb: "Sempre por perto, faz jus ao título com honras.",
  },
  {
    icon: Sparkles,
    category: "Personalidade Mais Surpreendente",
    winner: "Pepê (Peralta)",
    blurb:
      "Assiste TV deitado na cama e é apaixonado por frutas. O Robonews ainda processa essa informação.",
  },
  {
    icon: PawPrint,
    category: "Maior Presença da Casa",
    winner: "Alemão",
    blurb: 'Daqueles gatos que fazem qualquer visita perguntar "isso é um gato mesmo?"',
  },
  {
    icon: Eye,
    category: "Mais Observador(a) do Bairro",
    winner: "Pérola",
    blurb: "Nada que acontece na rua escapa. Reportagem ao vivo, 24 horas por dia.",
  },
  {
    icon: Moon,
    category: "Sono Mais Sagrado",
    winner: "Brisa",
    blurb: "Dorme em qualquer lugar com a autoridade de quem sabe quem manda na casa.",
  },
  {
    icon: Clock,
    category: "Veterano(a) Mais Querido(a)",
    winner: "Toot",
    blurb: "16 anos de histórias e ainda o grande parceiro de todas as horas.",
  },
  {
    icon: Sparkles,
    category: "Dupla Mais Inseparável",
    winner: "Gamora & Otto",
    blurb: "Onde tem um, tem o outro. Duas bagunças, um coração só.",
  },
];

function PetGallery({ pet }: { pet: Pet }) {
  if (!pet.gallery) return null;
  return (
    <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
      {pet.gallery.map((g, gi) => (
        <img
          key={gi}
          src={g}
          alt={`${pet.name}, mais um flagra`}
          className="aspect-square w-full object-cover rounded-xl border-2 border-foreground/10"
        />
      ))}
    </div>
  );
}

function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop bg-card">
      <img
        src={pet.photo}
        alt={pet.name}
        className={`${pet.aspect} w-full object-cover ${pet.objectPosition ?? ""}`}
      />
      <div className="p-6 space-y-2">
        <div className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
          {pet.tag}
        </div>
        <h4 className="text-2xl font-bold pt-1">{pet.name}</h4>
        <p className="text-sm font-semibold text-pink">{pet.role}</p>
        <p className="text-base leading-relaxed pt-1">{pet.story}</p>
        <PetGallery pet={pet} />
      </div>
    </div>
  );
}

function PetFeature({ pet }: { pet: Pet }) {
  const photos = [pet.photo, ...(pet.gallery ?? [])];

  return (
    <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop bg-card p-8">
      <div
        className="grid gap-4 mb-6"
        style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))` }}
      >
        {photos.map((src, i) => (
          <div
            key={i}
            className="border-2 border-foreground rounded-2xl overflow-hidden shadow-pop bg-foreground/5 aspect-square"
          >
            <img src={src} alt={pet.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
          {pet.tag}
        </div>
        <h4 className="text-3xl font-bold">{pet.name}</h4>
        <p className="text-sm font-semibold text-pink">{pet.role}</p>
        <p className="text-base leading-relaxed">{pet.story}</p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      {/* TOP TICKER */}
      <div className="border-b-2 border-foreground bg-foreground text-background overflow-hidden">
        <div className="flex whitespace-nowrap ticker py-2 text-xs font-semibold uppercase tracking-widest">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="px-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink blink" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* MASTHEAD / NAV */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Robonews" className="h-10 md:h-12" />
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-pink text-pink-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest -rotate-3 shadow-pop">
            <PawPrint className="w-3.5 h-3.5" /> Especial
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#capa" className="hover:text-pink transition">
            Capa
          </a>
          <a href="#elenco" className="hover:text-pink transition">
            Elenco
          </a>
          <a href="#premios" className="hover:text-pink transition">
            Prêmios
          </a>
        </nav>
        <a
          href="#capa"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink transition"
        >
          Ler edição <ArrowRight className="w-4 h-4" />
        </a>
      </header>

      {/* COVER */}
      <section id="capa" className="container mx-auto px-6 pt-6 pb-16">
        {/* Faixa de identificação, estilo capa de revista */}
        <div className="border-t-2 border-b-2 border-foreground flex flex-wrap items-center justify-between gap-2 py-3 mb-10 text-xs font-bold uppercase tracking-widest">
          <span>Nº 111 · Edição Especial</span>
          <span className="text-pink">Distribuição Interna · Roboteasy</span>
          <span>Preço: seu carinho 💙</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            🐶 Robonews Especial
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.87] mb-6">
            Desfile <span className="text-pink italic">Pet</span> 🐾
          </h1>
          <p className="text-xl md:text-2xl leading-snug font-semibold mb-8">
            Eles podem até não bater ponto... mas já conquistaram oficialmente o nosso coração.
          </p>

          {/* Chamadas de capa */}
          <ul className="space-y-3 mb-10">
            {coverLines.map((c, i) => (
              <li key={i}>
                <a
                  href={c.href}
                  className="flex items-center gap-3 text-base md:text-lg font-semibold hover:text-pink transition group"
                >
                  <span className="text-xl leading-none">{c.emoji}</span>
                  <span className="border-b-2 border-transparent group-hover:border-pink">
                    {c.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Por números */}
          <div className="grid grid-cols-3 gap-4">
            {bynumbers.map((b, i) => (
              <div
                key={i}
                className="border-2 border-foreground rounded-2xl p-4 text-center shadow-pop bg-card"
              >
                <div className="text-3xl font-bold text-pink font-display">{b.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mt-1">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NESTA EDIÇÃO · sumário */}
      <div className="border-y-2 border-foreground bg-foreground text-background overflow-x-auto">
        <div className="container mx-auto px-6 py-4 flex items-center gap-8 min-w-max text-sm font-semibold uppercase tracking-widest">
          <span className="text-pink">Nesta edição</span>
          {toc.map((t, i) => (
            <a key={i} href={t.href} className="flex items-center gap-2 hover:text-pink transition">
              <span className="opacity-50">{t.n}</span> {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* EDITORIAL */}
      <section id="editorial" className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-teal/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          ✍️ Editorial
        </div>

        <p className="text-lg leading-relaxed mb-6">
          <span className="float-left text-7xl font-bold leading-[0.75] pr-3 pt-1 font-display text-pink">
            C
          </span>
          hegou uma das edições mais aguardadas do ano (e provavelmente a mais fofa também).
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Depois de muitos pedidos, registros e incontáveis fotos no Teams, o Robonews resolveu
          abrir espaço para quem acompanha nossas reuniões, invade chamadas de vídeo, rouba a
          cadeira do home office e faz companhia durante os dias de trabalho.
        </p>

        <blockquote className="border-l-4 border-pink pl-6 py-2 my-10 text-2xl md:text-3xl font-display italic leading-snug">
          "Hoje os protagonistas não somos nós, são eles: os Pets do time."
        </blockquote>

        <p className="text-lg leading-relaxed mb-2">
          É hora de conhecer os parceiros de jornada da Roboteasy. 💙
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Prepare o coração, porque o nível de fofura está oficialmente acima do recomendado.
        </p>
      </section>

      {/* O ELENCO */}
      <section id="elenco" className="bg-teal/15 py-16">
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-foreground pt-4 pb-6">
            <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              🐾 Quem é quem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">O Elenco</h2>
          </div>
          <p className="text-muted-foreground text-base mb-12 max-w-xl leading-relaxed">
            Cada um com seu jeito, sua bagunça e seu talento especial para roubar a cena em plena
            reunião de alinhamento.
          </p>

          <div className="space-y-16">
            {petFamilies.map((fam, fi) => (
              <div key={fi}>
                <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                  {fam.kicker}
                </div>
                <h3 className="text-3xl font-bold mb-2">{fam.family}</h3>
                {fam.intro && (
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    {fam.intro}
                  </p>
                )}

                {fam.pets.length === 1 ? (
                  <div className="mt-6">
                    <PetFeature pet={fam.pets[0]} />
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {fam.pets.map((p, i) => (
                      <PetCard key={i} pet={p} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÊMIOS DESFILE PET */}
      <section id="premios" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-background/20 pt-4 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold">🏆 Prêmios Desfile Pet</h2>
          </div>
          <p className="text-background/70 text-lg leading-relaxed mb-10 max-w-2xl">
            Sem nenhuma imparcialidade, a redação do Robonews já escolheu os favoritos da temporada.
            Confira as categorias e prepare-se pra discordar de pelo menos uma. 😄
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <div
                key={i}
                className="bg-background text-foreground border-2 border-background/10 rounded-3xl shadow-pop p-8 space-y-3"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  <a.icon className="w-3.5 h-3.5" /> {a.category}
                </div>
                <p className="text-2xl font-bold">
                  <span className="text-pink">{a.winner}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-pink/10 py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-pink/20 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            💙 Até a próxima
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Até o próximo Desfile Pet!</h2>
          <p className="text-lg leading-relaxed mb-4">
            Se tem uma coisa que essa edição mostrou é que a Roboteasy realmente está muito bem
            acompanhada.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Entre latidos, ronronados, escaladas em móveis, frutas roubadas e aparições inesperadas
            nas reuniões, nossos pets deixam os dias mais leves, divertidos e cheios de boas
            histórias.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Obrigado a todo mundo que compartilhou um pedacinho da sua família com a gente.
          </p>
          <p className="text-lg font-bold">
            Nos vemos no próximo Desfile Pet... e já podem ir preparando as próximas fotos, porque a
            concorrência promete ser ainda mais fofa. 🐾💙
          </p>
        </div>
      </section>

      {/* FOOTER · ficha técnica */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-12">
          <div className="border-t border-background/10 pt-6 pb-8 grid sm:grid-cols-3 gap-4 text-center sm:text-left text-xs text-background/60">
            <div>
              <div className="font-bold uppercase tracking-widest text-background/80 mb-1">
                Redação
              </div>
              Time de Marketing Roboteasy
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest text-background/80 mb-1">
                Fotografia
              </div>
              O time todo 📸
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest text-background/80 mb-1">
                Edição
              </div>
              Nº 111 · Especial Desfile Pet
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-background/10 pt-8">
            <img
              src={logoRoboteasy}
              alt="Roboteasy"
              className="h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            <div className="flex flex-col items-center gap-1 text-sm text-background/60 text-center">
              <span>robonews · comunicação interna · feito com 💗 pelo time</span>
            </div>

            <a
              href="mailto:marketing@roboteasy.com.br"
              className="text-sm text-background/60 hover:text-background transition"
            >
              marketing@roboteasy.com.br
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
