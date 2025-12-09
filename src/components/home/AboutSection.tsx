import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import factoryImage from '@/assets/about-factory.jpg';

export function AboutSection() {
  const { t, language } = useLanguage();

  const features = language === 'ar' 
    ? [
        'تصميم وتطوير متقدم',
        'خطوط إنتاج ذكية',
        'ضمان الجودة',
        'دعم عالمي',
      ]
    : [
        'Advanced R&D Design',
        'Intelligent Production Lines',
        'Quality Assurance',
        'Global Support',
      ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden card-industrial">
              <img 
                src={factoryImage} 
                alt="Yihua Factory" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-accent rounded-xl p-6 shadow-xl max-w-xs">
              <p className="text-accent-foreground font-bold text-2xl mb-1">20+</p>
              <p className="text-accent-foreground/80 text-sm">
                {language === 'ar' ? 'سنة عمر الآلات' : 'Years Machine Lifespan'}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:ps-8">
            <h2 className="section-heading">{t('about.title')}</h2>
            <h3 className="text-xl font-semibold text-accent mb-4">{t('about.subtitle')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Vision */}
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-bold text-primary mb-2">{t('about.vision')}</h4>
              <p className="text-secondary-foreground text-sm">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
