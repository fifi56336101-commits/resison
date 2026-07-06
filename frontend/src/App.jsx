import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Volume2, VolumeX, X } from 'lucide-react';
import './index.css';

import heroImg from './assets/2.jpeg';
import authorityImg from './assets/3.jpeg';
import gallery1 from './assets/4.jpeg';
import gallery2 from './assets/6.jpeg';
import gallery3 from './assets/8.jpeg';
import gallery4 from './assets/9.jpeg';

// --- Booking Modal Component ---
const BookingModal = ({ isOpen, onClose, intent }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    role: '', 
    email: '', 
    time: 'Matin (07h00)',
    location: 'Sur la plage',
    need: 'Silence intérieur (mental envahissant)',
    tarif: '1 séance hebdomadaire - 20 DT'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour ! Je souhaite ${intent}. \n\nVoici mon questionnaire d'intention :\n- Nom : ${formData.name}\n- Profession : ${formData.role}\n- Email : ${formData.email}\n- Séance : ${formData.time}\n- Cadre : ${formData.location}\n- Besoin : ${formData.need}\n- Formule : ${formData.tarif}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/21626135049?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      background: 'rgba(5, 22, 54, 0.85)', backdropFilter: 'blur(8px)', 
      zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
      padding: '20px'
    }}>
      <div className="modal reveal active" style={{
        position: 'relative', top: 'auto', left: 'auto', transform: 'none', 
        width: '100%', maxWidth: '560px', borderRadius: '16px', padding: 'var(--space-12)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        borderTop: '6px solid var(--brand-rose)',
        maxHeight: '90vh', overflowY: 'auto'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '24px', right: '24px', background: 'var(--bg-off-white)', 
          border: 'none', cursor: 'pointer', color: 'var(--text-dark-muted)',
          width: '40px', height: '40px', borderRadius: '50%', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', transition: '0.3s'
        }} onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'} 
           onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-off-white)'}>
          <X size={20} />
        </button>
        
        <div className="text-center mb-8">
          <span className="overline">Questionnaire d'intention</span>
          <h3 className="mb-2" style={{color: 'var(--brand-blue)'}}>Finalisez votre Inscription</h3>
          <p style={{fontSize: 'var(--fs-sm)', opacity: 0.8, maxWidth: '400px', margin: '0 auto'}}>
            Remplissez ce formulaire pour nous aider à canaliser votre objectif personnel.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label className="form-label">Nom et Prénom *</label>
            <input required type="text" className="form-input" placeholder="ex: Jane Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label className="form-label">Profession *</label>
              <input required type="text" className="form-input" placeholder="ex: Entrepreneur" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Adresse Email *</label>
              <input required type="email" className="form-input" placeholder="jane@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label className="form-label">Séance souhaitée *</label>
              <select className="form-input" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}>
                <option>Matin (07h00)</option>
                <option>Après-midi (18h00)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Cadre préféré *</label>
              <select className="form-input" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}>
                <option>Sur la plage</option>
                <option>Dans un parc</option>
              </select>
            </div>
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Quel est votre besoin immédiat ? *</label>
            <select className="form-input" value={formData.need} onChange={e => setFormData({...formData, need: e.target.value})}>
              <option>Silence intérieur (mental envahissant)</option>
              <option>Santé et vitalité (immunité)</option>
              <option>Légèreté (tensions corporelles)</option>
              <option>Ressourcement (énergie et clarté)</option>
            </select>
          </div>

          <div className="form-group mb-8">
            <label className="form-label">Choisissez votre rythme (Tarif) *</label>
            <select className="form-input" value={formData.tarif} onChange={e => setFormData({...formData, tarif: e.target.value})}>
              <option>1 séance hebdomadaire - 20 DT</option>
              <option>4 séances mensuelles - 60 DT</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '16px', fontSize: 'var(--fs-lg)'}}>
            Continuer vers WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Header Component ---
