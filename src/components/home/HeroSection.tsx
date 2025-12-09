import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const { t, language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">
              {language === 'ar' ? 'منذ 2005' : 'Since 2005'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle with gradient */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold gradient-text mb-6">
            {t('hero.subtitle')}
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-gold flex items-center gap-2">
              {t('hero.cta')}
              <Arrow className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold px-6 py-3 rounded-lg border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20"
            >
              {t('hero.contact')}
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">18+</p>
              <p className="text-primary-foreground/70 text-sm">{t('about.experience')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">10,000+</p>
              <p className="text-primary-foreground/70 text-sm">{t('about.sqm')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">50+</p>
              <p className="text-primary-foreground/70 text-sm">{t('about.countries')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
