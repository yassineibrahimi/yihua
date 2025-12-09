import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import cuttingMachine from '@/assets/products/cutting-machine-1.jpg';
import sewingMachine from '@/assets/products/sewing-machine-1.jpg';
import leatherCutting from '@/assets/products/leather-cutting.jpg';
import patternMachine from '@/assets/products/pattern-machine.jpg';
import foldingMachine from '@/assets/products/folding-machine.jpg';

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', labelEn: 'All Products', labelAr: 'جميع المنتجات' },
    { id: 'cutting', labelEn: 'Cutting Machines', labelAr: 'آلات القطع' },
    { id: 'sewing', labelEn: 'Sewing Machines', labelAr: 'آلات الخياطة' },
    { id: 'folding', labelEn: 'Folding Machines', labelAr: 'آلات الطي' },
    { id: 'pattern', labelEn: 'Pattern Machines', labelAr: 'آلات الأنماط' },
  ];

  const products = [
    {
      id: 1,
      image: cuttingMachine,
      titleEn: 'T1/S6090 Smart Cutting Machine',
      titleAr: 'آلة القطع الذكية T1/S6090',
      descEn: 'Projection positioning, vacuum adsorption, 20+ years lifespan. Equipped with Japan THK rails and Panasonic servo drive.',
      descAr: 'تحديد موقع الإسقاط، امتصاص الفراغ، عمر افتراضي 20+ سنة. مجهزة بقضبان THK اليابانية ومحرك سيرفو باناسونيك.',
      category: 'cutting',
      specsEn: ['Cutting area: 600x900mm', 'Voltage: AC220V 50HZ', 'Weight: 485KG'],
      specsAr: ['مساحة القطع: 600x900mm', 'الجهد: AC220V 50HZ', 'الوزن: 485KG'],
    },
    {
      id: 2,
      image: sewingMachine,
      titleEn: 'S6/S6F Post Bed Sewing Machine',
      titleAr: 'آلة الخياطة العمودية S6/S6F',
      descEn: 'Stepper motor system, LCD touch screen, automatic thread cutting. For boots, sports shoes, work shoes.',
      descAr: 'نظام محرك متدرج، شاشة لمس LCD، قص خيط تلقائي. للأحذية الطويلة والرياضية وأحذية العمل.',
      category: 'sewing',
      specsEn: ['Max speed: 3000 R.P.M', 'Stitch length: 7.0mm', 'Needle: DP*5'],
      specsAr: ['السرعة القصوى: 3000 R.P.M', 'طول الغرزة: 7.0mm', 'الإبرة: DP*5'],
    },
    {
      id: 3,
      image: leatherCutting,
      titleEn: 'Leather Cutting System',
      titleAr: 'نظام قطع الجلود',
      descEn: 'HD visual cutting system, automatic nesting, high precision ±0.50mm. Dual projection preview positioning.',
      descAr: 'نظام قطع بصري عالي الدقة، تعشيش تلقائي، دقة عالية ±0.50mm. تحديد موقع معاينة إسقاط مزدوج.',
      category: 'cutting',
      specsEn: ['Cutting area: 1560x5800mm', 'Voltage: AC380V', 'Weight: 2650KG'],
      specsAr: ['مساحة القطع: 1560x5800mm', 'الجهد: AC380V', 'الوزن: 2650KG'],
    },
    {
      id: 4,
      image: patternMachine,
      titleEn: 'Automatic Pattern Sewing Machine',
      titleAr: 'آلة خياطة الأنماط التلقائية',
      descEn: 'Full-automatic computer pattern machine with programmable stitching. Optional side slide device.',
      descAr: 'آلة نمط كمبيوتر أوتوماتيكية بالكامل مع غرز قابل للبرمجة. جهاز انزلاق جانبي اختياري.',
      category: 'pattern',
      specsEn: ['LCD controller', 'Pattern memory', 'Auto presser foot'],
      specsAr: ['وحدة تحكم LCD', 'ذاكرة النمط', 'رفع تلقائي للقدم'],
    },
    {
      id: 5,
      image: foldingMachine,
      titleEn: 'Automatic Folding Machine',
      titleAr: 'آلة الطي التلقائية',
      descEn: 'Automatic gluing and folding edge machine. High efficiency for insole and upper processing.',
      descAr: 'آلة لصق وطي الحواف تلقائية. كفاءة عالية لمعالجة النعل الداخلي والجزء العلوي.',
      category: 'folding',
      specsEn: ['Auto gluing', 'Edge folding', 'High efficiency'],
      specsAr: ['لصق تلقائي', 'طي الحواف', 'كفاءة عالية'],
    },
    {
      id: 6,
      image: sewingMachine,
      titleEn: 'S6-961TS Slim Column Sewing',
      titleAr: 'آلة الخياطة العمودية الرفيعة S6-961TS',
      descEn: 'Special slim column (43x50x180mm), perfect for small-sized shoe uppers. Stepper motor control.',
      descAr: 'عمود رفيع خاص (43x50x180mm)، مثالي للأجزاء العلوية للأحذية الصغيرة. تحكم بمحرك متدرج.',
      category: 'sewing',
      specsEn: ['Slim column design', 'Max speed: 3000 R.P.M', 'Direct drive'],
      specsAr: ['تصميم عمود رفيع', 'السرعة القصوى: 3000 R.P.M', 'محرك مباشر'],
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t('products.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-5 py-2 rounded-full font-medium transition-all duration-300",
                  selectedCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                )}
              >
                {language === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="card-industrial animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={language === 'ar' ? product.titleAr : product.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {language === 'ar' ? product.titleAr : product.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'ar' ? product.descAr : product.descEn}
                  </p>
                  
                  {/* Specs */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-sm text-foreground mb-2">
                      {language === 'ar' ? 'المواصفات:' : 'Specifications:'}
                    </h4>
                    <ul className="space-y-1">
                      {(language === 'ar' ? product.specsAr : product.specsEn).map((spec, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/8615888750003?text=${encodeURIComponent(
                      language === 'ar' 
                        ? `مرحباً، أنا مهتم بـ ${product.titleAr}`
                        : `Hello, I'm interested in ${product.titleEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full mt-4 text-center block"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
