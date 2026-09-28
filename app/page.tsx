'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  Eye,
  MapPin,
  Users,
  Sparkles,
  Image as ImageIcon,
  Tag,
  ArrowRight,
  Star,
  Instagram,
  Clock,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Heart,
  ShieldCheck,
  Award
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511991983234';
const INSTAGRAM_HANDLE = 'naill_raquel';
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Guaianases+S%C3%A3o+Paulo+SP';

function getWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const defaultWhatsapp = getWhatsappLink('Oi Raquel! Gostaria de agendar um horário.');

const servicesList = [
  {
    id: 'manicure-pedicure',
    name: 'Manicure e Pedicure',
    desc: 'Cuidado completo para mãos e pés com cutilagem perfeita e esmaltação duradoura.',
    price: 'R$ 50,00',
    image: '/images/service-manicure.jpg',
    tag: 'Mais Pedido',
  },
  {
    id: 'alongamento',
    name: 'Alongamento de Unhas',
    desc: 'Extensão resistente com formato natural, acabamento impecável e estrutura sob medida.',
    price: 'R$ 75,00',
    image: '/images/service-alongamento.jpg',
    tag: 'Destaque',
  },
  {
    id: 'nail-design',
    name: 'Nail Design Personalizado',
    desc: 'Arte exclusiva, francesinhas, pedrarias e efeitos modernos que refletem sua personalidade.',
    price: 'a partir de R$ 85,00',
    image: '/images/service-naildesign.jpg',
    tag: 'Exclusivo',
  },
  {
    id: 'banho-gel',
    name: 'Banho de Gel',
    desc: 'Camada protetora sobre as unhas naturais garantindo brilho intenso e máxima resistência.',
    price: 'R$ 60,00',
    image: '/images/service-banhodegel.jpg',
  },
  {
    id: 'spa-pes',
    name: 'Spa dos Pés',
    desc: 'Esfoliação, hidratação profunda e massagem relaxante para pés macios e renovados.',
    price: 'R$ 35,00',
    image: '/images/service-spadospes.jpg',
  },
  {
    id: 'manutencao',
    name: 'Manutenção',
    desc: 'Reparo e renovação da estrutura do alongamento para mantê-las sempre perfeitas.',
    price: 'R$ 65,00',
    image: '/images/service-manutencao.jpg',
  },
];

const pricesTable = [
  { service: 'Manicure', price: 'R$ 30,00' },
  { service: 'Pedicure', price: 'R$ 35,00' },
  { service: 'Manicure e Pedicure', price: 'R$ 50,00' },
  { service: 'Banho de Gel', price: 'R$ 60,00' },
  { service: 'Alongamento', price: 'R$ 75,00' },
  { service: 'Nail Design (a partir de)', price: 'R$ 85,00' },
];

const workShowcase = [
  {
    title: 'Alongamento Amendoado Nude',
    subtitle: 'Acabamento natural com corações',
    image: '/images/hero-nails.jpg',
  },
  {
    title: 'Vermelho Clássico Impecável',
    subtitle: 'Brilho espelhado e simetria',
    image: '/images/work-red.jpg',
  },
  {
    title: 'Nail Art Delicada',
    subtitle: 'Traços finos e design exclusivo',
    image: '/images/work-nude.jpg',
  },
  {
    title: 'Glitter & Glamour',
    subtitle: 'Degradê suave e sofisticado',
    image: '/images/work-glitter.jpg',
  },
];

