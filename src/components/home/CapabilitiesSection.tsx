import { useLanguage } from '@/contexts/LanguageContext';
import { Printer, Palette, Scissors, CheckCircle } from 'lucide-react';

export const CapabilitiesSection = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: Printer,
      titleEn: 'Digital Printing',
      titleAr: 'الطباعة الرقمية',
      descEn: 'High-quality digital and screen printing',
      descAr: 'طباعة رقمية وحريرية عالية الجودة',
    },
    {
      icon: Palette,
      titleEn: 'Camo & Sweat Printing',
      titleAr: 'طباعة المموه والتفاعلية',
      descEn: 'Special effect prints including sweat-activated designs',
      descAr: 'طباعة بتأثيرات خاصة بما في ذلك التصاميم المفعلة بالعرق',
    },
    {
      icon: Scissors,
      titleEn: 'High Quality Embroidery',
      titleAr: 'تطريز عالي الجودة',
      descEn: 'Premium embroidery for all shoe types',
      descAr: 'تطريز ممتاز لجميع أنواع الأحذية',
    },
    {
      icon: CheckCircle,
      titleEn: 'Silicone & High Density Print',
      titleAr: 'طباعة السيليكون والكثافة العالية',
      descEn: 'Advanced printing techniques for durability',
      descAr: 'تقنيات طباعة متقدمة للمتانة',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {language === 'ar' ? 'قدراتنا' : 'Our Capabilities'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {language === 'ar' ? 'ماذا يمكننا أن نفعل؟' : 'What Can We Do?'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="card-industrial p-6 text-center hover:border-accent transition-colors">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <cap.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">
                {language === 'ar' ? cap.titleAr : cap.titleEn}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === 'ar' ? cap.descAr : cap.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
