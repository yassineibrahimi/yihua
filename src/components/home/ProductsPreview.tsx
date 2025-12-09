import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import cuttingMachine from '@/assets/products/cutting-machine-1.jpg';
import sewingMachine from '@/assets/products/sewing-machine-1.jpg';
import leatherCutting from '@/assets/products/leather-cutting.jpg';
import patternMachine from '@/assets/products/pattern-machine.jpg';

export function ProductsPreview() {
  const { t, language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const products = [
    {
      id: 1,
      image: cuttingMachine,
      titleEn: 'Smart Cutting Machines',
      titleAr: 'آلات القطع الذكية',
      descEn: 'High-precision cutting with 20+ years lifespan',
      descAr: 'قطع عالي الدقة مع عمر افتراضي يزيد عن 20 عامًا',
      category: 'cutting',
    },
    {
      id: 2,
      image: sewingMachine,
      titleEn: 'Post Bed Sewing Machines',
      titleAr: 'آلات الخياطة العمودية',
      descEn: 'Automatic thread cutting & LCD control',
      descAr: 'قص خيط تلقائي وتحكم بشاشة LCD',
      category: 'sewing',
    },
    {
      id: 3,
      image: leatherCutting,
      titleEn: 'Leather Cutting Systems',
      titleAr: 'أنظمة قطع الجلود',
      descEn: 'Professional leather processing equipment',
      descAr: 'معدات معالجة الجلود الاحترافية',
      category: 'leather',
    },
    {
      id: 4,
      image: patternMachine,
      titleEn: 'Pattern Sewing Machines',
      titleAr: 'آلات خياطة الأنماط',
      descEn: 'Programmable pattern stitching',
      descAr: 'غرز أنماط قابلة للبرمجة',
      category: 'pattern',
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading">{t('products.title')}</h2>
          <p className="section-subheading mx-auto">{t('products.subtitle')}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to="/products"
              className="card-industrial group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={language === 'ar' ? product.titleAr : product.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {language === 'ar' ? product.titleAr : product.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === 'ar' ? product.descAr : product.descEn}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                  {t('products.learnMore')}
                  <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products" className="btn-gold inline-flex items-center gap-2">
            {t('products.viewAll')}
            <Arrow className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
