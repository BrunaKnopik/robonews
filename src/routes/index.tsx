import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/robonews-logo.png";
import logoRoboteasy from "@/assets/logo-roboteasy.png";
import recadinhosLogo from "@/assets/recadinhos-paroquiais.png";
import coisasParaFazer from "@/assets/coisas-para-fazer.webp";
import timeDeMkt from "@/assets/time-de-mkt.png";
import ficaDica from "@/assets/fica-a-dica.png";
import ficaDicaIcon from "@/assets/fica-a-dica-icon.png";
import fromSerie from "@/assets/from-serie.png";
import orgulhoFirma from "@/assets/orgulho-da-firma.png";
import orgulhoIcon from "@/assets/orgulho-da-firma-icon.png";
import orgulhoGif from "@/assets/orgulho.gif";
import fofocaGif from "@/assets/fofoca.gif";
import intrigasImg from "@/assets/intrigas.jpeg";
import higorMantoImg from "@/assets/higor-manto-brasil.png";
import atumDiogoImg from "@/assets/atum-do-diogo.jpeg";
import fotoIigor from "@/assets/iigor.png";
import camilaPlaylistImg from "@/assets/camila-playlist.png";
import timeDeVerdeImg from "@/assets/time-de-verde.png";
import fotoPaulo from "@/assets/paulo.png";
import fotoLeticia from "@/assets/leticia.png";
import fotoPolini from "@/assets/polini.png";
import fotoJasper from "@/assets/jasper.png";
import timeAcademiaImg from "@/assets/time-na-academia.png";
import fotoAna from "@/assets/ana.png";
import robotversarioMarco from "@/assets/ROBOTVERSARIO_09-06_MARCO.png";
import canecas from "@/assets/canecas.jpeg";
import canecasDoTime from "@/assets/canecas-do-time.png";
import englishBreak from "@/assets/english-break-primeiro-encontro.jpeg";
import rankingImg from "@/assets/ranking.png";
import ansiosoGif from "@/assets/ansioso.gif";
import { Megaphone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "robonews — comunicação interna" },
      { name: "description", content: "A newsletter interna da Robo. Notícias, gente, cultura e vibe — tudo em um lugar." },
    ],
  }),
  component: Index,
});

const editions = ["Edição #108 – Especial Copa ⚽", "19 Jun 2026", "Tempo de leitura: 5 min", "🇧🇷 Veste a camiseta!"];



