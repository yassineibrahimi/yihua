import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">YH</span>
              </div>
              <h3 className="font-bold text-lg">{t('footer.company')}</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {language === 'ar' 
                ? 'منذ 2005، نقدم حلول تصنيع الأحذية المتقدمة للعالم.'
                : 'Since 2005, delivering advanced shoe manufacturing solutions globally.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.products')}
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {t('contact.title')}
            </h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:peter@manyi-shoes.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">peter@manyi-shoes.com</span>
              </a>
              <a 
                href="tel:+8615888750003" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm" dir="ltr">+86 158 8875 0003</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-sm">{t('contact.addressValue')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
