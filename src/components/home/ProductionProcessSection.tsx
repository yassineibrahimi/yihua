import { useLanguage } from '@/contexts/LanguageContext';
import sampleRoom from '@/assets/sample-room.jpg';
import qualityControl from '@/assets/quality-control.jpg';

export const ProductionProcessSection = () => {
  const { language } = useLanguage();

  const processes = language === 'ar' 
    ? [
        { step: '01', title: 'غرفة العينات', desc: 'البحث والتطوير وإنشاء العينات' },
        { step: '02', title: 'فحص المواد', desc: 'فحص جودة الأقمشة والمواد الخام' },
        { step: '03', title: 'قسم القطع', desc: 'قطع دقيق باستخدام تقنية متقدمة' },
        { step: '04', title: 'الطباعة والتطريز', desc: 'طباعة ثلاثية الأبعاد وتطريز' },
        { step: '05', title: 'قسم الخياطة', desc: 'خياطة الجزء العلوي من الحذاء' },
        { step: '06', title: 'قسم التشكيل', desc: 'تشكيل الحذاء على القالب' },
        { step: '07', title: 'فحص الجودة', desc: 'اختبار صارم قبل التغليف' },
        { step: '08', title: 'التغليف والشحن', desc: 'تغليف وتسليم للعملاء' },
      ]
    : [
        { step: '01', title: 'Sample Room', desc: 'R&D and sample creation' },
        { step: '02', title: 'Fabric Inspection', desc: 'Quality check of fabrics and raw materials' },
        { step: '03', title: 'Cutting Department', desc: 'Precision cutting with advanced technology' },
        { step: '04', title: '3D Printing & Embroidery', desc: '3D printing and embroidery work' },
        { step: '05', title: 'Sewing Department', desc: 'Upper shoe stitching' },
        { step: '06', title: 'Lasting Department', desc: 'Shoe shaping on the last' },
        { step: '07', title: 'Quality Inspection', desc: 'Rigorous testing before packaging' },
        { step: '08', title: 'Packing & Delivery', desc: 'Packaging and customer delivery' },
      ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {language === 'ar' ? 'عملية الإنتاج' : 'Production Process'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {language === 'ar' ? 'كيف نصنع الأحذية؟' : 'How We Make Shoes'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden card-industrial">
            <img src={sampleRoom} alt="Sample Room" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden card-industrial">
            <img src={qualityControl} alt="Quality Control" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {processes.map((process, index) => (
            <div key={index} className="card-industrial p-4 text-center">
              <span className="text-accent font-bold text-2xl">{process.step}</span>
              <h4 className="font-bold text-primary mt-2 text-sm">{process.title}</h4>
              <p className="text-muted-foreground text-xs mt-1">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
