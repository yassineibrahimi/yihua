import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function ContactCTA() {
  const { t, language } = useLanguage();
  
  const phoneNumber = '8615888750003';
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {language === 'ar' 
              ? 'مستعد للبدء؟' 
              : 'Ready to Get Started?'}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {language === 'ar' 
              ? 'تواصل معنا اليوم لمناقشة احتياجاتك من معدات تصنيع الأحذية'
              : 'Contact us today to discuss your shoe manufacturing equipment needs'}
          </p>

          {/* Contact Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              {t('contact.whatsapp')}
            </a>
            <a
              href="tel:+8615888750003"
              className="flex items-center gap-3 bg-primary-foreground/10 text-primary-foreground font-semibold px-6 py-3 rounded-lg border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">+86 158 8875 0003</span>
            </a>
            <a
              href="mailto:peter@manyi-shoes.com"
              className="flex items-center gap-3 bg-primary-foreground/10 text-primary-foreground font-semibold px-6 py-3 rounded-lg border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20"
            >
              <Mail className="w-5 h-5" />
              {language === 'ar' ? 'راسلنا' : 'Email Us'}
            </a>
          </div>

          <Link 
            to="/contact" 
            className="text-accent hover:underline font-medium"
          >
            {language === 'ar' ? 'أو املأ نموذج الاتصال ←' : 'Or fill out our contact form →'}
          </Link>
        </div>
      </div>
    </section>
  );
}
