import { useState } from 'react';
import {
  Dumbbell,
  Flame,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Star,
  Phone,
  ExternalLink,
  ShieldCheck,
  Droplets,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
  ChevronDown,
  Building2,
} from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5519989079656?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Flexus%20Fitness.';

interface Unidade {
  id: 'sao-jose' | 'parque-servidores';
  badge: string;
  nome: string;
  bairro: string;
  endereco: string;
  complemento: string;
  horarios: { dia: string; hora: string; destaque?: boolean }[];
  mapsUrl: string;
  whatsappText: string;
}

const UNIDADES: Unidade[] = [
  {
    id: 'sao-jose',
    badge: 'UNIDADE I',
    nome: 'Flexus Fitness • São José',
    bairro: 'São José • Paulínia - SP',
    endereco: 'Av. Regina Basseto Bordignon, 579 - São José',
    complemento: 'Paulínia - SP, CEP 13140-000',
    horarios: [
      { dia: 'Segunda a Quinta-feira', hora: '04:30 – 23:00', destaque: true },
      { dia: 'Sexta-feira', hora: '04:30 – 22:00', destaque: true },
      { dia: 'Sábado', hora: '07:00 – 14:00' },
      { dia: 'Domingo', hora: '08:00 – 11:00' },
    ],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Regina+Basseto+Bordignon,+579+-+S%C3%A3o+Jos%C3%A9,+Paul%C3%ADnia+-+SP',
    whatsappText:
      'https://wa.me/5519989079656?text=Ol%C3%A1!%20Gostaria%20de%20informações%20e%20aula%20experimental%20na%20Unidade%20São%20José.',
  },
  {
    id: 'parque-servidores',
    badge: 'UNIDADE II',
    nome: 'Flexus Fitness II • Parque dos Servidores',
    bairro: 'Parque dos Servidores • Paulínia - SP',
    endereco: 'Parque dos Servidores • Paulínia - SP',
    complemento: 'Consulte a localização exata e horários pelo WhatsApp',
    horarios: [
      { dia: 'Segunda a Quinta-feira', hora: '04:30 – 23:00', destaque: true },
      { dia: 'Sexta-feira', hora: '04:30 – 22:00', destaque: true },
      { dia: 'Sábado', hora: '07:00 – 14:00' },
      { dia: 'Domingo', hora: '08:00 – 11:00' },
    ],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Flexus+Fitness+Parque+dos+Servidores+Paulinia+SP',
    whatsappText:
      'https://wa.me/5519989079656?text=Ol%C3%A1!%20Gostaria%20de%20informações%20e%20aula%20experimental%20na%20Unidade%20II%20(Parque%20dos%20Servidores).',
  },
];

const RECIPIENTES = [
  { label: 'Copo de 250 ml', ml: 250, unitSingular: 'copo', unitPlural: 'copos' },
  { label: 'Garrafa de 500 ml', ml: 500, unitSingular: 'garrafa', unitPlural: 'garrafas' },
  { label: 'Garrafa de 750 ml', ml: 750, unitSingular: 'garrafa', unitPlural: 'garrafas' },
  { label: 'Garrafa de 1 litro', ml: 1000, unitSingular: 'garrafa', unitPlural: 'garrafas' },
];

