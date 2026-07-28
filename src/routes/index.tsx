import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/robonews-logo.png";
import logoRoboteasy from "@/assets/logo-roboteasy.png";
import recadinhosLogo from "@/assets/recadinhos-paroquiais.png";
import coisasParaFazer from "@/assets/coisas-para-fazer.webp";
import comunicadosPasso1 from "@/assets/comunicados-passo-1.png";
import comunicadosPasso2 from "@/assets/comunicados-passo-2.png";
import ficaDica from "@/assets/fica-a-dica.png";
import ficaDicaIcon from "@/assets/fica-a-dica-icon.png";
import festivalDanca from "@/assets/festival-de-danca.png";
import orgulhoFirma from "@/assets/orgulho-da-firma.png";
import orgulhoIcon from "@/assets/orgulho-da-firma-icon.png";
import fotoGabe from "@/assets/gabe.png";
import fitHour from "@/assets/fit-hour.jpg";
import guardioesCultura from "@/assets/guardioes-cultura.png";
import gustavoFamilia from "@/assets/gustavo-familia.jpeg";
import gustavoBrinde from "@/assets/gustavo-brinde.jpg";
import marcosFamilia from "@/assets/marcos-familia.png";
import marcosBrinde from "@/assets/marcos-brinde.jpg";
import fotoDiogo from "@/assets/diogo.jpeg";
import hiperfocoEmbape from "@/assets/hiperfoco-embape.jpg";
import jasperEmbape from "@/assets/jasper-embape.jpg";
import arrumacaoEasyTalk from "@/assets/arrumacao-easytalk.png";
import carroGenesis from "@/assets/carro-genesis.png";
import brindeBingo from "@/assets/brinde-bingo-polini.jpg";
import bolinhasSabaoMari1 from "@/assets/bolinhas-sabao-mari-1.jpg";
import bolinhasSabaoMari2 from "@/assets/bolinhas-sabao-mari-2.jpg";
import homemTernoAmarelo from "@/assets/homem-terno-amarelo.jpg";
import renanWorkaholic from "@/assets/renan-workaholic.png";
import vozesCabecaBruna from "@/assets/vozes-cabeca-bruna.png";
import camilaComendo from "@/assets/camila-comendo.jpg";
import pedroPresente from "@/assets/pedro-presente.png";
import higorFestaJunina from "@/assets/higor-festa-junina.jpeg";
import poliniDiaD from "@/assets/polini-dia-d.jpeg";
import easytalk from "@/assets/easytalk.jpeg";
import fofocaGif from "@/assets/fofoca.gif";
import { Megaphone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "robonews — comunicação interna" },
      {
        name: "description",
        content:
          "A newsletter interna da Robo. Notícias, gente, cultura e vibe — tudo em um lugar.",
      },
    ],
  }),
  component: Index,
});

