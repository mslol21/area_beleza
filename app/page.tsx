'use client';

import Image from 'next/image';
import {
  ArrowRight,
  CalendarDays,
  Eye,
  Instagram,
  MapPin,
  Megaphone,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511991983234';
const INSTAGRAM_HANDLE = 'naill_raquel';

const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  { name: 'Manicure e Pedicure', price: 'R$ 50,00', image: '/images/service-manicure.jpg' },
  { name: 'Alongamento de Unhas', price: 'R$ 75,00', image: '/images/service-alongamento.jpg' },
  { name: 'Nail Design Personalizado', price: 'a partir de R$ 85,00', image: '/images/service-naildesign.jpg' },
  { name: 'Banho de Gel', price: 'R$ 60,00', image: '/images/service-banhodegel.jpg' },
  { name: 'Spa dos Pés', price: 'R$ 35,00', image: '/images/service-spadospes.jpg' },
  { name: 'Manutenção', price: 'R$ 65,00', image: '/images/service-manutencao.jpg' },
];

const works = [
  '/images/work-red.jpg',
  '/images/work-nude.jpg',
  '/images/work-glitter.jpg',
  '/images/hero-nails.jpg',
];

const benefits = [
  { icon: CalendarDays, label: 'Mais agendamentos' },
  { icon: Eye, label: 'Apresenta seus serviços' },
  { icon: MapPin, label: 'Facilita sua localização' },
  { icon: Users, label: 'Atrai novas clientes' },
];