export function App() {
  // Estado das Unidades
  const [unidadeAtiva, setUnidadeAtiva] = useState<'sao-jose' | 'parque-servidores'>('sao-jose');

  // Estados da Calculadora Flexus Hidratação
  const [pesoInput, setPesoInput] = useState<string>('85');
  const [alturaInput, setAlturaInput] = useState<string>('170');
  const [restricaoLiquidos, setRestricaoLiquidos] = useState<boolean>(false);
  const [pesoCalculado, setPesoCalculado] = useState<number>(85);
  const [alturaCalculada, setAlturaCalculada] = useState<string>('170');
  const [recipienteMl, setRecipienteMl] = useState<number>(250);
  const [copiado, setCopiado] = useState<boolean>(false);
  const [mostrarFontes, setMostrarFontes] = useState<boolean>(false);

  const unidadeSelecionada =
    UNIDADES.find((u) => u.id === unidadeAtiva) || UNIDADES[0];

  const pesoNumerico = Number(pesoInput);
  const pesoValido = !isNaN(pesoNumerico) && pesoNumerico >= 40 && pesoNumerico <= 150;

  // Cálculo: 30 ml/kg a 35 ml/kg (ex: 85 kg -> 2,55 a 2,98 L/dia)
  const minLitros = (pesoCalculado * 30) / 1000;
  const maxLitros = (pesoCalculado * 35) / 1000;

  const recipienteAtual =
    RECIPIENTES.find((r) => r.ml === recipienteMl) || RECIPIENTES[0];
  const minUnidades = (minLitros * 1000) / recipienteAtual.ml;
  const maxUnidades = (maxLitros * 1000) / recipienteAtual.ml;

  const formatarNumero = (valor: number, casas = 2) =>
    valor.toFixed(casas).replace('.', ',');

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pesoValido) return;
    setPesoCalculado(pesoNumerico);
    setAlturaCalculada(alturaInput.trim());
  };

  const handleSelecionarAtalho = (valor: number) => {
    setPesoInput(String(valor));
    setPesoCalculado(valor);
  };

  const handleLimpar = () => {
    setPesoInput('85');
    setAlturaInput('170');
    setPesoCalculado(85);
    setAlturaCalculada('170');
    setRestricaoLiquidos(false);
    setRecipienteMl(250);
  };

  const handleCopiarResultado = async () => {
    const texto = `Flexus Hidratação • Referência diária para ${pesoCalculado} kg: ${formatarNumero(
      minLitros
    )}–${formatarNumero(maxLitros)} L/dia (${formatarNumero(
      minUnidades,
      1
    )} a ${formatarNumero(maxUnidades, 1)} ${
      recipienteAtual.unitPlural
    } de ${recipienteAtual.ml} ml).`;
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#2A2A2E]/80 bg-[#0B0B0C]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo-flexus_2.jpg"
              alt="Logotipo Flexus Fitness"
              className="h-10 w-10 rounded-lg border border-[#FF6B00]/50 object-cover"
            />
            <div>
              <span className="block text-lg font-black tracking-tight text-white">
                FLEXUS <span className="text-[#FF6B00]">FITNESS</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                São José • Parque dos Servidores
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 lg:flex">
            <a href="#unidades" className="transition hover:text-[#FF6B00]">
              Unidades
            </a>
            <a href="#modalidades" className="transition hover:text-[#FF6B00]">
              Modalidades
            </a>
            <a href="#hidratacao" className="transition hover:text-[#FF6B00]">
              Flexus Hidratação
            </a>
            <a href="#horarios" className="transition hover:text-[#FF6B00]">
              Horários
            </a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-[#E55A00]"
          >
            Aula Experimental
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#2A2A2E] py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                <Flame className="h-3.5 w-3.5" />
                2 Unidades em Paulínia • São José & Pq. dos Servidores
              </div>

              <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl">
                Sua evolução <br />
                começa no <br />
                <span className="text-[#FF6B00]">próximo treino.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                Estrutura completa de musculação, aulas coletivas dinâmicas e
                Muay Thai nas unidades São José e Parque dos Servidores para
                você treinar perto de casa.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-[#E55A00]"
                >
                  Agendar aula experimental
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <a
                  href="#unidades"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#141416] px-7 py-4 text-sm font-bold text-white transition hover:border-neutral-600"
                >
                  Ver as 2 unidades
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#2A2A2E] pt-6 text-xs font-semibold text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  Wellhub (Gympass)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  TotalPass
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  Aberta às 04h30 na semana
                </div>
              </div>
            </div>

            {/* CARD DESTAQUE FACHADA DA ACADEMIA */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#141416] p-5 shadow-2xl sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                    01 / NOSSA ESTRUTURA
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#2A2A2E]">
                  <img
                    src="/local-flexus-ia.jpg"
                    alt="Fachada da academia Flexus Fitness em Paulínia"
                    className="h-64 w-full object-cover sm:h-80"
                  />
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-[#2A2A2E] pt-5">
                  <img
                    src="/logo-flexus_2.jpg"
                    alt="Símbolo Flexus Fitness"
                    className="h-12 w-12 shrink-0 rounded-xl border border-[#FF6B00]/40 object-cover"
                  />
                  <div>
                    <p className="text-sm italic text-neutral-300">
                      "Ótimo lugar, professores bem atenciosos e boas
                      instalações para treinar!"
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Avaliação verificada no Google • Paulínia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS UNIDADES (FLEXUS I E FLEXUS II) */}
      <section id="unidades" className="border-b border-[#2A2A2E] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                02 / ONDE TREINAR EM PAULÍNIA
              </span>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Conheça nossas duas unidades
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-400">
              Escolha a unidade mais próxima da sua rotina em Paulínia e agende
              sua aula experimental gratuita.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {UNIDADES.map((unidade) => (
              <div
                key={unidade.id}
                className="flex flex-col justify-between rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8 transition hover:border-[#FF6B00]/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                      <Building2 className="h-3.5 w-3.5" />
                      {unidade.badge}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {unidade.bairro}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black uppercase">
                    {unidade.nome}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    {unidade.endereco}
                    <br />
                    <span className="text-neutral-500">{unidade.complemento}</span>
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={unidade.whatsappText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-[#E55A00]"
                  >
                    Agendar nesta unidade
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={unidade.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition hover:border-neutral-600"
                  >
                    <MapPin className="h-4 w-4 text-[#FF6B00]" />
                    Ver no Mapa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section id="modalidades" className="border-b border-[#2A2A2E] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              03 / TREINAMENTO
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Modalidades para o seu objetivo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-7 transition hover:border-[#FF6B00]/50">
              <div className="mb-5 inline-flex rounded-xl bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold uppercase">Musculação</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Equipamentos modernos e bem conservados com professores
                atenciosos para hipertrofia, emagrecimento e condicionamento.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-7 transition hover:border-[#FF6B00]/50">
              <div className="mb-5 inline-flex rounded-xl bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold uppercase">
                Aulas Coletivas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Treinos em grupo com alta energia para quem busca motivação
                extra, gasto calórico elevado e dinamismo na rotina.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-7 transition hover:border-[#FF6B00]/50">
              <div className="mb-5 inline-flex rounded-xl bg-[#FF6B00]/10 p-3 text-[#FF6B00]">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold uppercase">Muay Thai</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Técnica, disciplina, defesa pessoal e preparo físico intenso
                para todos os níveis, do iniciante ao avançado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXUS HIDRATAÇÃO (FERRAMENTA DE BEM-ESTAR) */}
      <section
        id="hidratacao"
        className="relative overflow-hidden border-b border-[#2A2A2E] bg-[#0E0E10] py-20"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Cabeçalho da Ferramenta */}
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#2A2A2E] pb-10 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="/logo-flexus_2.jpg"
                  alt="Logotipo Flexus Fitness"
                  className="h-11 w-11 rounded-xl border border-[#FF6B00]/40 object-cover"
                />
                <div>
                  <span className="block text-base font-extrabold text-white">
                    Flexus Hidratação
                  </span>
                  <span className="block text-xs text-neutral-400">
                    Saúde em cada hábito.
                  </span>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2A2A2E] bg-[#141416] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
                SEU BEM-ESTAR
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Um cuidado simples. Todos os dias.
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
                Seu próximo hábito <br />
                começa com <span className="text-[#FF6B00]">um gole.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                Descubra uma referência de líquidos para o seu dia. Informe seu
                peso e veja a estimativa em litros, copos ou garrafas.
              </p>
            </div>
          </div>

          {/* Grid Principal da Calculadora */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* 01 SEUS DADOS */}
            <form
              onSubmit={handleCalcular}
              className="flex flex-col justify-between rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 sm:p-8 lg:col-span-6"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6B00]/15 text-xs font-extrabold text-[#FF6B00]">
                    01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    SEUS DADOS
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  Vamos começar?
                </h3>
                <p className="mt-1 text-xs text-neutral-400">
                  Referência educativa para adultos saudáveis.
                </p>

                {/* Inputs Peso e Altura */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="peso-input"
                      className="block text-xs font-bold text-neutral-200"
                    >
                      Peso atual
                    </label>
                    <div className="mt-2 flex items-center rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-4 py-3 focus-within:border-[#FF6B00]">
                      <input
                        id="peso-input"
                        type="number"
                        min={40}
                        max={150}
                        step="0.5"
                        value={pesoInput}
                        onChange={(e) => setPesoInput(e.target.value)}
                        className="w-full bg-transparent text-lg font-bold text-white outline-none"
                      />
                      <span className="text-xs font-semibold text-neutral-500">
                        kg
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="altura-input"
                      className="block text-xs font-bold text-neutral-200"
                    >
                      Altura{' '}
                      <span className="font-normal text-neutral-500">
                        opcional
                      </span>
                    </label>
                    <div className="mt-2 flex items-center rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-4 py-3 focus-within:border-[#FF6B00]">
                      <input
                        id="altura-input"
                        type="number"
                        min={100}
                        max={230}
                        value={alturaInput}
                        onChange={(e) => setAlturaInput(e.target.value)}
                        className="w-full bg-transparent text-lg font-bold text-white outline-none"
                      />
                      <span className="text-xs font-semibold text-neutral-500">
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-neutral-500">
                  A altura não altera esta estimativa por peso.
                </p>

                {/* Atalhos de peso */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[60, 70, 80, 90].map((peso) => (
                    <button
                      key={peso}
                      type="button"
                      onClick={() => handleSelecionarAtalho(peso)}
                      className={`rounded-lg border px-3.5 py-2 text-xs font-bold transition ${
                        Number(pesoInput) === peso
                          ? 'border-[#FF6B00] bg-[#FF6B00]/15 text-[#FF6B00]'
                          : 'border-[#2A2A2E] bg-[#0B0B0C] text-neutral-300 hover:border-neutral-600'
                      }`}
                    >
                      {peso} kg
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-[11px] text-neutral-500">
                  Esta versão calcula pesos de 40 a 150 kg. Fora dessa faixa,
                  peça uma avaliação individual.
                </p>

                {!pesoValido && (
                  <p className="mt-2 text-xs font-semibold text-amber-400">
                    Informe um peso entre 40 kg e 150 kg para calcular.
                  </p>
                )}

                {/* Checkbox Restrição */}
                <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#2A2A2E] bg-[#0B0B0C]/70 p-3.5">
                  <input
                    type="checkbox"
                    checked={restricaoLiquidos}
                    onChange={(e) => setRestricaoLiquidos(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-neutral-600 accent-[#FF6B00]"
                  />
                  <span className="text-xs font-medium text-neutral-300">
                    Tenho orientação médica para restringir líquidos.
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={!pesoValido}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-6 py-4 text-sm font-extrabold text-black transition hover:bg-[#E55A00] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Calcular minha estimativa
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-[11px] text-neutral-500">
                  Seus dados ficam apenas nesta página e não são salvos.
                </p>
              </div>
            </form>

            {/* 02 SUA REFERÊNCIA DIÁRIA */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#FF6B00]/30 bg-gradient-to-br from-[#23160D] via-[#171412] to-[#141416] p-6 sm:p-8 lg:col-span-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6B00]/20 text-xs font-extrabold text-[#FF6B00]">
                    02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
                    SUA REFERÊNCIA DIÁRIA
                  </span>
                </div>

                {restricaoLiquidos ? (
                  <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5">
                    <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      Siga exclusivamente sua prescrição médica
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                      Como você indicou ter orientação médica para restrição de
                      líquidos, a estimativa geral por peso não deve ser usada.
                      Converse com seu médico ou nutricionista sobre o limite
                      diário seguro para você.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="mt-4 text-xs text-neutral-400">
                      Para {pesoCalculado} kg
                      {alturaCalculada
                        ? ` · altura informada: ${alturaCalculada} cm`
                        : ''}
                    </p>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        {formatarNumero(minLitros)}–{formatarNumero(maxLitros)}
                      </span>
                      <span className="text-xl font-extrabold text-[#FF6B00]">
                        L/dia
                      </span>
                    </div>

                    <div className="mt-5 border-l-2 border-[#FF6B00] pl-4">
                      <p className="text-xs font-bold text-white">
                        Líquidos totais, não só água pura.
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                        Inclui a água dos alimentos e das outras bebidas. Não é
                        uma quantidade de água extra para beber.
                      </p>
                    </div>

                    {/* Seletor de recipiente */}
                    <div className="mt-6">
                      <label
                        htmlFor="recipiente-select"
                        className="block text-xs font-semibold text-neutral-400"
                      >
                        Para visualizar esse volume
                      </label>
                      <select
                        id="recipiente-select"
                        value={recipienteMl}
                        onChange={(e) => setRecipienteMl(Number(e.target.value))}
                        className="mt-2 w-full rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-[#FF6B00]"
                      >
                        {RECIPIENTES.map((r) => (
                          <option key={r.ml} value={r.ml}>
                            {r.label}
                          </option>
                        ))}
                      </select>

                      <div className="mt-4">
                        <p className="text-2xl font-black text-white">
                          {formatarNumero(minUnidades, 1)} a{' '}
                          {formatarNumero(maxUnidades, 1)}{' '}
                          {recipienteAtual.unitPlural}
                        </p>
                        <p className="mt-1 text-[11px] text-neutral-400">
                          Equivalência de volume; não é uma meta de água pura.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCopiarResultado}
                  disabled={restricaoLiquidos}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-4 py-2.5 text-xs font-bold text-white transition hover:border-neutral-600 disabled:opacity-50"
                >
                  {copiado ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#FF6B00]" />
                      Resultado copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-neutral-400" />
                      Copiar resultado
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleLimpar}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-4 py-2.5 text-xs font-bold text-neutral-300 transition hover:border-neutral-600"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-neutral-400" />
                  Limpar
                </button>
              </div>
            </div>
          </div>

          {/* 3 Cards Educativos (01 / 02 / 03) */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
              <span className="text-xs font-extrabold text-[#FF6B00]">01 /</span>
              <h4 className="mt-2 text-base font-extrabold text-white">
                Distribua ao longo do dia
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Deixe sua garrafa por perto e beba regularmente, sem tentar
                compensar tudo de uma vez.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
              <span className="text-xs font-extrabold text-[#FF6B00]">02 /</span>
              <h4 className="mt-2 text-base font-extrabold text-white">
                Calor e treino fazem diferença
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Suor e atividade física podem aumentar as perdas. A conta não
                acrescenta uma quantidade automática para o treino.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
              <span className="text-xs font-extrabold text-[#FF6B00]">03 /</span>
              <h4 className="mt-2 text-base font-extrabold text-white">
                Seu corpo não é uma fórmula
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Use o resultado como referência inicial. Rotina, alimentação e
                saúde mudam a necessidade individual.
              </p>
            </div>
          </div>

          {/* Aviso de Contexto + Acordeão de Fontes */}
          <div className="mt-6 rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
            <p className="text-xs leading-relaxed text-neutral-400">
              <strong className="text-neutral-200">Atenção ao seu contexto.</strong>{' '}
              Crianças, gestantes, pessoas que amamentam ou que têm doenças
              renais, cardíacas ou orientação de restrição de líquidos precisam
              de orientação individual. Este cálculo não substitui avaliação
              médica ou nutricional. Não force a ingestão além da sua
              necessidade.
            </p>

            <button
              type="button"
              onClick={() => setMostrarFontes(!mostrarFontes)}
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] transition hover:underline"
            >
              <Droplets className="h-3.5 w-3.5" />
              Como funciona o cálculo e quais são as fontes?
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  mostrarFontes ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mostrarFontes && (
              <div className="mt-4 border-t border-[#2A2A2E] pt-4 text-xs leading-relaxed text-neutral-400">
                A faixa estimada utiliza a referência prática de{' '}
                <strong className="text-neutral-200">30 a 35 ml por kg</strong>{' '}
                de peso corporal ao dia para adultos saudáveis, alinhada às
                diretrizes gerais de ingestão adequada de água total (alimentos +
                bebidas) do <em>Institute of Medicine (IOM)</em> e da{' '}
                <em>European Food Safety Authority (EFSA)</em>.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONVÊNIOS */}
      <section id="convenios" className="border-b border-[#2A2A2E] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#FF6B00]/30 bg-gradient-to-r from-[#1A1410] to-[#141416] p-8 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <ShieldCheck className="h-4 w-4" />
                Benefícios Corporativos
              </div>
              <h3 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                Treine com Wellhub ou TotalPass
              </h3>
              <p className="mt-2 max-w-xl text-sm text-neutral-300">
                Utilize o benefício da sua empresa para treinar nas unidades da
                Flexus Fitness sem burocracia. Consulte planos elegíveis pelo
                WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-5 py-3 text-sm font-extrabold tracking-wide text-white">
                WELLHUB (GYMPASS)
              </span>
              <span className="rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-5 py-3 text-sm font-extrabold tracking-wide text-white">
                TOTALPASS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HORÁRIOS E LOCALIZAÇÃO COM SELETOR DE UNIDADE */}
      <section id="horarios" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Seletor de Unidade */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                04 / HORÁRIOS E ENDEREÇO
              </span>
              <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
                Selecione a unidade
              </h2>
            </div>

            <div className="inline-flex rounded-xl border border-[#2A2A2E] bg-[#141416] p-1">
              <button
                type="button"
                onClick={() => setUnidadeAtiva('sao-jose')}
                className={`rounded-lg px-4 py-2 text-xs font-extrabold uppercase transition ${
                  unidadeAtiva === 'sao-jose'
                    ? 'bg-[#FF6B00] text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Unidade I • São José
              </button>
              <button
                type="button"
                onClick={() => setUnidadeAtiva('parque-servidores')}
                className={`rounded-lg px-4 py-2 text-xs font-extrabold uppercase transition ${
                  unidadeAtiva === 'parque-servidores'
                    ? 'bg-[#FF6B00] text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Unidade II • Pq. Servidores
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Horários */}
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <Clock className="h-4 w-4" />
                FUNCIONAMENTO • {unidadeSelecionada.badge}
              </div>
              <h3 className="mt-2 text-2xl font-black uppercase">
                Horários de Treino
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                {unidadeSelecionada.horarios.map((item, idx) => (
                  <div
                    key={item.dia}
                    className={`flex justify-between ${
                      idx < unidadeSelecionada.horarios.length - 1
                        ? 'border-b border-[#2A2A2E] pb-3'
                        : 'pt-1'
                    }`}
                  >
                    <span className="font-medium text-neutral-300">
                      {item.dia}
                    </span>
                    <span
                      className={`font-bold ${
                        item.destaque ? 'text-[#FF6B00]' : 'text-white'
                      }`}
                    >
                      {item.hora}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div
              id="localizacao"
              className="flex flex-col justify-between rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                  <MapPin className="h-4 w-4" />
                  LOCALIZAÇÃO • {unidadeSelecionada.badge}
                </div>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  {unidadeSelecionada.nome}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  {unidadeSelecionada.endereco}
                  <br />
                  {unidadeSelecionada.complemento}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={unidadeSelecionada.whatsappText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-6 py-4 text-sm font-extrabold uppercase text-black transition hover:bg-[#E55A00]"
                >
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp: (19) 98907-9656
                </a>
                <a
                  href={unidadeSelecionada.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] px-6 py-3.5 text-sm font-bold text-white transition hover:border-neutral-600"
                >
                  Abrir rota no Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2A2A2E] bg-[#080809] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-neutral-500 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-flexus_2.jpg"
              alt="Flexus Fitness"
              className="h-7 w-7 rounded object-cover"
            />
            <div>
              <p className="font-bold text-neutral-300">
                FLEXUS FITNESS · Movimento e cuidado, todos os dias.
              </p>
              <p className="text-[11px] text-neutral-500">
                São José · Parque dos Servidores • Paulínia - SP
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/flexus_fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-neutral-400 transition hover:text-[#FF6B00]"
          >
            <ExternalLink className="h-4 w-4" />
            @flexus_fitness
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;