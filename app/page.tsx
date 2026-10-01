'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Eye,
  Heart,
  Instagram,
  MapPin,
  Megaphone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';

const BRAND_CONFIG = {
  name: 'Bella Nails',
  titleName: 'BELLA NAILS',
  category: 'ATELIER',
  tagline: 'NAIL DESIGN & SPA DOS PÉS',
  monogram: 'BN',
  instagram: 'bellanails.atelier',
  professional: 'Bella',
  city: 'Guaianases — São Paulo/SP',
  demoBadge: 'Modelo Demonstrativo',
};

const WHATSAPP_NUMBER = '5511991983234';
const INSTAGRAM_HANDLE = BRAND_CONFIG.instagram;

const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

interface ServiceItem {
  id: string;
  name: string;
  category: 'basico' | 'alongamento' | 'design';
  price: string;
  desc: string;
  image: string;
  tag?: string;
}

const services: ServiceItem[] = [
  {
    id: 'mani-pedi',
    name: 'Manicure e Pedicure',
    category: 'basico',
    price: 'R$ 50,00',
    desc: 'Cutilagem perfeita, hidratação profunda e esmaltação impecável com durabilidade.',
    image: '/images/service-manicure.jpg',
    tag: 'Mais Pedido',
  },
  {
    id: 'alongamento',
    name: 'Alongamento de Unhas',
    category: 'alongamento',
    price: 'R$ 75,00',
    desc: 'Extensão elegante com fibra/gel, estrutura anatômica e curvatura natural sob medida.',
    image: '/images/service-alongamento.jpg',
    tag: 'Destaque',
  },
  {
    id: 'nail-design',
    name: 'Nail Design Personalizado',
    category: 'design',
    price: 'a partir de R$ 85,00',
    desc: 'Arte exclusiva, francesinhas modernas, pedrarias finas e desenhos manuais delicados.',
    image: '/images/service-naildesign.jpg',
    tag: 'Exclusivo',
  },
  {
    id: 'banho-gel',
    name: 'Banho de Gel',
    category: 'alongamento',
    price: 'R$ 60,00',
    desc: 'Camada protetora sobre as unhas naturais, promovendo brilho espelhado e máxima resistência.',
    image: '/images/service-banhodegel.jpg',
  },
  {
    id: 'spa-pes',
    name: 'Spa dos Pés',
    category: 'basico',
    price: 'R$ 35,00',
    desc: 'Esfoliação revigorante, remoção de asperezas e massagem relaxante para pés macios.',
    image: '/images/service-spadospes.jpg',
  },
  {
    id: 'manutencao',
    name: 'Manutenção',
    category: 'alongamento',
    price: 'R$ 65,00',
    desc: 'Nivelamento e renovação da estrutura do alongamento para mantê-las saudáveis e perfeitas.',
    image: '/images/service-manutencao.jpg',
  },
];

const pricesTable = [
  { service: 'Manicure', price: 'R$ 30,00', detail: 'Cutilagem e esmaltação tradicional' },
  { service: 'Pedicure', price: 'R$ 35,00', detail: 'Cuidado completo dos pés e esmaltação' },
  { service: 'Manicure e Pedicure', price: 'R$ 50,00', detail: 'Combo mãos e pés com acabamento fino' },
  { service: 'Banho de Gel', price: 'R$ 60,00', detail: 'Proteção e brilho prolongado na unha natural' },
  { service: 'Alongamento', price: 'R$ 75,00', detail: 'Extensão em gel com formato e acabamento natural' },
  { service: 'Nail Design (a partir de)', price: 'R$ 85,00', detail: 'Decorações personalizadas e exclusivas' },
];

const works = [
  { src: '/images/work-red.jpg', title: 'Vermelho Amendoado Clássico', style: 'Esmaltação em Gel' },
  { src: '/images/work-nude.jpg', title: 'Nail Art Corações Delicados', style: 'Nail Design' },
  { src: '/images/work-glitter.jpg', title: 'Degradê com Brilho Fino', style: 'Alongamento' },
  { src: '/images/hero-nails.jpg', title: 'Alongamento Nude Chic', style: 'Fibra de Vidro' },
];