const editions = ["Edição #110", "28 Jul 2026", "Tempo de leitura: 4 min", "☕ Pegue seu café"];

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
          <a href="#destaque" className="hover:text-pink transition">
            Destaque
          </a>
          <a href="#midia" className="hover:text-pink transition">
            Mídia
          </a>
          <a href="#gente" className="hover:text-pink transition">
            Gente
          </a>
          <a href="#agenda" className="hover:text-pink transition">
            Agenda
          </a>
        </nav>
        <a
          href="#destaque"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink transition"
        >
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
            Edição #110 · 28 Jul 2026
          </span>
        </div>

        {/* Manchete principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.87] mb-8">
          👋 O fim de <span className="text-pink">uma era</span>{" "}
          <span className="italic text-teal">...</span>
        </h1>

        {/* Descrição + tags */}
        <div className="mb-14 space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            E assim chegamos ao fim de mais uma Copa do Mundo. Enquanto o próximo Mundial não chega,
            por aqui a competição continua em outro ritmo:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { emoji: "⚽", label: "fim da Copa", tone: "neutral" },
              { emoji: "🌽", label: "festa junina", tone: "teal" },
              { emoji: "🏐", label: "vôlei de areia", tone: "pink" },
              { emoji: "🎓", label: "pós-graduação", tone: "neutral" },
              { emoji: "🚀", label: "novos projetos", tone: "teal" },
            ].map((tag, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-sm font-bold ${
                  tag.tone === "teal"
                    ? "bg-teal/10 text-primary border-teal/20"
                    : tag.tone === "pink"
                      ? "bg-pink/10 text-pink border-pink/20"
                      : "bg-foreground/5 text-foreground border-foreground/10"
                }`}
              >
                <span className="text-lg leading-none">{tag.emoji}</span> {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bloco editorial */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Foram semanas de torcida, palpites, bolões, comemorações, algumas zebras, muitos "eu
            tinha certeza que esse time ia ganhar"... e, infelizmente, o tão sonhado hexa ainda vai
            ter que esperar mais um pouquinho.
          </p>
          <p className="text-lg leading-relaxed">
            Mas tudo bem. 2030 já está logo ali (ou pelo menos é isso que o torcedor brasileiro
            gosta de acreditar 😄).
          </p>
          <p className="text-lg leading-relaxed">
            Enquanto o próximo Mundial não chega, por aqui a competição continua em outro ritmo:
            teve festa junina, vôlei de areia, pós-graduação concluída, novos projetos e, claro,
            muitos flagras dignos de replay.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Bora conferir tudo o que rolou nas últimas semanas? 👇
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
              Sabe aquela dica que você quer sair contando pra todo mundo?
              <br />
              Esse é o lugar. Filmes, séries, músicas, rolês, apps… manda que a firma agradece.
            </p>
          </div>

          {/* Card Festival de Dança — coluna única, largura total */}
          <div className="bg-background text-foreground rounded-3xl overflow-hidden border-2 border-background/10 shadow-pop">
            <img src={festivalDanca} alt="Festival de Dança" className="w-full h-auto" />
            <div className="p-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-pink/10 text-pink px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                💃 Dica da vez
              </div>
              <h3 className="text-3xl font-bold">Já entrou no clima do Festival de Dança?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Todo joinvilense conhece (ou pelo menos já ouviu falar) do Festival de Dança, que
                transforma a cidade nessa época do ano.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mas o que muita gente não sabe é que também existe uma programação gratuita para
                quem quer participar e não só assistir.
              </p>

              <div className="border-t border-foreground/10 pt-4 space-y-3">
                <span className="inline-flex items-center gap-1.5 bg-teal/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-teal/20">
                  Gratuito · Sem inscrição
                </span>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Sobre o projeto
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  O projeto <strong>"Dança Para Quem Não Dança"</strong> oferece aulas abertas de
                  diversos ritmos para qualquer pessoa, sem necessidade de inscrição.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-foreground/5 px-3 py-1.5 rounded-full text-sm font-semibold border border-foreground/10">
                    📍 Palco Externo da Feira da Sapatilha
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-foreground/5 px-3 py-1.5 rounded-full text-sm font-semibold border border-foreground/10">
                    📅 21 a 31 de julho
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-foreground/5 px-3 py-1.5 rounded-full text-sm font-semibold border border-foreground/10">
                    🕒 Das 15h às 15h40
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed pt-2">
                  Vale a pena passar por lá e aproveitar um dos eventos mais tradicionais da nossa
                  cidade. 💙
                </p>
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
            Momento especial pra destacar quem manda bem!
            <br />
            Porque celebrar as conquistas é parte da cultura Roboteasy.
          </p>

          {/* Card conquista acadêmica — GR */}
          <div className="bg-card border-2 border-foreground rounded-3xl overflow-hidden shadow-pop mb-8">
            <div className="grid md:grid-cols-[220px_1fr] items-stretch">
              <div className="border-b-2 md:border-b-0 md:border-r-2 border-foreground bg-muted/30">
                <img
                  src={fotoGabe}
                  alt="GR"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "260px" }}
                />
              </div>
              <div className="p-8 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <h3 className="text-2xl font-bold">GR concluiu sua pós-graduação!</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Tem conquista acadêmica por aqui também!
                </p>
                <p className="text-base leading-relaxed">
                  O GR concluiu sua pós-graduação em <strong>Ciência de Dados</strong>, encerrando
                  mais uma importante etapa da sua jornada profissional.
                </p>
                <p className="text-base font-semibold">
                  Parabéns pela dedicação e por investir continuamente no seu desenvolvimento. Que
                  essa seja apenas mais uma de muitas conquistas! 👏
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMEI — ESPAÇO CULTURA ROBOTEASY */}
      <section className="container mx-auto px-6 py-16">
        <div className="border-t-2 border-foreground pt-4 pb-6">
          <div className="inline-flex items-center gap-2 bg-teal/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            💚 Amei
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Espaço Cultura Roboteasy</h2>
        </div>
        <p className="text-muted-foreground text-base mb-8 max-w-xl leading-relaxed">
          Um espaço para celebrar tudo que fortalece o nosso jeito de ser: momentos em equipe,
          iniciativas de bem-estar e tudo que faz a cultura Roboteasy acontecer no dia a dia.
        </p>

        {/* Card Fit Hour */}
        <div className="bg-card border-2 border-foreground rounded-3xl overflow-hidden shadow-pop mb-8">
          <img src={fitHour} alt="Fit Hour - vôlei de areia" className="w-full h-auto" />
          <div className="p-8 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏐</span>
              <h3 className="text-2xl font-bold">Fit Hour: primeira edição</h3>
            </div>
            <p className="text-base leading-relaxed">
              A primeira edição do Fit Hour finalmente saiu do papel!
            </p>
            <p className="text-base leading-relaxed">
              O time se reuniu para uma partida de vôlei de areia e mostrou que espírito esportivo
              também faz parte da cultura Roboteasy.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              E fica ligado, daqui a pouquinho teremos mais uma edição! 🏐
            </p>
          </div>
        </div>

        {/* Card English Break */}
        <div className="bg-card border-2 border-foreground rounded-3xl overflow-hidden shadow-pop">
          <div className="grid sm:grid-cols-[1fr_220px] items-center">
            <div className="p-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇺🇸</span>
                <h3 className="text-2xl font-bold">English Break continua!</h3>
              </div>
              <p className="text-base leading-relaxed">
                O English Break segue acontecendo todas as terças e quintas-feiras, com encontros
                leves para praticar conversação e perder o medo de falar inglês.
              </p>
              <p className="text-base leading-relaxed">
                Se você ainda não participou, fica o convite! Não importa o seu nível de inglês, o
                objetivo é praticar e evoluir juntos.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Esperamos você no próximo encontro!
              </p>
            </div>
            <div className="p-6 flex justify-center">
              <img
                src={guardioesCultura}
                alt="Guardiões da cultura"
                className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
              />
            </div>
          </div>
        </div>

        {/* Card EasyTalk */}
        <div className="bg-card border-2 border-foreground rounded-3xl overflow-hidden shadow-pop mt-8">
          <img src={easytalk} alt="EasyTalk" className="w-full h-auto" />
          <div className="p-8 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎤</span>
              <h3 className="text-2xl font-bold">Mais um EasyTalk que rolou!</h3>
            </div>
            <p className="text-base leading-relaxed">
              Mais uma edição do EasyTalk aconteceu, reunindo o time para compartilhar os principais
              resultados, projetos e novidades de cada área da Roboteasy.
            </p>
            <p className="text-base leading-relaxed">
              Foi mais um momento de alinhamento e transparência sobre o que está rolando na
              empresa, com espaço para perguntas e boas conversas entre os times.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Nos vemos no próximo encontro! 🎙️
            </p>
          </div>
        </div>
      </section>

      {/* FESTA JUNINA */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-foreground pt-4 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold">🌽 Festa Junina</h2>
          </div>

          <div className="mb-10 space-y-4 max-w-2xl">
            <p className="text-lg leading-relaxed">
              A Festa Junina foi um sucesso! Teve comidas típicas, brincadeiras, muita risada e
              aquele clima gostoso que já virou tradição por aqui.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Obrigado a todo mundo que participou e ajudou a fazer mais um evento especial
              acontecer! 💛
            </p>
          </div>

          {/* Card concurso caipira */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-background">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🤠 Os caipiras do ano
              </div>
              <p className="text-base leading-relaxed">
                E falando em Festa Junina, não poderíamos deixar de parabenizar os grandes
                vencedores do nosso Concurso Caipira: <strong>Gustavo</strong> e{" "}
                <strong>Marcos</strong>! 🌽
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Os looks em família, a criatividade e a dedicação garantiram aos dois o título de
                representantes oficiais da roça Roboteasy. 👏🤠
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {[
                  { img: gustavoFamilia, alt: "Gustavo e família" },
                  { img: gustavoBrinde, alt: "Gustavo - brinde" },
                  { img: marcosFamilia, alt: "Marcos e família" },
                  { img: marcosBrinde, alt: "Marcos - brinde" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="aspect-square border-2 border-foreground rounded-2xl overflow-hidden shadow-pop"
                  >
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vídeo da Festa Junina */}
          <div className="mt-8 flex justify-center">
            <div className="aspect-[9/16] w-full max-w-xs rounded-2xl overflow-hidden border-2 border-foreground shadow-pop">
              <iframe
                src="https://www.youtube.com/embed/BklmDvOlXdQ"
                title="Festa Junina"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
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
            Câmera, flagra, ação! Pegou um momento curioso, engraçado ou inusitado por aí? Esse é o
            lugar! Manda pra gente! Afinal, todo mundo merece virar notícia.
          </p>
          <div className="border-2 border-foreground rounded-3xl overflow-hidden shadow-pop w-48">
            <img src={fofocaGif} alt="" className="w-full h-auto" />
          </div>
        </div>

        <div className="space-y-8">
          {/* Diogo — amarelo/primário, imagem esquerda, texto direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="grid sm:grid-cols-[220px_1fr] items-center">
              <div className="aspect-[3/4] border-b-2 sm:border-b-0 sm:border-r-2 border-foreground">
                <img
                  src={fotoDiogo}
                  alt="Diogo entrou no clima"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  👏 Diogo entrou oficialmente no clima
                </div>
                <p className="text-base leading-relaxed">
                  Entre Copa do Mundo e Festa Junina, Diogo resolveu não escolher um lado.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Resultado: apareceu de chapéu caipira vivendo o melhor dos dois mundos 😄
                </p>
              </div>
            </div>
          </div>

          {/* Mbappé — Serviços, texto + galeria de imagens */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/10">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                ⚽ O ditador Mbappé invadiu o time de Serviços
              </div>
              <p className="text-base leading-relaxed">
                Nas últimas semanas, um novo hiperfoco tomou conta do time de Serviços.
              </p>
              <p className="text-base leading-relaxed">
                O assunto da vez? <strong>Mbappé.</strong>
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Não sabemos exatamente como começou... mas sabemos que terminou com muitas piadas,
                memes e referências pelos corredores.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { img: hiperfocoEmbape, alt: "Hiperfoco em Mbappé" },
                  { img: jasperEmbape, alt: "Jasper e o hiperfoco em Mbappé" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="aspect-square border-2 border-foreground rounded-2xl overflow-hidden shadow-pop"
                  >
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fios EasyTalk — texto esquerda, imagem direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-foreground/5">
            <div className="grid lg:grid-cols-[1fr_320px] items-center">
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🔌 Missão: acabar com os fios
                </div>
                <p className="text-base leading-relaxed">
                  Quem participou da organização do EasyTalk sabe.
                </p>
                <p className="text-base leading-relaxed">
                  Além de montar os equipamentos e organizar o espaço, também existiu uma side
                  quest: vencer a batalha contra os quilômetros de cabos espalhados pela sala.
                </p>
                <p className="text-base font-semibold">Spoiler: dessa vez os fios perderam. 🔌</p>
              </div>
              <div className="aspect-[3/2] border-t-2 lg:border-t-0 lg:border-l-2 border-foreground">
                <img
                  src={arrumacaoEasyTalk}
                  alt="Arrumação do EasyTalk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Genesis na F1 — imagem esquerda, texto direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/10">
            <div className="grid sm:grid-cols-[320px_1fr] items-center">
              <div className="aspect-[3/2] border-b-2 sm:border-b-0 sm:border-r-2 border-foreground">
                <img
                  src={carroGenesis}
                  alt="Carro do Genesis no GP de São Paulo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🏎️ Genesis na Fórmula 1?
                </div>
                <p className="text-base leading-relaxed">
                  Durante o GP de São Paulo, uma descoberta chamou a atenção.
                </p>
                <p className="text-base leading-relaxed">
                  Parece que o Genesis resolveu patrocinar uma equipe de corrida.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Ou pelo menos foi isso que pensamos durante alguns segundos... 😄
                </p>
              </div>
            </div>
          </div>

          {/* Bingo Polini — texto esquerda, imagem direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/10">
            <div className="grid sm:grid-cols-[1fr_200px] items-center">
              <div className="p-8 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🎁 A expectativa e a realidade
                </div>
                <p className="text-base leading-relaxed">
                  No bingo da Festa Junina, Polini já fazia planos para levar o maior prêmio da
                  noite.
                </p>
                <p className="text-base leading-relaxed">O destino, porém, tinha outros planos.</p>
                <p className="text-base leading-relaxed opacity-70">
                  Ele foi certeiro na escolha do maior pacote, o que ele não esperava ao abrir a
                  embalagem é que no lugar do super brinde... Veio um Karolitos, o salgadinho de
                  cebola mais duvidoso que a gente já viu... mas o que importa mesmo é que ele
                  arrancou boas risadas da galera. 😂
                </p>
              </div>
              <div className="aspect-[9/16] border-t-2 sm:border-t-0 sm:border-l-2 border-foreground">
                <img
                  src={brindeBingo}
                  alt="Brinde do bingo - Polini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Terapia corporativa — Mari, texto + galeria de imagens */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/15">
            <div className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                🫧 Terapia corporativa
              </div>
              <p className="text-base leading-relaxed">
                Eram aproximadamente 8 horas da manhã. Enquanto alguns respondiam e-mails...
              </p>
              <p className="text-base leading-relaxed">
                Mari, em meio a uma organização, encontrou um item inesperado no armário do
                marketing e resolveu espalhar bolinhas de sabão pelo escritório.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Não sabemos se era uma técnica de relaxamento ou apenas uma excelente forma de
                começar o dia.
              </p>
              <p className="text-base font-semibold">Mas funcionou 😄</p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { img: bolinhasSabaoMari1, alt: "Bolinhas de sabão da Mari" },
                  { img: bolinhasSabaoMari2, alt: "Bolinhas de sabão da Mari 2" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] border-2 border-foreground rounded-2xl overflow-hidden shadow-pop"
                  >
                    <img src={p.img} alt={p.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Homem de amarelo — imagem esquerda, texto direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="grid sm:grid-cols-[160px_1fr] items-center">
              <div className="aspect-[9/16] border-b-2 sm:border-b-0 sm:border-r-2 border-foreground">
                <img
                  src={homemTernoAmarelo}
                  alt="O homem de terno amarelo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🟡 O homem de amarelo existe
                </div>
                <p className="text-base leading-relaxed">Os fãs de From entenderão.</p>
                <p className="text-base leading-relaxed">
                  Depois de tantas teorias sobre a série, o misterioso homem de amarelo apareceu
                  pelos corredores da Roboteasy.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Coincidência? O Robonews prefere não arriscar.
                </p>
              </div>
            </div>
          </div>

          {/* Renan workaholic — texto esquerda, imagem direita */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/10">
            <div className="grid sm:grid-cols-[1fr_200px] items-center">
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  📅 Planejamento dominical
                </div>
                <p className="text-base leading-relaxed">Para alguns Domingo significa:</p>
                <p className="text-base leading-relaxed">Descanso e família.</p>
                <p className="text-base leading-relaxed">
                  Mas, aparentemente, para o Renan, é o dia perfeito para uma reunião de
                  planejamento.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Será comprometimento ou um caso avançado de workaholic? Deixamos essa reflexão com
                  vocês 😄
                </p>
              </div>
              <div className="aspect-[3/4] border-t-2 sm:border-t-0 sm:border-l-2 border-foreground">
                <img
                  src={renanWorkaholic}
                  alt="Renan em reunião de planejamento no domingo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* As Brunas — imagem emoldurada ao lado do texto */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/10">
            <div className="grid sm:grid-cols-[260px_1fr] items-center">
              <div className="p-6 flex justify-center">
                <img
                  src={vozesCabecaBruna}
                  alt="Vozes da cabeça da Bruna"
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🎙️ As Brunas
                </div>
                <p className="text-base leading-relaxed">
                  No meio de uma validação, Felipe chamou naturalmente: "Brunas..."
                </p>
                <p className="text-base leading-relaxed">Acontece que só existe uma.</p>
                <p className="text-base leading-relaxed opacity-70">
                  Ou pelo menos era o que a gente achava... porque, considerando a quantidade de
                  vozes diferentes que a Bruna tem dentro da cabeça dela, talvez o plural faça
                  sentido mesmo. 😂
                </p>
              </div>
            </div>
          </div>

          {/* Prestígio confiscado — texto ao lado da imagem emoldurada */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-primary/10">
            <div className="grid sm:grid-cols-[1fr_240px] items-center">
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🍫 Prestígio confiscado
                </div>
                <p className="text-base leading-relaxed">
                  Rafa nem estava na empresa e mesmo assim, seu chocolate não escapou.
                </p>
                <p className="text-base leading-relaxed">
                  Camila encontrou um Prestígio dando sopa e resolveu garantir que ele não fosse
                  desperdiçado.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Solidariedade ou oportunidade?
                </p>
              </div>
              <div className="p-6 flex justify-center">
                <img
                  src={camilaComendo}
                  alt="Camila comendo o Prestígio"
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
            </div>
          </div>

          {/* Vai que cola — imagem emoldurada ao lado do texto */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/10">
            <div className="grid sm:grid-cols-[240px_1fr] items-center">
              <div className="p-6 flex justify-center">
                <img
                  src={pedroPresente}
                  alt="Pedro pedindo presente de Dia dos Pais"
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🎁 Vai que cola...
                </div>
                <p className="text-base leading-relaxed">
                  Pedro pode até não ser pai... Mas isso não o impediu de se candidatar ao presente
                  de Dia dos Pais. 😄
                </p>
                <p className="text-base leading-relaxed">
                  A proposta dele foi simples: "Olha, não sou... mas aceito presente."
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  É aquele ditado: Quem não chora... mas quem tenta, pelo menos rende um bom flagra
                  para o Robonews. 😄
                </p>
              </div>
            </div>
          </div>

          {/* Otimizando processos — Higor, texto ao lado da imagem emoldurada */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-pink/10">
            <div className="grid sm:grid-cols-[1fr_240px] items-center">
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  🍽️ Otimizando processos
                </div>
                <p className="text-base leading-relaxed">
                  Automação é sobre eficiência. E aparentemente isso também vale para a Festa
                  Junina.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  Higor foi visto com três pratos de uma só vez, provando que reduzir viagens até a
                  mesa também é produtividade. 😄
                </p>
              </div>
              <div className="p-6 flex justify-center">
                <img
                  src={higorFestaJunina}
                  alt="Higor na Festa Junina"
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
            </div>
          </div>

          {/* Piscadinha estratégica — Polini, imagem emoldurada ao lado do texto */}
          <div className="border-2 border-foreground rounded-3xl shadow-pop overflow-hidden bg-teal/10">
            <div className="grid sm:grid-cols-[220px_1fr] items-center">
              <div className="p-6 flex justify-center">
                <img
                  src={poliniDiaD}
                  alt="Polini no Dia D"
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                  👀 Piscadinha estratégica
                </div>
                <p className="text-base leading-relaxed">
                  Durante o Dia D, o Polini foi flagrado em um momento... curioso 😴💤 Ou melhor,
                  bem na hora de uma piscadinha estratégica.
                </p>
                <p className="text-base leading-relaxed">
                  E, como todo bom fotógrafo, quem estava com a câmera escolheu exatamente esse
                  instante para registrar a cena. Resultado: um flagra digno de Robonews.
                </p>
                <p className="text-base leading-relaxed opacity-70">
                  A pergunta que fica é... será que o dia D estava deixando todos sonolentos?
                </p>
                <p className="text-base leading-relaxed pt-2">
                  Brincadeiras à parte, já contou pra gente o que achou do último Dia D?
                </p>
                <a
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JxF0lxzZRUqN9W5nQ-laof67LH6iS1RFrXuhyx1oj1FUQVYySVRHSDQwSjdWMFZCSTczODBCSDIxVS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink text-pink-foreground px-6 py-3 rounded-full font-bold text-sm w-fit shadow-pop hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
                >
                  Avaliar o Dia D <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOLÃO DA COPA */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-background/20 pt-4 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold">🏆 Bolão da Copa</h2>
          </div>

          <div className="mb-10 space-y-2 max-w-2xl">
            <p className="text-background/70 text-lg leading-relaxed">Toda rodada o jogo muda.</p>
            <p className="text-background/70 text-base leading-relaxed">
              Acompanhe a classificação, os destaques e as histórias do nosso bolão.
            </p>
          </div>

          <div className="bg-background text-foreground border-2 border-background/10 rounded-3xl shadow-pop p-8 space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              🏁 Fim de jogo
            </div>
            <p className="text-lg leading-relaxed">A Copa chegou ao fim... e nosso bolão também!</p>
            <p className="text-xl font-bold">
              E o grande campeão foi o <span className="text-pink">Adriano</span>! 👏🏆
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Enquanto muita gente apostava nos favoritos, ele resolveu confiar na própria intuição
              e fez uma jogada ousada: foi contra a maré nos últimos jogos. No fim, a estratégia deu
              certo e garantiu o lugar mais alto do pódio.
            </p>
            <p className="text-base leading-relaxed">
              Confira o ranking final, descubra como foi essa reta final emocionante e acompanhe uma
              conversa especial com o grande campeão da competição.
            </p>

            {/* Vídeo do YouTube */}
            <div className="flex justify-center">
              <div className="aspect-[9/16] w-full max-w-xs rounded-2xl overflow-hidden border-2 border-foreground shadow-pop">
                <iframe
                  src="https://www.youtube.com/embed/xo6TEK36Ddc"
                  title="Bolão da Copa"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="text-base font-semibold pt-2">
              Parabéns ao Adriano e a todos os participantes. Até a próxima Copa! ⚽🏆
            </p>
          </div>
        </div>
      </section>

      {/* ESPAÇO RH */}
      <section className="container mx-auto px-6 py-16">
        <div className="border-t-2 border-foreground pt-4 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold">💙 Espaço RH</h2>
        </div>

        <div className="mb-10 space-y-4 max-w-2xl">
          <p className="text-lg leading-relaxed">Um cantinho no Robonews para falar de gente.</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Nesse quadro, o RH compartilha reflexões, dicas e conteúdos que nos ajudam a crescer
            juntos.
          </p>
          <p className="text-base leading-relaxed">
            E nesta edição, queremos aproveitar para reforçar o objetivo dos nossos rituais de
            conexão.
          </p>
        </div>

        {/* O que acontece todo mês */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            O que acontece todo mês
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Robonews",
                freq: "quinzenal",
                desc: "Nossa newsletter interna reúne as principais novidades da empresa de forma leve e objetiva. É onde compartilhamos projetos, conquistas, atualizações, histórias do time e reconhecimentos do dia a dia, sempre com a ajuda dos nossos informantes voluntários e aquele toque de bom humor que já faz parte do Robonews.",
              },
              {
                title: "Easy Talk",
                freq: "mensal",
                desc: "Nosso encontro mensal de alinhamento com toda a empresa. Cada liderança compartilha os principais resultados, projetos e movimentos da sua área, trazendo transparência sobre o momento da Roboteasy e os próximos passos da nossa jornada.",
              },
              {
                title: "Dia D",
                freq: "mensal",
                desc: "Um encontro dedicado a um único tema por vez. A cada edição, um time, colaborador ou convidado assume o protagonismo para compartilhar conhecimento, apresentar uma inovação, dividir aprendizados ou trazer novas perspectivas. Também é um espaço para reconhecer pessoas que vivem a cultura Roboteasy no dia a dia.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-card border-2 border-foreground rounded-2xl p-6 shadow-pop"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-bold text-lg">{r.title}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-pink">
                    ({r.freq})
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* O que acontece anualmente */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            O que acontece anualmente
          </h3>
          <div className="bg-card border-2 border-foreground rounded-2xl p-6 shadow-pop">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-bold text-lg">Convenção</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-pink">
                (anual)
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O encontro que marca o início de um novo ciclo. Reunimos todo o time para compartilhar
              a estratégia da empresa, alinhar metas, fortalecer nossa cultura e dar o pontapé
              inicial na jornada que vamos construir juntos ao longo do ano.
            </p>
          </div>
        </div>

        {/* Observação */}
        <div className="bg-teal/10 border-2 border-foreground rounded-2xl p-6">
          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Observação
          </div>
          <p className="text-sm leading-relaxed mb-2">
            A principal diferença entre os nossos rituais está no propósito de cada um.
          </p>
          <p className="text-sm leading-relaxed">
            O Easy Talk é o momento de alinhamento geral da empresa, com atualizações de todas as
            áreas. Já o Dia D aprofunda um único tema por encontro, dando espaço para compartilhar
            conhecimento, experiências, inovação e histórias que inspiram nossa evolução.
          </p>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="bg-teal/10">
        <div className="container mx-auto px-6 py-12">
          <div className="pb-6">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              🚀 Vem aí...
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Tem muita novidade chegando!</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                emoji: "🎤",
                title: "EasyTalk",
                desc: "Agora acontece sempre na segunda quinta do mês.",
              },
              {
                emoji: "📅",
                title: "Dia D",
                desc: "Toda terceira quinta-feira do mês.",
              },
              {
                emoji: "🎂",
                title: "Aniversariantes",
                desc: "Último dia útil de cada mês.",
              },
              {
                emoji: "✨",
                title: "Nexus",
                desc: "Lançamento da nova geração do orquestrador em breve.",
              },
            ].map((e, i) => (
              <div
                key={i}
                className="bg-background border-2 border-foreground rounded-2xl p-5 flex items-start gap-5 hover:translate-x-1 transition shadow-pop"
              >
                <div className="text-3xl shrink-0 mt-0.5">{e.emoji}</div>
                <div>
                  <div className="font-bold text-base mb-1">{e.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-base font-semibold mt-6">Fiquem ligados! 🚀</p>
        </div>
      </section>

      {/* RECADINHOS PAROQUIAIS */}
      <section className="container mx-auto px-6 py-12">
        <div className="border-t-2 border-foreground pt-4 pb-2">
          <img
            src={recadinhosLogo}
            alt="Recadinhos Paroquiais"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="mb-10 space-y-2 max-w-2xl">
          <p className="text-lg leading-relaxed">O espaço oficial dos avisos!</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Fica de olho que sempre tem novidade vindo aí...
          </p>
        </div>

        <div className="space-y-6">
          {/* Apontamento de horas */}
          <div className="bg-card border-2 border-foreground rounded-3xl shadow-pop overflow-hidden">
            <div className="grid md:grid-cols-[1fr_220px] items-center">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⏰</span>
                  <h3 className="text-2xl font-bold">Apontamento de horas</h3>
                </div>
                <p className="text-base leading-relaxed">Não deixe para a última hora!</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Mantenha seus apontamentos em dia e evite retrabalho no fechamento do mês.
                </p>
              </div>
              <div className="p-6 flex justify-center">
                <img
                  src={coisasParaFazer}
                  alt=""
                  className="w-full h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
            </div>
            <div className="border-t-2 border-foreground/10 bg-teal/10 p-6">
              <p className="text-sm leading-relaxed">
                <strong>Observação:</strong> agora os líderes serão notificados automaticamente
                quando o seu time não realizar os apontamentos corretamente.
              </p>
            </div>
          </div>

          {/* Comunicados Oficiais */}
          <div className="bg-card border-2 border-foreground rounded-3xl p-8 shadow-pop space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📢</span>
              <h3 className="text-2xl font-bold">
                Não perca as notificações do canal de Comunicados Oficiais
              </h3>
            </div>
            <p className="text-base leading-relaxed">
              Para não perder nenhuma informação importante, reserve um minutinho para:
            </p>

            <div className="border-t border-foreground/10 pt-4 space-y-2">
              <p className="text-base font-semibold">
                ⭐ Favoritar o canal "Comunicados Oficiais - Roboteasy"
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Basta clicar e segurar com o lado esquerdo o canal, arrastando para a sua aba de
                favoritos.
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-4 space-y-2">
              <p className="text-base font-semibold">🔔 Ativar as notificações do canal</p>
              <p className="text-sm text-muted-foreground leading-relaxed">É simples:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clique nos ... ao lado do canal.
              </p>

              <div className="flex justify-center py-2">
                <img
                  src={comunicadosPasso1}
                  alt="Menu do canal - clique nos ..."
                  className="w-full max-w-[240px] h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                Depois, acesse Notificações do canal e habilite os avisos. Exemplo de como deve
                ficar:
              </p>

              <div className="flex justify-center py-2">
                <img
                  src={comunicadosPasso2}
                  alt="Notificações do canal habilitadas"
                  className="w-full max-w-sm h-auto rounded-2xl border-2 border-foreground shadow-pop"
                />
              </div>
            </div>

            <p className="text-base leading-relaxed pt-2">
              Sempre que houver um comunicado importante, utilizaremos a marcação{" "}
              <strong>@Comunicados Oficiais - Roboteasy</strong>.
            </p>
            <p className="text-base font-semibold">
              Assim, fica muito mais fácil acompanhar tudo o que acontece na nossa jornada. ⛰️
            </p>
          </div>
        </div>
      </section>

      {/* SEJA UM INFORMANTE */}
      <section className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-pink/20 text-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            👀 Seja um informante
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seja um informante do Robonews</h2>
          <p className="text-background/70 text-base leading-relaxed mb-3">
            Os melhores flagras continuam rendendo boas histórias... E agora também novos brindes
            desbloqueados! 🎁
          </p>
          <p className="text-background/70 text-base leading-relaxed mb-3">
            Então já sabe: viu algo curioso ou flagrou uma cena digna de virar notícia?
          </p>
          <p className="text-lg font-bold mb-3">Manda pra gente!</p>
          <p className="text-background/70 text-base leading-relaxed">
            A próxima edição pode ter um pedacinho da sua história (ou do seu colega 😄).
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