function Index() {


  return (
    <main className="min-h-screen">
      {/* TOP TICKER */}
      <div className="border-b-2 border-foreground bg-foreground text-background overflow-hidden">
        <div className="flex whitespace-nowrap ticker py-2 text-xs font-semibold uppercase tracking-widest">
          {[...editions, ...editions, ...editions].map((t, i) => (
            <span key={i} className="px-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink blink" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <img src={logo} alt="Robonews" className="h-10 md:h-12" />
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#destaque" className="hover:text-pink transition">Destaque</a>
          <a href="#midia" className="hover:text-pink transition">Mídia</a>
          <a href="#gente" className="hover:text-pink transition">Gente</a>
          <a href="#agenda" className="hover:text-pink transition">Agenda</a>
        </nav>
        <a href="#destaque" className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink transition">
          Ler edição <ArrowRight className="w-4 h-4" />
        </a>
      </header>

      {/* HERO */}
      <section id="destaque" className="container mx-auto px-6 pt-8 pb-12">
        {/* Barra de meta */}
        <div className="border-t-2 border-foreground flex items-center justify-between pt-4 pb-6">
          <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Megaphone className="w-3.5 h-3.5" /> Manchete da semana
          </div>
          <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Edição #108 · 19 Jun 2026 · Especial Copa ⚽
          </span>
        </div>

        {/* Manchete principal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.87] mb-6">
          A <span className="text-green-600">Copa do Mundo</span> chegou e o Robonews entrou em <span className="italic text-yellow-500">modo</span> <span className="whitespace-nowrap">seleção. <span className="text-5xl md:text-6xl align-middle">⚽</span></span>
        </h1>

        {/* Intro Copa */}
        <div className="mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-600/10 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            🇧🇷 A Copa finalmente chegou!
          </div>
          <p className="text-lg leading-relaxed">
            Depois de meses de expectativa, álbuns de figurinhas, palpites otimistas, palpites nem tão otimistas assim e muitas discussões esportivas, ela finalmente começou: a Copa do Mundo chegou! ⚽
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            E como vocês já devem imaginar, essa edição do Robonews entrou oficialmente em modo Copa.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Por aqui teremos de tudo um pouco: ranking do bolão, entrevistas exclusivas com os líderes da classificação, comentaristas esportivos de ocasião, flagras temáticos, correio elegante e, claro, todas aquelas histórias que só acontecem na Roboteasy.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Então já prepara a camisa da seleção, pega uma paçoquinha, faz sua aposta para a próxima rodada e vem conferir tudo o que rolou nas últimas semanas 👇
          </p>
        </div>
      </section>

      {/* CURIOSIDADES DA COPA */}
      <section className="container mx-auto px-6 py-12">
        <div className="border-t-2 border-foreground pt-4 pb-8">
          <div className="inline-flex items-center gap-2 bg-green-600/10 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            🌎 Curiosidades da Copa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            E falando em Copa, nem só de palpites vive um torcedor…
          </h2>
          <p className="text-muted-foreground text-base mt-3">
            A edição de hoje traz algumas curiosidades incríveis sobre a Copa do Mundo! ⚽
          </p>
        </div>

        <div className="space-y-6">

          {/* Quem mais venceu */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-green-50">
            <div className="p-8 space-y-5">
              <div className="inline-flex items-center gap-2 bg-green-600/15 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🏆 Quem mais venceu Copas do Mundo?
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                O Brasil segue soberano no topo da lista com 5 títulos mundiais:
              </p>
              <div className="space-y-3">
                {[
                  { code: "br", country: "Brasil", titles: "5 títulos", highlight: true },
                  { code: "de", country: "Alemanha", titles: "4 títulos", highlight: false },
                  { code: "it", country: "Itália", titles: "4 títulos", highlight: false },
                  { code: "ar", country: "Argentina", titles: "3 títulos", highlight: false },
                  { code: "fr", country: "França", titles: "2 títulos", highlight: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border-2 ${item.highlight ? "bg-green-600 text-white border-green-700" : "bg-background border-foreground/10"}`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w40/${item.code}.png`}
                        alt={item.country}
                        className="w-8 h-5 object-cover rounded-sm shadow-sm"
                      />
                      <span className={`font-bold text-base ${item.highlight ? "text-white" : ""}`}>{item.country}</span>
                    </div>
                    <span className={`text-sm font-semibold ${item.highlight ? "text-white/90" : "text-muted-foreground"}`}>{item.titles}</span>
                  </div>
                ))}
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ou seja: mesmo quando a ansiedade bate, ainda temos uma estrela a mais para exibir 😎⭐
              </p>
            </div>
          </div>

          {/* Mais gols */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden">
            <div className="grid md:grid-cols-[1fr_auto] gap-0">
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  ⚽ O jogo com mais gols da história das Copas
                </div>
                <p className="text-base leading-relaxed">
                  A partida entre <strong>Áustria e Suíça</strong>, em 1954, terminou em incríveis <span className="font-bold text-green-600 text-xl">7 × 5</span>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Foram 12 gols em um único jogo. Inacreditável!
                </p>
                <p className="text-base leading-relaxed">
                  Mas cá entre nós, o que seria bem plausível — e a gente acharia revigorante — era um placar de <strong>7 para o Brasil</strong> e 1 para a Alemanha 😄
                </p>
              </div>
              <div className="flex items-center justify-center bg-yellow-400/10 px-10 py-8 border-l-2 border-foreground">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-green-600">7</span>
                    <span className="text-3xl font-semibold text-muted-foreground">×</span>
                    <span className="text-6xl font-bold text-foreground/40">5</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">1954</div>
                </div>
              </div>
            </div>
          </div>

          {/* Curiosidade bônus */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-foreground text-background">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-background/15 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🤔 Curiosidade bônus
              </div>
              <p className="text-xl font-bold leading-snug">
                A expressão "o importante é competir" costuma durar exatamente até o primeiro jogo do seu bolão dar errado.
              </p>
              <p className="text-sm text-background/60 italic">
                — Segundo o instituto VDCDR (Vozes da cabeça do Robonews)
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MEDIA TYPES */}
      <section id="midia" className="bg-foreground text-background pt-10 pb-20">
        <div className="container mx-auto px-6">
          {/* Cabeçalho */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4">
              <img src={ficaDica} alt="Fica a Dica" className="h-10 object-contain" />
              <img src={ficaDicaIcon} alt="" className="w-16 h-16 object-contain" />
            </div>
            <p className="text-background/70 text-lg leading-relaxed">
              Sabe aquela dica que você quer sair contando pra todo mundo?<br />
              Esse é o lugar. Filmes, séries, músicas, rolês, apps… manda que a firma agradece.
            </p>
          </div>

          {/* Card GTA VI */}
          <div className="bg-background text-foreground rounded-3xl overflow-hidden border-2 border-background/10 shadow-pop mb-6">
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🎮 Dica
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Dica by JV
                </div>
              </div>
              <h3 className="text-3xl font-bold">GTA VI</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Depois de anos de espera, trailers analisados quadro a quadro e uma ansiedade coletiva da comunidade gamer, o lançamento de GTA VI finalmente está cada vez mais próximo.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Segundo o JV, inclusive, a empresa deveria considerar férias coletivas no lançamento para que todos possam jogar tranquilamente 😄
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Enquanto isso não acontece, fica a dica daquele que já é considerado um dos lançamentos mais aguardados da última década 👀
              </p>
              <div className="mt-2 rounded-2xl overflow-hidden border-2 border-foreground/10 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/EiQEBYDox_k"
                  title="GTA VI – Trailer Oficial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ORGULHO DA FIRMA */}
      <section id="gente" className="bg-teal/15 pt-10 pb-20">
        <div className="container mx-auto px-6">

          {/* Cabeçalho */}
          <div className="flex items-center gap-4 mb-4">
            <img src={orgulhoFirma} alt="Orgulho da Firma" className="h-16 object-contain" />
            <img src={orgulhoIcon} alt="" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-muted-foreground text-base mb-8 max-w-xl leading-relaxed">
            Momento especial pra destacar quem manda bem!<br />
            Porque celebrar as conquistas é parte da cultura Roboteasy.
          </p>

          {/* Card aniversários */}
          <div className="bg-card border-2 border-foreground rounded-3xl p-8 shadow-pop">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎉</span>
              <h3 className="text-2xl font-bold">Aniversários de empresa</h3>
            </div>
            <p className="text-muted-foreground text-base mb-10">
              Mês de celebrar trajetórias importantes por aqui 💙
            </p>

            {/* Marco — robotversário */}
            <div className="rounded-2xl overflow-hidden border-2 border-foreground shadow-pop">
              <img src={robotversarioMarco} alt="Robotversário do Marco" className="w-full h-auto object-contain" />
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-base leading-relaxed font-semibold">
                Parabéns ao Marco, que completou seu primeiro ano de Roboteasy.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Obrigado por fazer parte dessa história e por tudo o que construiu ao longo desse primeiro ciclo conosco 🚀
              </p>
            </div>

            {/* Canecas */}
            <div className="mt-10 border-t border-foreground/10 pt-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☕</span>
                <h3 className="text-2xl font-bold">Novas canecas chegando</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Os novos integrantes da Roboteasy começaram a receber suas canecas personalizadas e, sinceramente, a gente adora ver isso acontecer.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-foreground rounded-2xl overflow-hidden shadow-pop">
                  <img src={canecas} alt="Canecas" className="w-full h-auto object-cover" />
                </div>
                <div className="border-2 border-foreground rounded-2xl overflow-hidden shadow-pop">
                  <img src={canecasDoTime} alt="Canecas do time" className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                É sempre muito legal acompanhar a chegada de novas pessoas, novas histórias e novas perspectivas para o time. 💙
              </p>
              <p className="text-base font-semibold">
                Sejam todos muito bem-vindos!
              </p>
            </div>

            {/* English Break */}
            <div className="mt-10 border-t border-foreground/10 pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="EUA"
                  className="w-8 h-5 object-cover rounded-sm shadow-sm"
                />
                <h3 className="text-2xl font-bold">Primeiro English Break de Uno</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tivemos também a estreia oficial do English Break.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                E como toda estreia merece um toque especial, a primeira edição contou com partidas de Uno inteiramente em inglês.
              </p>
              <div className="border-2 border-foreground rounded-2xl overflow-hidden shadow-pop">
                <img src={englishBreak} alt="English Break – Primeiro Encontro" className="w-full h-auto object-cover" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Entre cartas, risadas, dúvidas sobre pronúncia e negociações internacionais envolvendo +4, o encontro foi um sucesso 😄
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOLÃO DA COPA */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6">

          {/* Cabeçalho */}
          <div className="border-t-2 border-background/20 pt-4 pb-10">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              ⚽ Bolão da Copa
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[0.95]">
              Toda rodada o jogo <span className="italic text-yellow-400">muda</span>.
            </h2>
            <p className="text-background/70 text-base mt-4 max-w-xl leading-relaxed">
              Acompanhe a classificação, os destaques e as histórias do nosso bolão.
            </p>
          </div>

          {/* Ranking */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-background/10 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                📊 Como está o ranking?
              </div>
              <p className="text-background/70 text-base leading-relaxed">
                A cada rodada o jogo muda, a classificação muda e os especialistas de ocasião surgem por todos os cantos da empresa 😄
              </p>
              <p className="text-background/70 text-base leading-relaxed">
                Confira abaixo a classificação atual do nosso Bolão da Copa:
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-background/20 shadow-pop">
              <img src={rankingImg} alt="Ranking do Bolão da Copa" className="w-full h-auto" />
            </div>

            <div className="space-y-4">
              <p className="text-background/80 text-base leading-relaxed text-center">
                Lembrando que a bola está rolando e a qualquer momento esse ranking muda 👀
              </p>
              <div className="rounded-2xl overflow-hidden border-2 border-background/20 shadow-pop max-w-xs mx-auto">
                <img src={ansiosoGif} alt="Ansioso" className="w-full h-auto" />
              </div>
            </div>

            {/* Entrevista exclusiva */}
            <div className="border-t border-background/20 pt-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-background/10 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                🎙️ Entrevista exclusiva com o líder
              </div>
              <p className="text-background/80 text-base leading-relaxed">
                Nessa edição conversamos com o atual líder do ranking, <strong className="text-background">JV</strong>.
              </p>
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div className="rounded-2xl overflow-hidden border-2 border-background/20 shadow-pop aspect-[9/16] md:w-64 shrink-0">
                  <iframe
                    src="https://www.youtube.com/embed/HVWrvnVUa6E"
                    title="Entrevista exclusiva com o líder do bolão"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-5 py-4">
                  <div className="space-y-1">
                    <p className="text-background/50 text-xs font-bold uppercase tracking-widest">Reflexão pós-rodada</p>
                  </div>
                  <p className="text-background/80 text-xl leading-relaxed">
                    E já sabe, né?
                  </p>
                  <p className="text-background/70 text-base leading-relaxed">
                    A liderança pode mudar a cada rodada,<br />mas uma coisa é certa:
                  </p>
                  <p className="text-background font-bold text-2xl leading-snug border-l-4 border-yellow-400 pl-4">
                    Todo mundo é especialista até o primeiro resultado inesperado aparecer 😄
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FLAGRAS */}
      <section id="flagras" className="container mx-auto px-6 py-16">

        {/* Cabeçalho */}
        <div className="border-t-2 border-foreground pt-4 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold">Flagras</h2>
        </div>

        {/* Intro + GIF lado a lado */}
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center mb-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Câmera, flagra, ação! Pegou um momento curioso, engraçado ou inusitado por aí? Esse é o lugar! Manda pra gente! Afinal, todo mundo merece virar notícia.
          </p>
          <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop w-48">
            <img src={fofocaGif} alt="" className="w-full h-auto" />
          </div>
        </div>

        <div className="space-y-8">

          {/* Atum do Diogo */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/15">
            <div className="p-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🐟 O fim de uma era
              </div>
              <p className="text-base leading-relaxed">
                Enquanto alguns apostam em misto quente, frutas ou iogurte no lanche da tarde...
              </p>
              <p className="text-base leading-relaxed">
                Diogo seguia fiel ao seu já famoso atum 😄
              </p>
            </div>
            <div className="border-t-2 border-foreground">
              <img src={atumDiogoImg} alt="Atum do Diogo" className="w-1/2 mx-auto block" />
            </div>
            <div className="p-8 space-y-3">
              <p className="text-base leading-relaxed">
                Mas, para a felicidade de alguns e tristeza de outros, essa história teve uma reviravolta.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Depois de aproximadamente uma semana de protagonismo absoluto, o atum foi aposentado e deu lugar ao whey 👀
              </p>
              <p className="text-base leading-relaxed opacity-70">
                O Robonews deseja sucesso ao novo integrante dessa jornada nutricional 💪😄
              </p>
            </div>
          </div>

          {/* Muay Thai */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-foreground text-background">
            <div className="p-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-background/15 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🥊 Time do Muay Thai
              </div>
              <p className="text-base leading-relaxed">
                Nas últimas semanas, alguns colaboradores resolveram trocar o sofá pelo tatame e começaram a treinar Muay Thai juntos após o expediente 😄
              </p>
            </div>
            <div className="border-t-2 border-background/20">
              <img src={timeAcademiaImg} alt="Time na academia de Muay Thai" className="w-full object-cover" />
            </div>
            <div className="p-8">
              <p className="text-base leading-relaxed opacity-80">
                O grupo vem crescendo e o Robonews já está acompanhando a evolução dos futuros campeões da firma 👀🥊
              </p>
            </div>
          </div>

          {/* Camila playlist */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="p-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🎧 Músicas para trabalhar (e sofrer um pouquinho)
              </div>
              <p className="text-base leading-relaxed">
                Toda pessoa tem uma playlist para focar. Mas a da Camila é diferenciada.
              </p>
            </div>
            <div className="border-t-2 border-foreground/20">
              <img src={camilaPlaylistImg} alt="Camila e sua playlist" className="w-full object-cover" />
            </div>
            <div className="p-8 space-y-3">
              <p className="text-base leading-relaxed">
                Ela foi flagrada ouvindo uma sequência de músicas curiosas para uma tarde de foco total no trabalho. Por precaução, o Robonews reforça:
              </p>
              <p className="text-base font-bold text-lg">
                Não esqueçam de ser bonzinhos com a Camila hoje 💙
              </p>
            </div>
          </div>

          {/* Flores — rosa suave, texto esquerda, imagem direita */}
          {/* Invasão verde */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-green-600/10">
            <div className="p-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🟢 A invasão verde
              </div>
              <p className="text-base leading-relaxed">
                Não sabemos exatamente como aconteceu. Não houve comunicado oficial, alinhamento prévio nem grupo secreto no Teams.
              </p>
              <p className="text-base leading-relaxed">
                Mas, em determinado momento da semana, percebemos que uma quantidade suspeitamente alta de pessoas apareceu vestida em tons de verde 👀
              </p>
            </div>
            <div className="border-t-2 border-foreground/20">
              <img src={timeDeVerdeImg} alt="Time de verde" className="w-full object-cover" />
            </div>
            <div className="p-8 space-y-3">
              <p className="text-base leading-relaxed">
                Coincidência? Mensagem subliminar? Preparação psicológica para a Copa?
              </p>
              <p className="text-base leading-relaxed opacity-70">
                O Robonews segue investigando 😄
              </p>
            </div>
          </div>

          {/* Correio Elegante */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/10">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-pink/20 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                💌 Correio Elegante
              </div>
              <p className="text-base leading-relaxed">
                Já que estamos vivendo simultaneamente uma Copa do Mundo e um Arraiá, nada mais justo do que resgatar uma das tradições mais importantes dessa época.
              </p>
              <p className="text-base leading-relaxed">
                Chegou a hora de conferir alguns dos correios elegantes mais divertidos e criativos que rolaram pela firma 💙
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "8U-xTFNxnyk",
                  "pu-gW5N--1U",
                  "xQkvVW5-Zi8",
                ].map((id) => (
                  <div key={id} className="rounded-2xl overflow-hidden border-2 border-foreground/10 aspect-[9/16]">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-pink">
                Novidade: estendemos essa ação até dia 26/06 💌
              </p>
            </div>
          </div>

          {/* Comentaristas da Copa */}
          <div className="border-2 border-green-600 rounded-3xl shadow-pop overflow-hidden bg-green-600 text-white">
            {/* Faixa de topo */}
            <div className="bg-yellow-400 px-8 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="w-8 h-5 object-cover rounded-sm shadow-sm" />
                <span className="text-green-900 text-xs font-black uppercase tracking-widest">Copa do Mundo 2026</span>
                <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="w-8 h-5 object-cover rounded-sm shadow-sm" />
              </div>
              <span className="text-green-900 text-lg">⚽</span>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎙️</span>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-yellow-300">Novo quadro</p>
                  <h3 className="text-2xl font-black leading-tight">Comentaristas da Copa</h3>
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/90">
                E já que essa edição é especial, inauguramos também um novo quadro.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                Diretamente da Central Robonews de Jornalismo Esportivo™️, convocamos alguns dos torcedores mais animados da empresa para comentar a estreia do Brasil.
              </p>
              <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/40 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/pcHzMlRAzZs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center gap-3 bg-yellow-400/15 border border-yellow-400/30 rounded-2xl px-5 py-3">
                <span className="text-xl">⚽</span>
                <p className="text-base font-semibold text-yellow-200">
                  Opiniões técnicas? Talvez. Opiniões emocionadas? Com certeza 😄
                </p>
              </div>
            </div>
          </div>

          {/* Compilado de erros */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🎬 Compilado de erros de gravação
              </div>
              <p className="text-base leading-relaxed">
                Nem toda gravação sai perfeita de primeira.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                E graças a isso, acumulamos uma coleção maravilhosa de erros, risadas e tentativas frustradas de manter a seriedade.
              </p>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden border-2 border-foreground/10 aspect-[9/16] w-64">
                  <iframe
                    src="https://www.youtube.com/embed/wRLhTboBy4A"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ACADEMIA ROBOTEASY */}
      <section id="roboquiz" className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-12">

          <div className="border-t-2 border-background/20 pt-4 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold">🎓 Academia Roboteasy</h2>
          </div>

          <div className="border-2 border-teal/40 rounded-3xl overflow-hidden max-w-2xl mx-auto">
            <div className="bg-teal/10 px-8 py-10 space-y-5">
              <div className="inline-flex items-center gap-2 bg-teal/20 text-teal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🎓 Novidade
              </div>
              <p className="text-2xl font-bold leading-snug">
                Academia Roboteasy oficialmente no ar!
              </p>
              <p className="text-base leading-relaxed opacity-90">
                Agora oficialmente disponível para todo o time!
              </p>
              <p className="text-base leading-relaxed opacity-80">
                A partir de agora, vocês terão acesso à plataforma com conteúdos e trilhas de aprendizagem, incluindo a Trilha de Bem-Estar que já está disponível, para apoiar seu desenvolvimento. 💙
              </p>
              <a
                href="https://academia.roboteasy.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-background px-7 py-3.5 rounded-full font-bold border-2 border-background/30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
              >
                👉 Acessar Academia <ArrowRight className="w-4 h-4" />
              </a>
              <div className="border-t border-background/20 pt-5 space-y-2">
                <p className="text-sm leading-relaxed opacity-70">
                  Seu login e senha foram enviados por e-mail.
                </p>
                <p className="text-sm leading-relaxed opacity-70">
                  E se surgir qualquer dificuldade no acesso, já sabe: é só chamar a <strong className="text-background opacity-100">Bruna, do Marketing</strong>, pelo Teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="bg-teal/10">
        <div className="container mx-auto px-6 py-12">
          <div className="pb-6">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">📅 Agenda</div>
            <h2 className="text-4xl md:text-5xl font-bold">O que vem por aí.</h2>
          </div>
          <div className="space-y-4">
            {[
              { emoji: "📅", title: "Próximo EasyTalk", desc: "Já tem data definida: Dia 09 de julho às 09:00" },
              { emoji: "🐾", title: "Desfile Pet", desc: "Já temos data marcada! 📅 29/06 inicia a campanha oficialmente para envio das fotos/vídeos… Preparem os modelos de quatro patas 😄" },
              { emoji: "⚽", title: "Happy Hour da Copa", desc: "Estão todos convocados! 📅 24/07 às 19h — Momento oficial para torcer, comentar e sofrer coletivamente pelos resultados." },
              { emoji: "🏐", title: "Fit Hour – Vôlei de Areia (nova data)", desc: "📅 02/07 às 19h — Beachville. Preparem o espírito esportivo e bora jogar!" },
              { emoji: "🌽", title: "Festa Junina Roboteasy", desc: "📅 10/07 às 19h — Em breve mais informações, mas já adiantamos: família e acompanhantes são bem-vindos! Porque paçoca, bandeirinha e comida típica nunca decepcionam 😄" },
              { emoji: "📸", title: "VAR do Robonews", desc: "Achou que só a Copa tinha árbitro de vídeo? Nada disso 😄 O Robonews segue analisando lances e investigando acontecimentos suspeitos pelos corredores. Se você encontrar um flagra digno, já sabe: 📩 acione nossa central de jornalismo e seja um informante Robonews!" },
              { emoji: "🤠", title: "Concurso caipira?? É óbvio que sim!!", desc: "Teremos o tão famoso concurso caipira da Roboteasy… jájá mais informações!" },
              { emoji: "🏆", title: "Bolão da Copa rolando...", desc: "E muitos rumores sobre um prêmio surpresa começam a circular pelos corredores da firma… E aí? Qual o seu palpite? 👀" },
            ].map((e, i) => (
              <div key={i} className="bg-background border-2 border-foreground rounded-2xl p-5 flex items-start gap-5 hover:translate-x-1 transition shadow-pop">
                <div className="text-3xl shrink-0 mt-0.5">{e.emoji}</div>
                <div>
                  <div className="font-bold text-base mb-1">{e.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECADINHOS PAROQUIAIS */}
      <section className="container mx-auto px-6 py-12">
        <div className="border-t-2 border-foreground pt-4 pb-6">
          <img src={recadinhosLogo} alt="Recadinhos Paroquiais" className="h-14 w-auto object-contain" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              Passando rapidinho para lembrar que os apontamentos precisam estar sempre em dia ⏰
            </p>
            <p className="text-base leading-relaxed">
              A partir de agora, nossa automação vai acompanhar diariamente os registros do time e, caso exista algum apontamento pendente, o famoso lembrete chegará via Teams 👨‍💻🐰
            </p>
            <p className="text-base leading-relaxed">
              Mas calma… ninguém está sendo perseguido 😅<br />
              A ideia é só ajudar a manter tudo organizado, atualizado e evitar esquecimentos no dia a dia.
            </p>
            <p className="text-base leading-relaxed">
              Então já sabe: apontou certinho = zero notificações 🎉
            </p>
            <p className="text-base font-semibold">
              Contamos com vocês! 🚀
            </p>
          </div>

          <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop">
            <img src={coisasParaFazer} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <img src={logoRoboteasy} alt="Roboteasy" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />

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