const benefits = [
  { icon: CalendarDays, label: 'Mais agendamentos', sub: 'Horários marcados pelo WhatsApp' },
  { icon: Eye, label: 'Apresenta seus serviços', sub: 'Técnicas e biossegurança esterilizada' },
  { icon: MapPin, label: 'Facilita sua localização', sub: 'Fácil acesso em Guaianases - SP' },
  { icon: Users, label: 'Atrai novas clientes', sub: 'Atendimento humanizado e exclusivo' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'basico' | 'alongamento' | 'design'>('todos');
  const [selectedPriceIndex, setSelectedPriceIndex] = useState<number>(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState<number>(0);

  const bookingUrl = whatsapp(`Oi, ${BRAND_CONFIG.professional}! Vi a página demonstrativa de ${BRAND_CONFIG.name} e gostaria de agendar um horário.`);

  const filteredServices =
    activeCategory === 'todos'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const nextWork = () => {
    setCurrentWorkIndex((prev) => (prev + 1) % works.length);
  };

  const prevWork = () => {
    setCurrentWorkIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <>
      {/* Skip link para navegação por teclado (Acessibilidade WCAG) */}
      <a href="#conteudo-principal" className="skipLink">
        Pular para o conteúdo principal
      </a>

      <main id="conteudo-principal">
        {/* SEÇÃO 1: APRESENTAÇÃO / CAPA DE ALTA CONVERSÃO */}
        <section className="cover" id="inicio" aria-label={`Apresentação ${BRAND_CONFIG.name}`}>
          <Image
            src="/images/hero-nails.jpg"
            alt={`Unhas elegantes decoradas - ${BRAND_CONFIG.name}`}
            fill
            priority
            sizes="100vw"
            className="coverImage"
          />
          <div className="coverShade" />
          <div className="coverInner">
            <header className="brandBlock">
              <div className="monogram" aria-hidden="true">{BRAND_CONFIG.monogram}</div>
              <div className="brandName">{BRAND_CONFIG.titleName}</div>
              <div className="brandCategory">{BRAND_CONFIG.category}</div>
              <div className="brandSub">{BRAND_CONFIG.tagline}</div>
            </header>

            <div className="coverTag">
              <Heart size={14} className="tagHeart" aria-hidden="true" />
              <span>Mais que unhas é autoestima ♥</span>
            </div>

            <h1 className="coverHeadline">
              Uma página <em>profissional</em><br />
              para transformar<br />
              visitas em <em>agendamentos</em>
            </h1>

            <p className="coverLead">
              Atendimento exclusivo em Guaianases, biossegurança rigorosa e o cuidado que você merece em cada detalhe.
            </p>

            <div className="coverBenefits" role="list">
              {benefits.map(({ icon: Icon, label, sub }) => (
                <div className="coverBenefit" key={label} role="listitem">
                  <span className="benefitCircle">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="benefitTexts">
                    <strong>{label}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="coverActionGroup">
              <a className="primaryCta coverCta" href="#pagina">
                <span>Ver a experiência</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <span className="ctaTrustNote">
                <CheckCircle2 size={15} aria-hidden="true" />
                Navegação interativa e agendamento direto
              </span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: EXPERIÊNCIA INTERATIVA / HERO CARD */}
        <section className="experience" id="pagina" aria-label="Demonstração da Página">
          <div className="sectionShell narrow">
            <header className="experienceHeader">
              <div className="experienceBrandLeft">
                <div className="miniMonogram" aria-hidden="true">{BRAND_CONFIG.monogram}</div>
                <div>
                  <strong>{BRAND_CONFIG.titleName}</strong>
                  <span>{BRAND_CONFIG.category}</span>
                </div>
              </div>
              <div className="experienceBadge">
                <Sparkles size={14} aria-hidden="true" />
                <span>Horários com hora marcada</span>
              </div>
            </header>

            <div className="heroCard">
              <div className="heroPhoto">
                <Image
                  src={works[currentWorkIndex].src}
                  alt={works[currentWorkIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="objectCover heroInteractiveImg"
                  priority
                />
                <div className="heroPhotoShade" />

                {/* Controles de galeria rápida dentro do card hero */}
                <div className="heroCarouselControls">
                  <button
                    onClick={prevWork}
                    className="heroNavArrow left"
                    aria-label="Ver trabalho anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextWork}
                    className="heroNavArrow right"
                    aria-label="Ver próximo trabalho"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="heroCopy">
                  <div className="heroMetaPill">
                    <span className="pillDot" />
                    <span>{works[currentWorkIndex].style}</span>
                  </div>
                  <h2>Unhas cuidadas para destacar seu estilo</h2>
                  <p>Beleza, cuidado e qualidade em cada detalhe.</p>

                  <div className="heroCtaWrap">
                    <a
                      className="whatsappBtn"
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Agendar horário com ${BRAND_CONFIG.name} pelo WhatsApp`}
                    >
                      <MessageCircle size={20} aria-hidden="true" />
                      <span>Agendar pelo WhatsApp</span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
                    <span className="heroCtaContext">
                      <Clock size={13} aria-hidden="true" />
                      Resposta rápida em minutos • Sem compromisso
                    </span>
                  </div>
                </div>

                <div className="heroDots" role="tablist" aria-label="Galeria rápida hero">
                  {works.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentWorkIndex(idx)}
                      className={`heroDot ${idx === currentWorkIndex ? 'active' : ''}`}
                      aria-label={`Ver foto ${idx + 1}`}
                      role="tab"
                      aria-selected={idx === currentWorkIndex}
                    />
                  ))}
                </div>
              </div>

              {/* NAVEGAÇÃO RÁPIDA (4 BOLSÕES DE ACESSO) */}
              <nav className="quickNav" aria-label="Atalhos da página">
                <a href="#servicos" className="quickNavLink">
                  <span className="quickNavIcon"><Sparkles size={20} aria-hidden="true" /></span>
                  <span className="quickNavText">Serviços</span>
                </a>
                <a href="#trabalhos" className="quickNavLink">
                  <span className="quickNavIcon"><Eye size={20} aria-hidden="true" /></span>
                  <span className="quickNavText">Trabalhos</span>
                </a>
                <a href="#valores" className="quickNavLink">
                  <span className="quickNavIcon"><Star size={20} aria-hidden="true" /></span>
                  <span className="quickNavText">Valores</span>
                </a>
                <a href="#atendimento" className="quickNavLink">
                  <span className="quickNavIcon"><MapPin size={20} aria-hidden="true" /></span>
                  <span className="quickNavText">Localização</span>
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: CATÁLOGO DE SERVIÇOS COM FILTROS */}
        <section className="catalog" id="servicos" aria-label="Nossos Serviços">
          <div className="sectionShell">
            <div className="centerTitle">
              <span className="eyebrow">Beleza & autocuidado</span>
              <h2>Nossos Serviços</h2>
              <p>Beleza e cuidado do jeito que você merece</p>
            </div>

            {/* Abas de filtro inspiradas em motionsites.ai e unsection */}
            <div className="categoryTabs" role="tablist" aria-label="Filtrar por categoria">
              <button
                className={`tabBtn ${activeCategory === 'todos' ? 'active' : ''}`}
                onClick={() => setActiveCategory('todos')}
                role="tab"
                aria-selected={activeCategory === 'todos'}
              >
                Todos ({services.length})
              </button>
              <button
                className={`tabBtn ${activeCategory === 'basico' ? 'active' : ''}`}
                onClick={() => setActiveCategory('basico')}
                role="tab"
                aria-selected={activeCategory === 'basico'}
              >
                Mãos & Pés
              </button>
              <button
                className={`tabBtn ${activeCategory === 'alongamento' ? 'active' : ''}`}
                onClick={() => setActiveCategory('alongamento')}
                role="tab"
                aria-selected={activeCategory === 'alongamento'}
              >
                Alongamentos & Gel
              </button>
              <button
                className={`tabBtn ${activeCategory === 'design' ? 'active' : ''}`}
                onClick={() => setActiveCategory('design')}
                role="tab"
                aria-selected={activeCategory === 'design'}
              >
                Nail Design
              </button>
            </div>

            <div className="serviceGrid">
              {filteredServices.map((service) => (
                <article className="serviceCard" key={service.id}>
                  <div className="serviceImage">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="objectCover"
                    />
                    {service.tag && (
                      <span className="serviceBadge">{service.tag}</span>
                    )}
                  </div>
                  <div className="serviceBody">
                    <div className="serviceInfo">
                      <h3>{service.name}</h3>
                      <p className="serviceDescription">{service.desc}</p>
                    </div>
                    <div className="serviceFooterRow">
                      <div className="priceBlock">
                        <span className="priceLabel">A partir de</span>
                        <strong className="servicePriceVal">{service.price}</strong>
                      </div>
                      <a
                        className="serviceActionBtn"
                        href={whatsapp(`Oi, ${BRAND_CONFIG.professional}! Gostaria de agendar o serviço de ${service.name}.`)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Agendar ${service.name} pelo WhatsApp`}
                      >
                        <span>Agendar</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* SEÇÃO 4: PORTFÓLIO E TRABALHOS */}
            <div className="workPanel" id="trabalhos">
              <div className="workPanelHeader">
                <div>
                  <span className="eyebrow">Portfólio Real</span>
                  <h3>Veja alguns dos meus trabalhos</h3>
                  <p className="panelSubtitle">Acabamentos autênticos feitos com carinho e dedicação</p>
                </div>
                <a
                  href={`https://instagram.com/${BRAND_CONFIG.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="instaBtn"
                  aria-label={`Ver mais fotos no Instagram @${BRAND_CONFIG.instagram}`}
                >
                  <Instagram size={18} aria-hidden="true" />
                  <span>@{INSTAGRAM_HANDLE}</span>
                </a>
              </div>

              <div className="workGrid">
                {works.map((item, index) => (
                  <a
                    href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                    target="_blank"
                    rel="noreferrer"
                    className="workCardItem"
                    key={item.src}
                    aria-label={`Ver foto ${index + 1}: ${item.title}`}
                  >
                    <div className="workImageWrapper">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 280px"
                        className="objectCover"
                      />
                      <div className="workOverlay">
                        <span className="workOverlayBadge">{item.style}</span>
                        <h4>{item.title}</h4>
                        <span className="workOverlayCta">Ver no Instagram →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* SEÇÃO 5: TABELA DE VALORES INTERATIVA */}
            <div className="priceBox" id="valores">
              <div className="centerTitle compact">
                <span className="eyebrow">Transparência Total</span>
                <h2>Valores</h2>
                <p>Confira os serviços disponíveis e selecione para agendar</p>
              </div>

              <div className="interactivePriceContainer">
                <div className="priceList" role="radiogroup" aria-label="Lista de serviços e valores">
                  {pricesTable.map((item, idx) => (
                    <button
                      key={item.service}
                      className={`priceRowBtn ${selectedPriceIndex === idx ? 'selected' : ''}`}
                      onClick={() => setSelectedPriceIndex(idx)}
                      role="radio"
                      aria-checked={selectedPriceIndex === idx}
                      type="button"
                    >
                      <div className="priceRowLeft">
                        <span className="priceSelectCheck">
                          <CheckCircle2 size={18} aria-hidden="true" />
                        </span>
                        <div className="priceItemText">
                          <strong>{item.service}</strong>
                          <span className="priceDetail">{item.detail}</span>
                        </div>
                      </div>
                      <div className="priceRowRight">
                        <strong className="itemValue">{item.price}</strong>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="priceSelectionCard">
                  <div className="selectedHeader">
                    <span className="selectedLabel">Serviço Selecionado:</span>
                    <h4>{pricesTable[selectedPriceIndex].service}</h4>
                    <p className="selectedCost">{pricesTable[selectedPriceIndex].price}</p>
                  </div>
                  <a
                    className="selectedBookBtn"
                    href={whatsapp(`Oi, ${BRAND_CONFIG.professional}! Gostaria de agendar o serviço de ${pricesTable[selectedPriceIndex].service} (${pricesTable[selectedPriceIndex].price}).`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Agendar este serviço</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <p className="priceNotice">
                    * Valores podem variar conforme a decoração e modelo escolhido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: ATENDIMENTO DARK LUXO & CONTATOS */}
        <section className="contactDark" id="atendimento" aria-label="Atendimento e Localização">
          <div className="sectionShell darkShell">
            <header className="contactHeader">
              <span className="locationPin" aria-hidden="true"><MapPin size={28} /></span>
              <div>
                <h2>Atendimento</h2>
                <p>Estou te esperando!</p>
              </div>
            </header>

            <div className="locationCard">
              <div className="locationThumb">
                <Image
                  src="/images/client-review.jpg"
                  alt={`Espaço ${BRAND_CONFIG.name}`}
                  fill
                  sizes="64px"
                  className="objectCover"
                />
              </div>
              <div className="locationInfoText">
                <strong>{BRAND_CONFIG.city}</strong>
                <span>Atendimento com horário agendado com hora marcada</span>
                <span className="locationSafe">
                  <ShieldCheck size={14} aria-hidden="true" />
                  Ambiente higienizado e materiais 100% esterilizados
                </span>
              </div>
            </div>

            <h3 className="talkTitle">Fale comigo</h3>
            <div className="contactButtons">
              <div className="ctaBlockWithContext">
                <a className="whatsappBtn wide" href={bookingUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={21} aria-hidden="true" />
                  <span>Agendar pelo WhatsApp</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <span className="ctaSubContext">
                  Horários flexíveis de terça a sábado • Atendimento personalizado
                </span>
              </div>

              <div className="secondaryContactRow">
                <a
                  className="outlineBtn"
                  href={`https://instagram.com/${BRAND_CONFIG.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Perfil do Instagram de ${BRAND_CONFIG.name}`}
                >
                  <Instagram size={19} aria-hidden="true" />
                  <span>Me siga no Instagram</span>
                </a>
                <a
                  className="outlineBtn"
                  href="https://www.google.com/maps/search/?api=1&query=Guaianases+Sao+Paulo+SP"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir mapa com a localização em Guaianases São Paulo"
                >
                  <MapPin size={19} aria-hidden="true" />
                  <span>Ver localização no mapa</span>
                </a>
              </div>
            </div>

            <div className="divider" />

            {/* SEÇÃO 7: DEPOIMENTOS */}
            <div className="testimonial" id="depoimentos">
              <div className="testimonialTitle">
                <span className="heartIcon" aria-hidden="true">♡</span>
                <div>
                  <h3>Depoimentos</h3>
                  <p>O que minhas clientes estão dizendo</p>
                </div>
              </div>

              <div className="quoteCard">
                <Image
                  src="/images/client-review.jpg"
                  alt="Foto da cliente"
                  width={64}
                  height={64}
                  className="quoteAvatar"
                />
                <div className="quoteTextWrap">
                  <div className="stars" aria-label="Avaliação 5 estrelas">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <blockquote>
                    “Amei o atendimento! Minhas unhas ficaram perfeitas, muito capricho e delicadeza. Super indico!”
                  </blockquote>
                  <cite className="quoteAuthor">— Cliente Satisfeita</cite>
                </div>
              </div>

              <p className="scriptThanks">
                Obrigada por fazer parte dessa história! ♡
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: E DEPOIS? CRESCIMENTO E VISIBILIDADE */}
        <section className="growth" aria-label="Expansão e visibilidade">
          <div className="sectionShell splitSection">
            <div className="growthCopy">
              <span className="eyebrow">E depois?</span>
              <h2>Mais visibilidade para o seu trabalho</h2>
              <p>
                Com a página pronta, ela também pode ser usada em anúncios locais para alcançar
                novas clientes da sua região.
              </p>

              <div className="growthList" role="list">
                <div role="listitem"><span><MapPin size={18} aria-hidden="true" /></span> Atrair novas clientes próximas</div>
                <div role="listitem"><span><Users size={18} aria-hidden="true" /></span> Divulgar seus serviços</div>
                <div role="listitem"><span><CalendarDays size={18} aria-hidden="true" /></span> Aumentar os agendamentos</div>
                <div role="listitem"><span><Megaphone size={18} aria-hidden="true" /></span> Mostrar seu trabalho para mais pessoas</div>
                <div role="listitem"><span><Instagram size={18} aria-hidden="true" /></span> Integrar Instagram e WhatsApp</div>
              </div>

              <div className="visibilityCard">
                <Megaphone size={26} aria-hidden="true" />
                <div>
                  <strong>Mais visibilidade para o seu trabalho</strong>
                  <span>e um caminho simples até o agendamento.</span>
                </div>
              </div>
            </div>

            <div className="growthPhoto">
              <Image
                src="/images/work-red.jpg"
                alt="Nail designer trabalhando com esmaltação perfeita"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="objectCover"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 9: PROPOSTA & CTA FINAL */}
        <section className="proposal" aria-label="Proposta Comercial">
          <div className="sectionShell proposalShell">
            <div className="proposalBrand">
              <div className="miniMonogram large" aria-hidden="true">{BRAND_CONFIG.monogram}</div>
              <div>
                <strong>{BRAND_CONFIG.titleName}</strong>
                <span>{BRAND_CONFIG.category} · {BRAND_CONFIG.tagline}</span>
              </div>
            </div>

            <h2>Vamos fazer acontecer?</h2>
            <p>
              A página pode ficar pronta, personalizada com sua identidade e preparada para
              divulgar seus serviços e receber novos agendamentos.
            </p>

            <div className="includedCard">
              <h3>O que está incluso:</h3>
              <ul className="includedList">
                <li><CheckCircle2 size={16} aria-hidden="true" /> Página profissional personalizada</li>
                <li><CheckCircle2 size={16} aria-hidden="true" /> Seus serviços, fotos e valores</li>
                <li><CheckCircle2 size={16} aria-hidden="true" /> Botão de agendamento no WhatsApp</li>
                <li><CheckCircle2 size={16} aria-hidden="true" /> Integração com Instagram</li>
                <li><CheckCircle2 size={16} aria-hidden="true" /> Versão otimizada para celular</li>
                <li><CheckCircle2 size={16} aria-hidden="true" /> Suporte e ajustes iniciais</li>
              </ul>
            </div>

            <div className="proposalCtaWrap">
              <a
                className="proposalCta"
                href={whatsapp('Oi! Gostei da página e quero conversar sobre o projeto.')}
                target="_blank"
                rel="noreferrer"
                aria-label="Quero minha página - Iniciar conversa pelo WhatsApp"
              >
                <MessageCircle size={22} aria-hidden="true" />
                <span>Quero minha página</span>
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <span className="proposalConfidence">
                Garantia de satisfação • Atendimento ágil e consultivo
              </span>
            </div>

            <div className="proposalNotes">
              <span>● Entrega em poucos dias</span>
              <span>● Suporte e ajustes iniciais</span>
            </div>
          </div>
        </section>
      </main>

      {/* BOTÃO FLUTUANTE COM BADGE STATUS ONLINE */}
      <aside className="floatingWhatsappContainer" aria-label="Contato Rápido WhatsApp">
        <div className="floatingTooltip">
          <span className="statusDot" aria-hidden="true" />
          <span>Fale com a {BRAND_CONFIG.professional}</span>
        </div>
        <a
          className="floatingWhatsapp"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar atendimento pelo WhatsApp (abre em nova aba)"
        >
          <MessageCircle size={26} aria-hidden="true" />
        </a>
      </aside>
    </>
  );
}
