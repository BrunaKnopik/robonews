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
import fotoIigor from "@/assets/iigor.png";
import bolo1 from "@/assets/bolo-1.jpeg";
import bolo2 from "@/assets/bolo-2.jpeg";
import bolo3 from "@/assets/bolo-3.jpeg";
import florr from "@/assets/florr.png";
import fotoPaulo from "@/assets/paulo.png";
import fotoLeticia from "@/assets/leticia.png";
import fotoPolini from "@/assets/polini.png";
import fotoJasper from "@/assets/jasper.png";
import fotoAna from "@/assets/ana.png";
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

const editions = ["Edição #107", "29 Mai 2026", "Tempo de leitura: 4 min", "☕ Pegue seu café"];



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
        <div className="border-t-2 border-foreground flex items-center justify-between pt-4 pb-10">
          <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Megaphone className="w-3.5 h-3.5" /> Manchete da semana
          </div>
          <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Edição #107 · 29 Mai 2026
          </span>
        </div>

        {/* Manchete principal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.87] mb-8">
          Oficialmente aberta a <span className="text-pink">temporada</span> mais <span className="italic text-teal">caipira</span> do ano.
        </h1>

        {/* Descrição + tags */}
        <div className="mb-14 space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            Chegamos naquela época do ano em que absolutamente tudo começa a girar em torno de:
          </p>
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="shrink-0 inline-flex items-center gap-2 bg-teal/10 text-primary px-5 py-2.5 rounded-full border border-teal/20 text-sm font-bold">🌽 festa junina</span>
            <span className="shrink-0 inline-flex items-center gap-2 bg-foreground/5 px-5 py-2.5 rounded-full border border-foreground/10 text-sm font-bold">⚽ Copa do Mundo</span>
            <span className="shrink-0 inline-flex items-center gap-2 bg-pink/10 text-pink px-5 py-2.5 rounded-full border border-pink/20 text-sm font-bold">💘 Dia dos Namorados</span>
            <span className="shrink-0 inline-flex items-center gap-2 bg-foreground/5 px-5 py-2.5 rounded-full border border-foreground/10 text-sm font-bold">🎉 tudo ao mesmo tempo 😄</span>
          </div>
        </div>

        {/* Bloco editorial — time de mkt */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Inclusive, o time de marketing gostaria de informar que a situação mental atual está exatamente assim:
          </p>

          <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop">
            <img
              src={timeDeMkt}
              alt="Time de Marketing"
              className="w-full h-auto"
            />
          </div>

          <p className="text-lg leading-relaxed">
            E sinceramente?<br />
            A gente nem sabe mais pelo que tá mais ansioso 👀
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Enquanto o clima de Copa já começa a aparecer, as paçoquinhas dão os primeiros sinais de vida e o cheiro de pinhão invade Santa Catarina… bora ver tudo o que rolou nas últimas semanas? 👇
          </p>
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

          {/* Card FROM — coluna única, largura total */}
          <div className="bg-background text-foreground rounded-3xl overflow-hidden border-2 border-background/10 shadow-pop">
            <div className="grid md:grid-cols-[260px_1fr]">
              <img
                src={fromSerie}
                alt="FROM - A Série"
                className="w-full h-full object-cover"
              />
              <div className="p-8 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  👀 Indicação
                </div>
                <h3 className="text-3xl font-bold">FROM | Origem</h3>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Indicação by Mari
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Se você gosta de suspense, teorias malucas e séries que fazem você terminar um episódio e imediatamente pesquisar "explicação final", fica essa dica 👀
                </p>

                <div className="border-t border-foreground/10 pt-4 space-y-3">
                  <span className="inline-flex items-center gap-1.5 bg-teal/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-teal/20">
                    Disponível no Globoplay
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sobre a série</p>
                  <p className="text-base text-foreground leading-relaxed">
                    Uma família está viajando quando acaba se perdendo na estrada e chega até uma pequena cidade aparentemente comum.
                  </p>
                  <p className="text-base font-semibold">
                    O problema?<br />
                    Depois de entrar… Ninguém consegue mais sair 😄
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Presos em um loop misterioso e cercados por forças bizarras, os moradores precisam sobreviver enquanto tentam entender o que realmente está acontecendo naquele lugar.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    E segundo fontes totalmente confiáveis do Robonews… As teorias já estão dominando os corredores da Roboteasy 👀
                  </p>
                </div>
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

            {/* Galeria da fama */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { name: "Paulo",   years: 3, img: fotoPaulo },
                { name: "Letícia", years: 1, img: fotoLeticia },
                { name: "Polini",  years: 1, img: fotoPolini },
                { name: "Jasper",  years: 2, img: fotoJasper },
                { name: "Analu",   years: 1, img: fotoAna },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-full rounded-2xl border-2 border-foreground overflow-hidden shadow-pop bg-muted/30">
                    <img src={p.img} alt={p.name} className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{p.name}</div>
                    <div className="text-sm text-pink font-semibold">
                      🎈 {p.years} {p.years === 1 ? "ano" : "anos"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-foreground/10 pt-6">
              <div className="rounded-2xl overflow-hidden border-2 border-foreground shadow-pop">
                <img src={orgulhoGif} alt="" className="w-full h-auto" />
              </div>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Obrigado por fazerem parte dessa história e construírem tudo isso junto com a gente 🚀
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ROBOTEASY EM MOVIMENTO */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink/20 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                🚀 Novidade
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-[0.95]">
                Roboteasy em <span className="text-teal italic">Movimento</span>
              </h2>
              <p className="text-background/70 text-base leading-relaxed">
                Se você gosta de acompanhar tudo o que acontece no universo corporativo da firma… Temos novidades! 👀
              </p>
              <p className="text-background/70 text-base leading-relaxed">
                Lançamos o <strong className="text-background">Roboteasy em Movimento</strong>, nossa news Beta focada em:
              </p>
              <ul className="space-y-2 text-background/80 text-base">
                {["entregas", "novos clientes", "visitas", "feedbacks", "novidades importantes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-teal-foreground text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-background/70 text-base leading-relaxed">
                Porque essa última semana foi movimentada por aqui e a gente resolveu registrar tudo 😄
              </p>
              <a
                href="https://roboteasy-movimento.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink text-pink-foreground px-7 py-3.5 rounded-full font-semibold shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
              >
                Acessar o Roboteasy em Movimento <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card destaque */}
            <div className="bg-background text-foreground rounded-3xl border-2 border-background/10 shadow-pop p-8 space-y-5">
              <div className="text-4xl">🚀</div>
              <h3 className="text-2xl font-bold">News Beta</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Uma visão completa do que está acontecendo na Roboteasy — direto ao ponto, sem enrolação.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { emoji: "📦", label: "Entregas" },
                  { emoji: "🤝", label: "Novos clientes" },
                  { emoji: "📍", label: "Visitas" },
                  { emoji: "💬", label: "Feedbacks" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-teal/10 text-primary rounded-xl px-3 py-2 text-sm font-semibold border border-teal/20">
                    <span>{item.emoji}</span> {item.label}
                  </div>
                ))}
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

          {/* RPG — verde/teal, texto esquerda, imagem direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/15">
            <div className="grid lg:grid-cols-[1fr_40%] items-stretch">
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🎲 Intrigas glaciais no RPG
                </div>
                <p className="text-base leading-relaxed">
                  A campanha de RPG segue rendendo histórias dignas de série 😄 Na sessão da vez, ambientada em uma exploração glacial, tivemos tensão, decisões questionáveis e algumas intrigas internas que o Robonews prefere não comentar em detalhes por questões diplomáticas 👀
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Mas ouvimos boatos de uma história que envolvia uma queda mortal, dinheiro roubado, bolas de fogo e um acerto crítico... Dito isso, aparentemente o frio não era a única coisa deixando o clima da sessão tenso 😄
                </p>
              </div>
              <div className="border-l-2 border-foreground">
                <img src={intrigasImg} alt="Intrigas glaciais no RPG" className="w-full h-full object-cover" style={{ minHeight: '300px' }} />
              </div>
            </div>
          </div>

          {/* Higor — rosa, imagem esquerda, texto direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/10">
            <div className="grid lg:grid-cols-[40%_1fr] items-stretch">
              <div className="border-r-2 border-foreground">
                <img src={fotoIigor} alt="Higor e o álbum da Copa" className="w-full h-full object-cover" style={{ minHeight: '300px' }} />
              </div>
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  ⚽ Higor e o álbum da Copa
                </div>
                <p className="text-base leading-relaxed">
                  Enquanto muita gente ainda nem decidiu se vai fazer um álbum da copa… O Higor já entrou oficialmente no modo organização nível hard com as figurinhas dele 👀
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Separações estratégicas, alinhamento perfeito e provavelmente algum método secreto que só ele entende. Se existir campeonato de montagem de álbum, temos um candidato forte 😄
                </p>
              </div>
            </div>
          </div>

          {/* Carona — escuro, texto + botão centralizado */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-foreground text-background">
            <div className="p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 bg-background/15 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🛵 Carona diferenciada
                </div>
                <p className="text-base leading-relaxed">
                  Polini foi flagrado na garupa do Jasper em uma cena que transmitia exatamente a energia de: "missão secundária desbloqueada" 😄
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  O registro ficou tão cinematográfico que honestamente parecia abertura de sitcom dos anos 2000 👀
                </p>
              </div>
              <a
                href="https://agapys365-my.sharepoint.com/:v:/g/personal/marketing_roboteasy_com_br/IQCS0dweQDNlQoIq5_8eFnfcAYnrcgEEuED5i_okNLsVUqw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ODCT7Y"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-pink text-pink-foreground px-7 py-3.5 rounded-full font-bold border-2 border-background shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
              >
                Ver provas <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bolo — amarelo/primário */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🎂 O bolo que deu boa… mas também deu ruim
              </div>
              <p className="text-base leading-relaxed">
                O bolo de aniversário da Ana enfrentou desafios no trajeto 😄 A cobertura decidiu explorar novos caminhos, resultando em uma aparência que alguns descreveram como:
              </p>
              <div className="flex flex-wrap gap-2">
                {["🌋 lama", "🍫 terreno pós-chuva", "🪨 massa corrida sabor chocolate"].map((d, i) => (
                  <span key={i} className="bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-bold">{d}</span>
                ))}
              </div>
              <p className="text-base leading-relaxed opacity-70">
                Mas apesar da estética duvidosa… o importante é que tava muito gostoso 👀
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[bolo1, bolo2, bolo3].map((img, i) => (
                  <div key={i} className="border-2 border-foreground rounded-2xl overflow-hidden shadow-pop">
                    <img src={img} alt={`Bolo ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flores — rosa suave, texto esquerda, imagem direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/5">
            <div className="grid lg:grid-cols-[1fr_40%] items-stretch">
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-pink/20 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🌸 Operação Lego floral
                </div>
                <p className="text-base leading-relaxed">
                  Depois que a Ana ganhou flores de Lego de presente, ela se juntou com a Maria e o Polini pra assumir a missão da montagem 😄
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Entre peças perdidas, dúvidas existenciais e aquele clássico "isso aqui encaixa onde?", o trio conseguiu avançar no projeto com níveis altíssimos de concentração 👀
                </p>
                <p className="text-base font-semibold">
                  O resultado? Engenharia, paciência e trabalho em equipe em sua forma mais pura 🌸
                </p>
              </div>
              <div className="border-l-2 border-foreground">
                <img src={florr} alt="Operação Lego Floral" className="w-full h-full object-cover" style={{ minHeight: '300px' }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ROBOQUIZ */}
      <section id="roboquiz" className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-12">

          <div className="border-t-2 border-background/20 pt-4 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold">🧠 Roboquiz</h2>
          </div>

          <div className="border-2 border-background/20 rounded-3xl overflow-hidden max-w-2xl mx-auto">
            <div className="bg-pink/15 px-8 py-10 space-y-5">
              <div className="inline-flex items-center gap-2 bg-background/10 text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                ⚡ Desafio tech
              </div>
              <p className="text-xl font-bold leading-snug">
                Um desafio para fazer download de conhecimento!
              </p>
              <p className="text-base leading-relaxed opacity-80">
                Teste seus neurônios, descubra curiosidades tech e veja quem manja de tudo por aqui. Preparado?
              </p>
              <div className="border-t border-background/20 pt-5 space-y-3">
                <div className="inline-flex items-center gap-2 bg-pink/30 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  📋 Enquete
                </div>
                <p className="text-base leading-relaxed">
                  O que você achou do <strong>novo formato de EasyTalk</strong>? Os feedbacks ajudam a melhorar cada vez mais os encontros, temas e experiências 👀 Então, corre responder! 😄
                </p>
                <a
                  href="https://pollunit.com/polls/RQNqYlWG7MqkDXk9CqGVIg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink text-pink-foreground px-7 py-3.5 rounded-full font-bold border-2 border-background/30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
                >
                  Responda aqui <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT BLOCKS */}
      <section className="container mx-auto px-6 py-12">
        {/* Pergunte ao RH */}
        <div>
          <div className="text-pink text-xs font-bold uppercase tracking-widest mb-3">💙 RH</div>
          <h3 className="text-4xl font-bold mb-4">Pergunte ao RH</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sua opinião faz a diferença e queremos ouvir você! 💙
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Se ficou com alguma dúvida, tem uma sugestão, ideia ou gostaria de compartilhar algum ponto com o RH, envie pelo formulário abaixo. Esse espaço foi criado justamente para aproximar a comunicação e garantir que os temas mais importantes para o time sejam ouvidos.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            E fique tranquilo: a identificação é opcional, então você pode escolher se deseja se identificar ou enviar de forma anônima.
          </p>
          <div className="flex justify-center">
            <a
              href="https://form.jotform.com/rhRoboteasy/pergunte-ao-rh-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-bold border-2 border-foreground shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
            >
              Enviar pergunta <ArrowRight className="w-4 h-4" />
            </a>
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
              { emoji: "📅", title: "EasyTalks", desc: "Agora é oficial: os EasyTalks acontecerão sempre na segunda quinta-feira de cada mês 👀" },
              { emoji: "🌽", title: "Festa Junina", desc: "Os preparativos já começaram… e em breve divulgaremos data e detalhes oficiais 😄" },
              { emoji: "⚽", title: "Happy Hour da Copa", desc: "Sim, teremos clima de Copa por aqui. E sim, isso provavelmente significa gritos coletivos e discussões futebolísticas saudáveis 👀" },
              { emoji: "🖼️", title: "Troca de figurinhas da Copa", desc: "Já pode começar a separar as repetidas 😄" },
              { emoji: "🐾", title: "Desfile Pet", desc: "Em breve teremos mais informações sobre uma das iniciativas mais importantes da firma: ver pets extremamente fofos em contexto corporativo 💙" },
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
              <span>📅 Próxima edição: <strong className="text-background">12 de junho de 2026</strong></span>
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
