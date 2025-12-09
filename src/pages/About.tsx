import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Award, Globe, Users, Factory } from 'lucide-react';
import factoryImage from '@/assets/about-factory.jpg';
import factoryInterior from '@/assets/factory-interior.jpg';

const About = () => {
  const { t, language } = useLanguage();

  const milestones = language === 'ar' 
    ? [
        { year: '2005', text: 'تأسيس الشركة في روي آن، الصين' },
        { year: '2010', text: 'توسيع قاعدة الإنتاج إلى 10,000 متر مربع' },
        { year: '2015', text: 'إطلاق خطوط الإنتاج الذكية' },
        { year: '2020', text: 'التصدير إلى أكثر من 50 دولة' },
        { year: '2024', text: 'إطلاق جيل جديد من آلات القطع الذكية' },
      ]
    : [
        { year: '2005', text: 'Company founded in Rui\'an, China' },
        { year: '2010', text: 'Expanded production base to 10,000 sqm' },
        { year: '2015', text: 'Launched intelligent production lines' },
        { year: '2020', text: 'Exporting to 50+ countries' },
        { year: '2024', text: 'New generation smart cutting machines released' },
      ];

  const values = [
    {
      icon: Award,
      titleEn: 'Quality First',
      titleAr: 'الجودة أولاً',
      descEn: 'Every machine undergoes rigorous testing before delivery',
      descAr: 'كل آلة تخضع لاختبارات صارمة قبل التسليم',
    },
    {
      icon: Globe,
      titleEn: 'Global Reach',
      titleAr: 'الانتشار العالمي',
      descEn: 'Serving customers in over 50 countries worldwide',
      descAr: 'خدمة العملاء في أكثر من 50 دولة حول العالم',
    },
    {
      icon: Users,
      titleEn: 'Expert Team',
      titleAr: 'فريق خبراء',
      descEn: 'Experienced engineers and technicians at your service',
      descAr: 'مهندسون وفنيون ذوو خبرة في خدمتكم',
    },
    {
      icon: Factory,
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'Continuous R&D for cutting-edge solutions',
      descAr: 'البحث والتطوير المستمر لحلول متطورة',
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
                {t('about.description')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'ar' 
                  ? 'تماشياً مع موجة تحديث الصناعة، تقود الشركة في إدخال معدات الإنتاج المتخصصة عالية التقنية والجودة في مجال تصنيع الأحذية، وتروج بنشاط التقنيات الأساسية والمعدات الذكية للتصدير إلى الخارج.'
                  : 'Based on the trend of industry upgrading, the company takes the lead in introducing high-tech, high-quality professional production equipment in shoe manufacturing, and actively promotes core technologies and intelligent equipment for overseas exports.'}
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
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
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

      {/* Timeline */}
      <section className="py-16 bg-background">
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

      {/* Factory Image */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden card-industrial">
            <img 
              src={factoryInterior} 
              alt="Factory Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
