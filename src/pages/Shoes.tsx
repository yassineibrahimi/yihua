import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

import vulcanized1 from '@/assets/shoes/vulcanized-1.jpg';
import vulcanized2 from '@/assets/shoes/vulcanized-2.jpg';
import vulcanized3 from '@/assets/shoes/vulcanized-3.jpg';
import cemented1 from '@/assets/shoes/cemented-1.jpg';
import injection1 from '@/assets/shoes/injection-1.jpg';
import injection2 from '@/assets/shoes/injection-2.jpg';
import injection3 from '@/assets/shoes/injection-3.jpg';

const Shoes = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', nameEn: 'All Shoes', nameAr: 'جميع الأحذية' },
    { id: 'vulcanized', nameEn: 'Vulcanized', nameAr: 'مفلكن' },
    { id: 'cemented', nameEn: 'Cemented', nameAr: 'ملصق' },
    { id: 'injection', nameEn: 'Injection', nameAr: 'حقن' },
  ];

  const shoes = [
    {
      id: 1,
      category: 'vulcanized',
      image: vulcanized1,
      titleEn: 'Classic Canvas Sneaker',
      titleAr: 'حذاء قماشي كلاسيكي',
      descEn: 'Durable vulcanized construction',
      descAr: 'بناء مفلكن متين',
    },
    {
      id: 2,
      category: 'vulcanized',
      image: vulcanized2,
      titleEn: 'Casual Slip-On',
      titleAr: 'حذاء كاجوال سهل الارتداء',
      descEn: 'Comfortable everyday wear',
      descAr: 'مريح للارتداء اليومي',
    },
    {
      id: 3,
      category: 'vulcanized',
      image: vulcanized3,
      titleEn: 'Sport Canvas',
      titleAr: 'حذاء رياضي قماشي',
      descEn: 'Active lifestyle design',
      descAr: 'تصميم للحياة النشطة',
    },
    {
      id: 4,
      category: 'cemented',
      image: cemented1,
      titleEn: 'Premium Leather Shoe',
      titleAr: 'حذاء جلدي فاخر',
      descEn: 'High-quality cemented construction',
      descAr: 'بناء ملصق عالي الجودة',
    },
    {
      id: 5,
      category: 'injection',
      image: injection1,
      titleEn: 'Modern Injection Shoe',
      titleAr: 'حذاء حقن حديث',
      descEn: 'Advanced injection molding',
      descAr: 'قولبة حقن متقدمة',
    },
    {
      id: 6,
      category: 'injection',
      image: injection2,
      titleEn: 'Lightweight Sneaker',
      titleAr: 'حذاء رياضي خفيف',
      descEn: 'Ultralight injection design',
      descAr: 'تصميم حقن فائق الخفة',
    },
    {
      id: 7,
      category: 'injection',
      image: injection3,
      titleEn: 'Comfort Walker',
      titleAr: 'حذاء مريح للمشي',
      descEn: 'Ergonomic injection sole',
      descAr: 'نعل حقن مريح',
    },
  ];

  const filteredShoes = activeCategory === 'all' 
    ? shoes 
    : shoes.filter(shoe => shoe.category === activeCategory);

  const whatsappNumber = '+8615888750003';
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {language === 'ar' ? 'كتالوج الأحذية' : 'Shoes Catalog'}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'أحذية مفلكنة وحقن عالية الجودة - 400 موظف وطاقة إنتاجية 18,000 زوج يومياً'
              : 'High-quality vulcanized & injection shoes - 400 employees with 18,000 pairs daily capacity'}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'btn-gold' : ''}
              >
                {language === 'ar' ? cat.nameAr : cat.nameEn}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Shoes Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="card-industrial overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={shoe.image} 
                    alt={language === 'ar' ? shoe.titleAr : shoe.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs uppercase text-accent font-semibold">
                    {categories.find(c => c.id === shoe.category)?.[language === 'ar' ? 'nameAr' : 'nameEn']}
                  </span>
                  <h3 className="font-bold text-primary mt-1">
                    {language === 'ar' ? shoe.titleAr : shoe.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {language === 'ar' ? shoe.descAr : shoe.descEn}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {language === 'ar' ? 'استفسار عبر واتساب' : 'Inquire on WhatsApp'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Info */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="card-industrial p-6">
              <span className="text-4xl font-bold text-accent">400+</span>
              <p className="text-primary font-semibold mt-2">
                {language === 'ar' ? 'موظف' : 'Employees'}
              </p>
            </div>
            <div className="card-industrial p-6">
              <span className="text-4xl font-bold text-accent">18,000</span>
              <p className="text-primary font-semibold mt-2">
                {language === 'ar' ? 'زوج يومياً' : 'Pairs Daily'}
              </p>
            </div>
            <div className="card-industrial p-6">
              <span className="text-4xl font-bold text-accent">4,000</span>
              <p className="text-primary font-semibold mt-2">
                {language === 'ar' ? 'متر مربع' : 'SQM Factory'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shoes;
