import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Award, Globe, Users, Factory, Shield, Truck, Settings } from 'lucide-react';
import factoryImage from '@/assets/about-factory.jpg';
import factoryInterior from '@/assets/factory-interior.jpg';
import showroom from '@/assets/showroom.jpg';
import partners from '@/assets/partners.jpg';

const About = () => {
  const { t, language } = useLanguage();

  const milestones = language === 'ar' 
    ? [
        { year: '2001', text: 'تأسيس الشركة في روي آن، الصين' },
        { year: '2008', text: 'توسيع الفريق إلى 200 موظف' },
        { year: '2012', text: 'الحصول على شهادة BSCI' },
        { year: '2016', text: 'اجتياز تدقيق ديزني' },
        { year: '2020', text: 'التصدير إلى أكثر من 50 دولة' },
        { year: '2024', text: 'توسيع الطاقة الإنتاجية إلى 18,000 زوج يومياً' },
      ]
    : [
        { year: '2001', text: 'Company founded in Rui\'an, China' },
        { year: '2008', text: 'Expanded team to 200 employees' },
        { year: '2012', text: 'Obtained BSCI certification' },
        { year: '2016', text: 'Passed Disney Audit' },
        { year: '2020', text: 'Exporting to 50+ countries' },
        { year: '2024', text: 'Expanded capacity to 18,000 pairs daily' },
      ];

  const values = [
    {
      icon: Award,
      titleEn: 'Quality First',
      titleAr: 'الجودة أولاً',
      descEn: 'Self-testing for physical & chemical tests plus third-party testing',
      descAr: 'اختبار ذاتي للفحوصات الفيزيائية والكيميائية بالإضافة إلى اختبار طرف ثالث',
    },
    {
      icon: Globe,
      titleEn: 'Global Reach',
      titleAr: 'الانتشار العالمي',
      descEn: 'Partners include Bata, ZARA, Disney, Walmart, K-SWISS & more',
      descAr: 'شركاؤنا يشملون باتا، زارا، ديزني، وول مارت، كي سويس والمزيد',
    },
    {
      icon: Users,
      titleEn: '400+ Employees',
      titleAr: '+400 موظف',
      descEn: '6 technicians and 20 workers in sample room for R&D',
      descAr: '6 فنيين و20 عاملاً في غرفة العينات للبحث والتطوير',
    },
    {
      icon: Factory,
      titleEn: '4,000 SQM Factory',
      titleAr: '4,000 متر مربع مصنع',
      descEn: '3 production lines with 18,000 pairs daily output',
      descAr: '3 خطوط إنتاج بطاقة 18,000 زوج يومياً',
    },
    {
      icon: Shield,
      titleEn: 'Certified Quality',
      titleAr: 'جودة معتمدة',
      descEn: 'BSCI certified & Disney Audit approved',
      descAr: 'حاصلون على شهادة BSCI ومعتمدون من تدقيق ديزني',
    },
    {
      icon: Truck,
      titleEn: 'Fast Delivery',
      titleAr: 'توصيل سريع',
      descEn: 'One week lead time for samples',
      descAr: 'أسبوع واحد للعينات',
    },
    {
      icon: Settings,
      titleEn: 'Eco Materials',
      titleAr: 'مواد صديقة للبيئة',
      descEn: 'Organic and recycled materials available',
      descAr: 'مواد عضوية ومعاد تدويرها متاحة',
    },
    {
      icon: CheckCircle,
      titleEn: 'Full Service',
      titleAr: 'خدمة كاملة',
      descEn: 'Complete sales & after-sales service team',
      descAr: 'فريق مبيعات وخدمة ما بعد البيع متكامل',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t('about.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {language === 'ar' 
                  ? 'تأسست شركة ونتشو يهوا الصناعية عام 2001. نحن متخصصون في منطقة الأحذية المطاطية المهنية في مدينة روي آن. الآن لدينا 400 موظف. نحن أقوياء في الأحذية المفلكنة والأحذية بالحقن. كما ننتج ونبيع المواد الخام.'
                  : 'Wenzhou Yihua Industry Co., Ltd. is established in 2001. We are located in the professional rubber shoes area Ruian city. Now we have 400 employees. We are strong at vulcanized shoes and injection shoes. We also produce and sale raw material.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'ar' 
                  ? 'لدينا مباني منفصلة للمبيعات والإنتاج. مع المعدات المتقدمة والجودة الممتازة والبحث والتطوير المتميز ونظام المبيعات الجيد والخدمة المثالية، نكتسب دائمًا سمعة رائعة من العملاء.'
                  : 'We have separate sales and production buildings. With advanced equipment, excellent quality, top R&D, good sales system and perfect service, we always earn great reputation from customers.'}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden card-industrial">
                <img 
                  src={factoryImage} 
                  alt="Yihua Factory" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              {language === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us?'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-industrial p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">
                  {language === 'ar' ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' ? value.descAr : value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-heading">
              {language === 'ar' ? 'شركاؤنا' : 'Our Partners'}
            </h2>
          </div>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden card-industrial">
            <img 
              src={partners} 
              alt="Our Partners" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              {language === 'ar' ? 'محطاتنا' : 'Our Journey'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-primary text-lg">{milestone.year}</p>
                  <p className="text-muted-foreground">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom & Factory Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden card-industrial">
              <img 
                src={showroom} 
                alt="Showroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden card-industrial">
              <img 
                src={factoryInterior} 
                alt="Factory Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
