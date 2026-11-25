import React from 'react';
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
  Instagram,
  ShieldCheck,
} from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5519989079656?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Flexus%20Fitness.';

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#2A2A2E]/80 bg-[#0B0B0C]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Logo Flexus Fitness"
              className="h-10 w-10 rounded-lg border border-[#FF6B00]/40 object-cover"
            />
            <div>
              <span className="block text-lg font-black tracking-tight text-white">
                FLEXUS <span className="text-[#FF6B00]">FITNESS</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                Paulínia • SP
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
            <a href="#modalidades" className="transition hover:text-[#FF6B00]">
              Modalidades
            </a>
            <a href="#convenios" className="transition hover:text-[#FF6B00]">
              Convênios
            </a>
            <a href="#horarios" className="transition hover:text-[#FF6B00]">
              Horários
            </a>
            <a href="#localizacao" className="transition hover:text-[#FF6B00]">
              Localização
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
      <section className="relative overflow-hidden border-b border-[#2A2A2E] py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                <Flame className="h-3.5 w-3.5" />
                Academia em Paulínia • São José
              </div>

              <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl">
                Sua evolução <br />
                começa no <br />
                <span className="text-[#FF6B00]">próximo treino.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                Estrutura completa de musculação, aulas coletivas dinâmicas e
                Muay Thai com acompanhamento próximo para você atingir seus
                resultados com consistência.
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
                  href="#modalidades"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#141416] px-7 py-4 text-sm font-bold text-white transition hover:border-neutral-600"
                >
                  Conhecer modalidades
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#2A2A2E] pt-6 text-xs font-semibold text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  Aceitamos Wellhub (Gympass)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  Aceitamos TotalPass
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" />
                  Aberta às 04h30 na semana
                </div>
              </div>
            </div>

            {/* CARD DESTAQUE IDENTIDADE */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                    01 / AMBIENTE FLEXUS
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <img
                    src="/logo.jpg"
                    alt="Emblema Flexus Fitness"
                    className="h-44 w-44 rounded-2xl border-2 border-[#FF6B00]/50 object-cover shadow-lg shadow-[#FF6B00]/10"
                  />
                </div>

                <div className="mt-6 space-y-3 border-t border-[#2A2A2E] pt-6">
                  <p className="text-sm italic text-neutral-300">
                    "Ótimo lugar, professores bem atenciosos e boas instalações
                    para treinar!"
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Avaliação verificada no Google • Paulínia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section id="modalidades" className="border-b border-[#2A2A2E] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              02 / TREINAMENTO
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
                Utilize o benefício da sua empresa para treinar na Flexus
                Fitness sem burocracia. Consulte planos elegíveis pelo
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

      {/* HORÁRIOS E LOCALIZAÇÃO */}
      <section id="horarios" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Horários */}
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <Clock className="h-4 w-4" />
                03 / FUNCIONAMENTO
              </div>
              <h3 className="mt-2 text-2xl font-black uppercase">
                Horários de Treino
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[#2A2A2E] pb-3">
                  <span className="font-medium text-neutral-300">
                    Segunda a Quinta-feira
                  </span>
                  <span className="font-bold text-[#FF6B00]">04:30 – 23:00</span>
                </div>
                <div className="flex justify-between border-b border-[#2A2A2E] pb-3">
                  <span className="font-medium text-neutral-300">
                    Sexta-feira
                  </span>
                  <span className="font-bold text-[#FF6B00]">04:30 – 22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#2A2A2E] pb-3">
                  <span className="font-medium text-neutral-300">Sábado</span>
                  <span className="font-bold text-white">07:00 – 14:00</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-medium text-neutral-300">Domingo</span>
                  <span className="font-bold text-white">08:00 – 11:00</span>
                </div>
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
                  04 / ONDE ESTAMOS
                </div>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  Fácil acesso em Paulínia
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  Av. Regina Basseto Bordignon, 579 - São José
                  <br />
                  Paulínia - SP, CEP 13140-000
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-6 py-4 text-sm font-extrabold uppercase text-black transition hover:bg-[#E55A00]"
                >
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp: (19) 98907-9656
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Regina+Basseto+Bordignon,+579+-+S%C3%A3o+Jos%C3%A9,+Paul%C3%ADnia+-+SP"
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
          <p>
            © {new Date().getFullYear()} Flexus Fitness • Paulínia - SP. Todos
            os direitos reservados.
          </p>
          <a
            href="https://instagram.com/flexus_fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-neutral-400 transition hover:text-[#FF6B00]"
          >
            <Instagram className="h-4 w-4" />
            @flexus_fitness
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;