export default function Home() {
  const bookingUrl = whatsapp('Oi, Raquel! Vi sua página e gostaria de agendar um horário.');

  return (
    <main>
      <section className="cover" id="inicio">
        <Image
          src="/images/hero-nails.jpg"
          alt="Nail design Raquel Alves"
          fill
          priority
          sizes="100vw"
          className="coverImage"
        />
        <div className="coverShade" />
        <div className="coverInner">
          <div className="brandBlock">
            <div className="monogram">RA</div>
            <div className="brandName">RAQUEL ALVES</div>
            <div className="brandCategory">NAILS</div>
            <div className="brandSub">NAIL DESIGN & SPA DOS PÉS</div>
          </div>

          <div className="coverTag">Mais que unhas<br />é autoestima ♥</div>

          <h1>
            Uma página <em>profissional</em><br />
            para transformar<br />
            visitas em <em>agendamentos</em>
          </h1>

          <div className="coverBenefits">
            {benefits.map(({ icon: Icon, label }) => (
              <div className="coverBenefit" key={label}>
                <span className="benefitCircle"><Icon size={22} /></span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a className="primaryCta coverCta" href="#pagina">
            Ver a experiência <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="experience" id="pagina">
        <div className="sectionShell narrow">
          <div className="experienceHeader">
            <div className="miniMonogram">RA</div>
            <div>
              <strong>RAQUEL ALVES</strong>
              <span>NAILS</span>
            </div>
          </div>

          <div className="heroCard">
            <div className="heroPhoto">
              <Image
                src="/images/hero-nails.jpg"
                alt="Unhas cuidadas e nail art"
                fill
                sizes="(max-width: 700px) 100vw, 640px"
                className="objectCover"
              />
              <div className="heroPhotoShade" />
              <div className="heroCopy">
                <span className="eyebrow light">Nail Design & Spa dos Pés</span>
                <h2>Unhas cuidadas para destacar seu estilo</h2>
                <p>Beleza, cuidado e qualidade em cada detalhe.</p>
                <a className="whatsappBtn" href={bookingUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  Agendar pelo WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <nav className="quickNav" aria-label="Atalhos da página">
              <a href="#servicos"><Sparkles size={20} /><span>Serviços</span></a>
              <a href="#trabalhos"><Eye size={20} /><span>Trabalhos</span></a>
              <a href="#valores"><Star size={20} /><span>Valores</span></a>
              <a href="#atendimento"><MapPin size={20} /><span>Localização</span></a>
            </nav>
          </div>
        </div>
      </section>

      <section className="catalog" id="servicos">
        <div className="sectionShell">
          <div className="centerTitle">
            <span className="eyebrow">Beleza & autocuidado</span>
            <h2>Nossos Serviços</h2>
            <p>Beleza e cuidado do jeito que você merece</p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.name}>
                <div className="serviceImage">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 700px) 50vw, 260px"
                    className="objectCover"
                  />
                </div>
                <div className="serviceBody">
                  <h3>{service.name}</h3>
                  <strong>{service.price}</strong>
                  <a
                    href={whatsapp(`Oi, Raquel! Gostaria de saber mais sobre ${service.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agendar <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="workPanel" id="trabalhos">
            <div className="workPanelHeader">
              <div>
                <span className="eyebrow">Portfólio</span>
                <h3>Veja alguns dos meus trabalhos</h3>
              </div>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <div className="workGrid">
              {works.map((src, index) => (
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noreferrer"
                  className="workImage"
                  key={src}
                >
                  <Image
                    src={src}
                    alt={`Trabalho de nail design ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 25vw, 250px"
                    className="objectCover"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="priceBox" id="valores">
            <div className="centerTitle compact">
              <span className="eyebrow">Transparência</span>
              <h2>Valores</h2>
              <p>Confira alguns dos serviços</p>
            </div>
            <div className="priceList">
              <div><span>Manicure</span><strong>R$ 30,00</strong></div>
              <div><span>Pedicure</span><strong>R$ 35,00</strong></div>
              <div><span>Manicure e Pedicure</span><strong>R$ 50,00</strong></div>
              <div><span>Banho de Gel</span><strong>R$ 60,00</strong></div>
              <div><span>Alongamento</span><strong>R$ 75,00</strong></div>
              <div><span>Nail Design (a partir de)</span><strong>R$ 85,00</strong></div>
            </div>
            <small>Valores podem variar conforme o modelo e decoração escolhida.</small>
          </div>
        </div>
      </section>

      <section className="contactDark" id="atendimento">
        <div className="sectionShell darkShell">
          <div className="contactHeader">
            <span className="locationPin"><MapPin size={30} /></span>
            <div>
              <h2>Atendimento</h2>
              <p>Estou te esperando!</p>
            </div>
          </div>

          <div className="locationCard">
            <div className="locationThumb">
              <Image src="/images/client-review.jpg" alt="" fill sizes="64px" className="objectCover" />
            </div>
            <div>
              <strong>Guaianases — São Paulo/SP</strong>
              <span>Atendimento com horário agendado.</span>
            </div>
          </div>

          <h3 className="talkTitle">Fale comigo</h3>
          <div className="contactButtons">
            <a className="whatsappBtn wide" href={bookingUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={21} /> Agendar pelo WhatsApp <ArrowRight size={18} />
            </a>
            <a
              className="outlineBtn"
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={19} /> Me siga no Instagram
            </a>
            <a
              className="outlineBtn"
              href="https://www.google.com/maps/search/?api=1&query=Guaianases+Sao+Paulo+SP"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={19} /> Ver localização no mapa
            </a>
          </div>

          <div className="divider" />

          <div className="testimonial" id="depoimentos">
            <div className="testimonialTitle">
              <span>♡</span>
              <div>
                <h3>Depoimentos</h3>
                <p>O que minhas clientes estão dizendo</p>
              </div>
            </div>
            <div className="quoteCard">
              <Image
                src="/images/client-review.jpg"
                alt="Cliente"
                width={72}
                height={72}
                className="quoteAvatar"
              />
              <div>
                <div className="stars">★★★★★</div>
                <p>“Amei o atendimento! Minhas unhas ficaram perfeitas, muito capricho e delicadeza. Super indico!”</p>
                <small>Cliente</small>
              </div>
            </div>
            <p className="scriptThanks">Obrigada por fazer parte dessa história! ♡</p>
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="sectionShell splitSection">
          <div className="growthCopy">
            <span className="eyebrow">E depois?</span>
            <h2>Mais visibilidade para o seu trabalho</h2>
            <p>
              Com a página pronta, ela também pode ser usada em anúncios locais para alcançar
              novas clientes da sua região.
            </p>

            <div className="growthList">
              <div><span><MapPin size={18} /></span> Atrair novas clientes próximas</div>
              <div><span><Users size={18} /></span> Divulgar seus serviços</div>
              <div><span><CalendarDays size={18} /></span> Aumentar os agendamentos</div>
              <div><span><Megaphone size={18} /></span> Mostrar seu trabalho para mais pessoas</div>
              <div><span><Instagram size={18} /></span> Integrar Instagram e WhatsApp</div>
            </div>

            <div className="visibilityCard">
              <Megaphone size={26} />
              <div>
                <strong>Mais visibilidade para o seu trabalho</strong>
                <span>e um caminho simples até o agendamento.</span>
              </div>
            </div>
          </div>

          <div className="growthPhoto">
            <Image
              src="/images/work-red.jpg"
              alt="Nail designer trabalhando"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="objectCover"
            />
          </div>
        </div>
      </section>

      <section className="proposal">
        <div className="sectionShell proposalShell">
          <div className="proposalBrand">
            <div className="miniMonogram large">RA</div>
            <div>
              <strong>RAQUEL ALVES</strong>
              <span>NAILS · NAIL DESIGN & SPA DOS PÉS</span>
            </div>
          </div>

          <h2>Vamos fazer acontecer?</h2>
          <p>
            A página pode ficar pronta, personalizada com sua identidade e preparada para
            divulgar seus serviços e receber novos agendamentos.
          </p>

          <div className="includedCard">
            <h3>O que está incluso:</h3>
            <ul>
              <li>Página profissional personalizada</li>
              <li>Seus serviços, fotos e valores</li>
              <li>Botão de agendamento no WhatsApp</li>
              <li>Integração com Instagram</li>
              <li>Versão otimizada para celular</li>
              <li>Suporte e ajustes iniciais</li>
            </ul>
          </div>

          <a
            className="proposalCta"
            href={whatsapp('Oi! Gostei da página e quero conversar sobre o projeto.')}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={23} /> Quero minha página <ArrowRight size={20} />
          </a>

          <div className="proposalNotes">
            <span>● Entrega em poucos dias</span>
            <span>● Suporte e ajustes iniciais</span>
          </div>
        </div>
      </section>

      <a className="floatingWhatsapp" href={bookingUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