const benefits = [
  {
    icon: Calendar,
    title: 'Mais agendamentos',
    desc: 'Horários flexíveis e marcação rápida pelo WhatsApp',
  },
  {
    icon: Eye,
    title: 'Apresenta seus serviços',
    desc: 'Técnicas modernas, seguras e com materiais esterilizados',
  },
  {
    icon: MapPin,
    title: 'Facilita sua localização',
    desc: 'Espaço acolhedor e de fácil acesso em Guaianases',
  },
  {
    icon: Users,
    title: 'Atrai novas clientes',
    desc: 'Atendimento humanizado focado na sua autoestima',
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="pageWrapper">
      {/* Top Header */}
      <header className="header">
        <div className="headerContainer">
          <a href="#" className="brandLogo">
            <div className="logoMonogram">RA</div>
            <div className="logoText">
              <span className="brandName">RAQUEL ALVES</span>
              <span className="brandCategory">NAILS</span>
              <span className="brandSub">NAIL DESIGN & SPA DOS PÉS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktopNav">
            <a href="#servicos" className="navLink">Serviços</a>
            <a href="#trabalhos" className="navLink">Trabalhos</a>
            <a href="#valores" className="navLink">Valores</a>
            <a href="#atendimento" className="navLink">Atendimento</a>
            <a href="#depoimentos" className="navLink">Depoimentos</a>
          </nav>

          <div className="headerActions">
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="headerCtaBtn"
            >
              <span>Agendar</span>
              <ChevronRight size={16} />
            </a>

            <button
              className="mobileMenuToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="mobileNavDropdown">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Nossos Serviços</a>
            <a href="#trabalhos" onClick={() => setMobileMenuOpen(false)}>Trabalhos Recentes</a>
            <a href="#valores" onClick={() => setMobileMenuOpen(false)}>Tabela de Valores</a>
            <a href="#atendimento" onClick={() => setMobileMenuOpen(false)}>Atendimento & Contato</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mobileNavCta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="heroSection">
          <div className="heroContainer">
            {/* Visual Phone / Card Showcase (Centralizado e impactante) */}
            <div className="heroDeviceCard">
              {/* Badge Topo */}
              <div className="heroBadge">
                <Heart size={14} className="badgeHeart" />
                <span>Mais que unhas é autoestima</span>
                <span className="badgeHeartText">♥</span>
              </div>

              {/* Título Principal */}
              <h1 className="heroTitle">
                Unhas cuidadas<br />
                para <span className="highlightSerif">destacar seu estilo</span>
              </h1>

              <p className="heroSubtitle">
                Beleza, cuidado e qualidade em cada detalhe.
              </p>

              {/* Botão de WhatsApp em destaque */}
              <a
                href={defaultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsappHeroBtn"
              >
                <div className="whatsappIconWrap">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.43 0-2.82-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.18 8.18 0 01-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.02-.15 1.47-.72 1.68-1.42.21-.7.21-1.3.15-1.42-.06-.13-.23-.2-.48-.32z"/>
                  </svg>
                </div>
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight size={20} className="btnArrowIcon" />
              </a>

              {/* Grade de Navegação Rápida (Estilo dos 4 botões na tela do mockup) */}
              <div className="quickNavGrid">
                <a href="#servicos" className="quickNavItem">
                  <div className="quickIconBubble">
                    <Sparkles size={20} />
                  </div>
                  <span className="quickNavLabel">Serviços</span>
                </a>
                <a href="#trabalhos" className="quickNavItem">
                  <div className="quickIconBubble">
                    <ImageIcon size={20} />
                  </div>
                  <span className="quickNavLabel">Trabalhos</span>
                </a>
                <a href="#valores" className="quickNavItem">
                  <div className="quickIconBubble">
                    <Tag size={20} />
                  </div>
                  <span className="quickNavLabel">Valores</span>
                </a>
                <a href="#atendimento" className="quickNavItem">
                  <div className="quickIconBubble">
                    <MapPin size={20} />
                  </div>
                  <span className="quickNavLabel">Localização</span>
                </a>
              </div>

              {/* Carrossel de Fotos Destaque Hero */}
              <div className="heroShowcaseSlider">
                <div className="sliderImageContainer">
                  <Image
                    src={workShowcase[activeSlide].image}
                    alt={workShowcase[activeSlide].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="sliderImg"
                    priority
                  />
                  <div className="sliderOverlay">
                    <div className="sliderText">
                      <h4>{workShowcase[activeSlide].title}</h4>
                      <p>{workShowcase[activeSlide].subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Paginação de pontinhos */}
                <div className="sliderDots">
                  {workShowcase.map((_, idx) => (
                    <button
                      key={idx}
                      className={`sliderDot ${idx === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Ver foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 PILARES / VANTAGENS (Igual ao Slide 1 da imagem) */}
        <section className="benefitsSection">
          <div className="container">
            <div className="benefitsGrid">
              {benefits.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="benefitCard">
                    <div className="benefitIconRing">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="benefitTitle">{item.title}</h3>
                    <p className="benefitDesc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO NOSSOS SERVIÇOS (Igual ao Slide 3 da imagem) */}
        <section id="servicos" className="servicesSection">
          <div className="container">
            <div className="sectionHeaderCenter">
              <span className="sectionCategoryLabel">Experiência & Autocuidado</span>
              <h2 className="sectionTitle">Nossos Serviços</h2>
              <p className="sectionSubtitle">
                Beleza e cuidado do jeito que você merece
              </p>
            </div>

            <div className="servicesGrid">
              {servicesList.map((srv) => (
                <article key={srv.id} className="serviceCard">
                  <div className="serviceImageWrap">
                    <Image
                      src={srv.image}
                      alt={srv.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="serviceImage"
                    />
                    {srv.tag && (
                      <span className="serviceTagBadge">{srv.tag}</span>
                    )}
                  </div>
                  <div className="serviceCardBody">
                    <h3 className="serviceCardTitle">{srv.name}</h3>
                    <p className="serviceCardDesc">{srv.desc}</p>
                    <div className="serviceCardFooter">
                      <div className="servicePrice">
                        <span className="priceLabel">Valor</span>
                        <strong className="priceValue">{srv.price}</strong>
                      </div>
                      <a
                        href={getWhatsappLink(`Olá Raquel! Gostaria de agendar o serviço de ${srv.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="serviceBookBtn"
                      >
                        Agendar
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO VEJA ALGUNS DOS MEUS TRABALHOS (Portfólio) */}
        <section id="trabalhos" className="worksSection">
          <div className="container">
            <div className="worksHeaderRow">
              <div>
                <span className="sectionCategoryLabel">Galeria Exclusiva</span>
                <h2 className="sectionTitle">Veja alguns dos meus trabalhos</h2>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="seeAllWorksBtn"
              >
                <span>Ver mais no Instagram</span>
                <Instagram size={18} />
              </a>
            </div>

            <div className="worksMiniGallery">
              {workShowcase.map((work, idx) => (
                <div key={idx} className="workMiniCard">
                  <div className="workImageContainer">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 300px"
                      className="workImage"
                    />
                    <div className="workImageOverlay">
                      <span className="workTag">Raquel Alves</span>
                      <h4>{work.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO VALORES (Tabela refinada igual ao mockup) */}
        <section id="valores" className="pricesSection">
          <div className="container">
            <div className="pricesCardContainer">
              <div className="sectionHeaderCenter">
                <span className="sectionCategoryLabel">Transparência</span>
                <h2 className="sectionTitle">Valores</h2>
                <p className="sectionSubtitle">Confira alguns dos serviços</p>
              </div>

              <div className="pricesTableWrap">
                <table className="pricesTable">
                  <tbody>
                    {pricesTable.map((row, idx) => (
                      <tr key={idx} className="priceRow">
                        <td className="priceServiceCell">
                          <span className="dotIndicator" />
                          <span className="priceServiceName">{row.service}</span>
                        </td>
                        <td className="priceValueCell">
                          <strong>{row.price}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="priceNoticeText">
                * Valores podem variar conforme o modelo e decorações adicionais.
              </p>

              <div className="priceCtaWrapper">
                <a
                  href={defaultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsappPriceBtn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.43 0-2.82-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.18 8.18 0 01-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.02-.15 1.47-.72 1.68-1.42.21-.7.21-1.3.15-1.42-.06-.13-.23-.2-.48-.32z"/>
                  </svg>
                  <span>Agendar meu horário agora</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DARK LUXO - ATENDIMENTO, FALE COMIGO E DEPOIMENTOS (Slide 4 da imagem) */}
        <section id="atendimento" className="darkLuxurySection">
          <div className="darkContainer">
            {/* Bloco 1: Atendimento */}
            <div className="darkBlock">
              <div className="darkBlockHeader">
                <div className="darkIconCircle">
                  <MapPin size={22} className="darkHeaderIcon" />
                </div>
                <div>
                  <h3 className="darkSectionTitle">Atendimento</h3>
                  <p className="darkSectionSubtitle">Estou te esperando!</p>
                </div>
              </div>

              <div className="locationHighlightCard">
                <div className="locationPinBadge">
                  <MapPin size={20} />
                </div>
                <div className="locationDetails">
                  <strong className="locationCity">Guaianases - São Paulo/SP</strong>
                  <span className="locationNotes">Atendimento com horário agendado.</span>
                </div>
              </div>
            </div>

            {/* Bloco 2: Fale Comigo */}
            <div className="darkBlock">
              <div className="darkBlockHeader">
                <div className="darkIconCircle">
                  <Heart size={22} className="darkHeaderIcon" />
                </div>
                <div>
                  <h3 className="darkSectionTitle">Fale comigo</h3>
                </div>
              </div>

              <div className="actionButtonsStack">
                {/* Botão WhatsApp */}
                <a
                  href={defaultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="darkActionBtn greenHighlight"
                >
                  <div className="actionBtnIcon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.43 0-2.82-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.18 8.18 0 01-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.02-.15 1.47-.72 1.68-1.42.21-.7.21-1.3.15-1.42-.06-.13-.23-.2-.48-.32z"/>
                    </svg>
                  </div>
                  <span className="actionBtnLabel">Agendar pelo WhatsApp</span>
                  <ArrowRight size={18} className="actionBtnArrow" />
                </a>

                {/* Botão Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="darkActionBtn outlined"
                >
                  <div className="actionBtnIcon">
                    <Instagram size={22} />
                  </div>
                  <span className="actionBtnLabel">Me siga no Instagram</span>
                  <ChevronRight size={18} className="actionBtnArrow" />
                </a>

                {/* Botão Mapa */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="darkActionBtn outlined"
                >
                  <div className="actionBtnIcon">
                    <MapPin size={22} />
                  </div>
                  <span className="actionBtnLabel">Ver localização no mapa</span>
                  <ChevronRight size={18} className="actionBtnArrow" />
                </a>
              </div>
            </div>

            {/* Bloco 3: Depoimentos */}
            <div id="depoimentos" className="darkBlock">
              <div className="darkBlockHeader">
                <div className="darkIconCircle">
                  <Heart size={22} className="darkHeaderIcon" />
                </div>
                <div>
                  <h3 className="darkSectionTitle">Depoimentos</h3>
                  <p className="darkSectionSubtitle">O que minhas clientes estão dizendo</p>
                </div>
              </div>

              {/* Card Branco de Depoimento (como na imagem) */}
              <div className="whiteReviewCard">
                <div className="reviewCardContent">
                  <div className="reviewClientAvatarWrap">
                    <Image
                      src="/images/client-review.jpg"
                      alt="Cliente satisfeita"
                      width={64}
                      height={64}
                      className="reviewClientAvatar"
                    />
                  </div>
                  <div className="reviewTextContent">
                    <div className="reviewStarsRow">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="starFilled" />
                      ))}
                    </div>
                    <p className="reviewQuoteText">
                      “Amei o atendimento! Minhas unhas ficaram perfeitas, muito capricho e delicadeza. Super indico!”
                    </p>
                    <div className="reviewAuthorRow">
                      <strong className="reviewAuthor">Cliente</strong>
                      <span className="reviewQuotesMark">”</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assinatura Final em caligrafia cursiva */}
            <div className="scriptSignSection">
              <p className="scriptSignature">
                Obrigada por fazer parte dessa história! ♡
              </p>
              <div className="signatureIndicatorDots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="dot active" />
                <span className="pageCounter">4/4</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="siteFooter">
        <div className="footerContainer">
          <div className="footerBrandCol">
            <div className="footerMonogram">RA</div>
            <div>
              <p className="footerBrandTitle">Raquel Alves Nails</p>
              <p className="footerBrandSubtitle">Nail Design & Spa dos Pés • Guaianases, SP</p>
            </div>
          </div>
          <div className="footerCopy">
            <p>© {new Date().getFullYear()} Raquel Alves Nails. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP COM PULSE */}
      <aside className="floatingWhatsAppContainer">
        <a
          href={defaultWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="floatingWhatsAppBtn"
          aria-label="Agendar atendimento pelo WhatsApp"
        >
          <div className="whatsAppBadgeOnline">
            <span className="onlinePulse" />
          </div>
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.43 0-2.82-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.18 8.18 0 01-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.02-.15 1.47-.72 1.68-1.42.21-.7.21-1.3.15-1.42-.06-.13-.23-.2-.48-.32z"/>
          </svg>
        </a>
      </aside>
    </div>
  );
}
