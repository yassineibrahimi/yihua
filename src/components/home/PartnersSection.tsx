import { useLanguage } from '@/contexts/LanguageContext';

const partners = [
  'Bata', 'ZARA', 'Disney', 'Walmart', 'K-SWISS', 'TOM TAILOR', 'KÉDDO', 'sinsay', 'Jenny fairy'
];

export const PartnersSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {language === 'ar' ? 'شراكاتنا' : 'Our Partners'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {language === 'ar' ? 'شركاء النجاح العالميين' : 'Global Success Partners'}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نفتخر بالعمل مع أكبر العلامات التجارية العالمية في صناعة الأحذية'
              : 'We are proud to work with the biggest global brands in the footwear industry'}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="px-6 py-4 bg-background rounded-xl border border-border hover:border-accent transition-colors duration-300"
            >
              <span className="font-bold text-lg text-primary">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