const Header = ({ onBook }) => (
  <header className="app-header">
    <div className="container">
      <div className="flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/media/1.png" alt="World Network Consulting Services" style={{ height: '60px', width: 'auto' }} />
        </a>
        <div className="flex items-center gap-8">
          <button onClick={onBook} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.85rem' }}>
            Réserver ma place
          </button>
        </div>
      </div>
    </div>
  </header>
);

// --- FAQ Component ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <ChevronRight style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: '0.3s', color: 'var(--brand-rose)' }} />
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIntent, setModalIntent] = useState('');

  const openModal = (intent) => {
    setModalIntent(intent);
    setIsModalOpen(true);
  };

  // --- Scroll Reveal Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} intent={modalIntent} />
      <Header onBook={() => openModal('réserver ma place')} />

      {/* ================= SECTION 1: THE HERO ================= */}
      <section className="section section-off-white hero-section">
        <div className="motif-crosses"></div>
        <div className="container text-center reveal">
          <span className="overline mb-8">COHÉRENCE NEURO-MÉDITATIVE · Sessions d'Été 2026</span>
          <h1 className="mb-12 mx-auto" style={{ maxWidth: '1000px' }}>
            Offrez-vous l'harmonie du corps, du cœur et de l'esprit
          </h1>
          <p className="mx-auto mb-16" style={{ fontSize: 'var(--fs-lg)', maxWidth: '900px', lineHeight: '1.8' }}>
            Vous sentez-vous parfois submergé par un mental envahissant ? Votre corps est-il lourd ou vidé d'énergie ? Souhaitez-vous renforcer votre immunité et retrouver une clarté mentale durable ?
            <br/><br/>
            La pratique de la <strong>cohérence neuro-méditative</strong> est une réponse douce et puissante à ces déséquilibres. Une fois intégrée, elle agit en profondeur pour rétablir l'harmonie entre vos dimensions physique, émotionnelle et cognitive.
          </p>
          <div className="flex justify-center gap-6 mb-16" style={{ flexWrap: 'wrap' }}>
            <button onClick={() => openModal('secure my seat for the Masterclass')} className="btn btn-primary">
              Réserver ma place
            </button>
          </div>

          <div className="masterclass-video-wrapper reveal reveal-delay-1 relative" style={{ marginTop: 'var(--space-24)', borderRadius: '24px', overflow: 'hidden' }}>
            <img src={heroImg} alt="Cohérence Neuro" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '70vh', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: POUR QUI ================= */}
      <section className="section-white split-layout">
        <div className="split-content reveal">
          <span className="overline">Pour Qui ?</span>
          <h2 className="mb-8">Débutant ou Initié.</h2>
          <p className="mb-8">
            Que vous soyez débutant ou déjà initié à la méditation, cette expérience est ouverte à toute personne en quête de :
          </p>
          <ul className="check-list mb-12">
            <li><strong>Silence intérieur</strong> face à un mental envahissant</li>
            <li><strong>Santé et vitalité</strong> pour renforcer votre immunité</li>
            <li><strong>Légèreté</strong> pour libérer les tensions du corps</li>
            <li><strong>Ressourcement</strong> pour retrouver énergie et clarté</li>
          </ul>
        </div>
        <div className="split-image reveal reveal-delay-1">
          <div className="split-image-inner">
            <img src={gallery1} alt="Méditation et Cohérence" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PROGRAMME & BÉNÉFICES ================= */}
      <section className="section section-blue">
        <div className="motif-crosses"></div>
        <div className="container reveal">
          <div className="text-center mb-24 relative z-10">
            <span className="overline" style={{ color: 'var(--brand-yellow)' }}>Au Programme</span>
            <h2 className="mb-8 text-white">Ce que la cohérence neuro-méditative vous apporte.</h2>
          </div>

          <div className="grid grid-cols-2 relative z-10">
            <div className="corporate-card reveal">
              <h3 className="mb-4 text-blue">Éveil et acuité cognitive</h3>
              <p style={{ fontSize: 'var(--fs-base)' }}>Une meilleure concentration, une mémoire affinée et une pensée plus claire pour retrouver un silence intérieur face à un mental envahissant.</p>
            </div>
            <div className="corporate-card reveal reveal-delay-1">
              <h3 className="mb-4 text-blue">Bien-être physique et émotionnel</h3>
              <p style={{ fontSize: 'var(--fs-base)' }}>Une régulation du stress, un système immunitaire renforcé et une stabilité émotionnelle durable. Plus de légèreté pour libérer les tensions du corps.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= SECTION: THE GALLERY ================= */}
      <section className="section section-off-white pt-32 pb-32">
        <div className="container container-narrow text-center mb-16 reveal">
          <span className="overline">L'Expérience</span>
          <h2>Un aperçu de nos sessions.</h2>
          <p className="mx-auto mt-6">Choisissez le cadre qui vous inspire le plus. Nos sessions se déroulent sur la plage ou dans un parc pour une harmonie totale avec la nature.</p>
        </div>
        
        <div className="gallery-grid reveal reveal-delay-1">
          <div className="gallery-item"><img src={gallery1} alt="Gallery" /></div>
          <div className="gallery-item"><img src={gallery2} alt="Gallery" /></div>
          <div className="gallery-item"><img src={gallery3} alt="Gallery" /></div>
          <div className="gallery-item"><img src={gallery4} alt="Gallery" /></div>
        </div>
      </section>

      {/* ================= SECTION 6: THE OFFER ================= */}
      <section className="section section-white text-center">
        <div className="container container-narrow reveal">
          <span className="overline">Formule & Tarifs</span>
          <h2 className="mb-6">Choisissez votre rythme.</h2>

          <div className="pricing-card mx-auto">
            <h3 className="mb-8 text-blue" style={{ fontSize: 'var(--fs-xl)' }}>1 séance hebdomadaire</h3>
            <div style={{ borderTop: '1px solid rgba(0, 51, 160, 0.1)', paddingTop: 'var(--space-8)' }}>
              <div style={{ fontSize: 'var(--fs-5xl)', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                20 DT
              </div>
            </div>
          </div>
          
          <div className="pricing-card mx-auto mt-8">
            <h3 className="mb-8 text-blue" style={{ fontSize: 'var(--fs-xl)' }}>4 séances mensuelles</h3>
            <div style={{ borderTop: '1px solid rgba(0, 51, 160, 0.1)', paddingTop: 'var(--space-8)' }}>
              <div style={{ fontSize: 'var(--fs-5xl)', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                60 DT
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button onClick={() => openModal('réserver ma séance')} className="btn btn-primary">
              Réserver ma place
            </button>
            <p className="mt-6" style={{ fontSize: 'var(--fs-sm)' }}>Les lieux précis seront communiqués lors de l'inscription.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: AUTHORITY ================= */}
      <section className="section-white pt-32 pb-32">
        <div className="container container-narrow text-center mb-16 reveal">
          <span className="overline">À propos de l'accompagnatrice</span>
          <h2>Mÿriam Errais-Borges</h2>
          <p className="mx-auto mt-6" style={{ textAlign: 'left' }}>
            Coach en cohérence neuro-méditative, fortement impliquée dans l'accompagnement vers le bien-être holistique, MEB propose des sessions conçues comme des parenthèses ressourçantes, alliant profondeur et simplicité.
            <br/><br/>
            Née en 1968, Myriam Errais-Borges est une universitaire et une figure culturelle de premier plan, portée par une vocation profonde pour les arts, la culture et l'éducation. Docteure en Arts et Civilisations de la Sorbonne Paris-4 (2004), elle a exercé des responsabilités majeures (Musees Sans Frontières, Medina Mediterranea, Patrimoine sans Frontières).
            <br/><br/>
            Coordinatrice rédactionnelle de Ifriqiya puis Directrice éditoriale de "Confidences de Tunisie", historienne de l'art, elle est également auteure et critique d'art et conférencière. Parmi ses essais remarqués on retient "Les pouvoirs de la Culture en Tunisie", "La mosaïque de seuil", "La céramique de qallaline", "Portraits d’Ames". Elle est aussi certifiée en gestion de projets culturels et en Energy Coaching & leadership (World Network Consulting Services). Aujourd'hui, et en tant que artiste spirituelle, enseignante Universitaire à l'école des Beaux-Arts de Tunis à l'Université de Tunis, elle poursuit son engagement au service de la culture et du bien être par l'enseignement, la recherche sur les nouvelles pédagogies, l'art et l'écriture. Elle pratique depuis 20 ans, la cohérence neuro-cardio vasculaire.
          </p>
        </div>

        <div className="container text-center reveal reveal-delay-1">
          <div className="masterclass-video-wrapper relative" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '30px', overflow: 'hidden' }}>
            <img src={authorityImg} alt="Myriam Errais-Borges" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: FAQ ================= */}
      <section className="section section-off-white">
        <div className="container container-narrow reveal">
          <h2 className="mb-16 text-center">Préparation et Détails Pratiques.</h2>
          
          <FAQItem 
            question="Où et Quand ?" 
            answer="Choisissez le cadre qui vous inspire le plus : Matin (07h00) ou Après-midi (18h00). Les sessions se déroulent sur la plage ou dans un parc. Les lieux précis vous seront communiqués lors de l'inscription." 
          />
          <FAQItem 
            question="Que dois-je apporter ? (Préparation pratique)" 
            answer="Munissez-vous de chaussures confortables, d'une serviette de plage ou fouta, d'une bouteille d'eau, d'un chapeau ou casquette, et d'un maillot de bain (pour ceux qui souhaitent se baigner après la séance)." 
          />
          <FAQItem 
            question="Comment identifier mon besoin immédiat ?" 
            answer="Pour mieux vous cerner, nous vous invitons à remplir notre questionnaire d'intention lors de la réservation. Cela nous permettra de canaliser votre attention sur votre objectif personnel et de vous offrir un accompagnement sur mesure." 
          />
        </div>
      </section>

      {/* ================= SECTION 10: FINAL CLOSE ================= */}
      <section className="section section-blue text-center">
        <div className="container container-narrow reveal">
          <h2 className="mb-8 text-white">Réservez votre place</h2>
          <p className="mb-16 mx-auto" style={{ fontSize: 'var(--fs-xl)' }}>
            Les places sont limitées pour préserver la qualité de l'accompagnement.
          </p>
          <button onClick={() => openModal('réserver ma séance d\'été')} className="btn btn-primary">
            Contactez-nous dès maintenant
          </button>
          <p className="mt-8 text-light-muted" style={{ fontSize: 'var(--fs-base)' }}>
            Namaste 🙏
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{ backgroundColor: 'var(--bg-blue-dark)', padding: 'var(--space-12) 0', color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-sm)' }}>
        <div className="container text-center">
          © 2026 World Network Consulting Services. All rights reserved.
        </div>
      </footer>

      {/* ================= FLOATING WIDGETS ================= */}
      
      {/* Floating Center CTA (Appears on Scroll) */}
      <div 
        style={{
          position: 'fixed',
          bottom: showFloatingCTA ? '40px' : '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 999,
          opacity: showFloatingCTA ? 1 : 0,
          pointerEvents: showFloatingCTA ? 'auto' : 'none'
        }}
      >
        <button 
          onClick={() => openModal('réserver ma place')}
          className="btn btn-primary"
          style={{
            boxShadow: '0 20px 40px rgba(235, 38, 98, 0.4)',
            padding: '16px 32px',
            fontSize: '1rem',
            borderRadius: '50px'
          }}
        >
          Réserver ma place
        </button>
      </div>

      {/* Floating WhatsApp Corner Button */}
      <a 
        href="https://wa.me/21626135049?text=Bonjour,%20j'ai%20une%20question%20sur%20les%20sessions%20de%20cohérence." 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: !showFloatingCTA ? '40px' : '-100px',
          opacity: !showFloatingCTA ? 1 : 0,
          pointerEvents: !showFloatingCTA ? 'auto' : 'none',
          right: '40px',
          background: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => { if (!showFloatingCTA) e.currentTarget.style.transform = 'scale(1.1)' }}
        onMouseLeave={(e) => { if (!showFloatingCTA) e.currentTarget.style.transform = 'scale(1)' }}
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}

export default App;
