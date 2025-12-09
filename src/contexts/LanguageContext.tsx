import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.catalog': 'Catalog',
    
    // Hero
    'hero.title': 'Wenzhou Yihua Industry',
    'hero.subtitle': 'Leading Manufacturer of Professional Shoe Making Machinery',
    'hero.description': 'Over 18 years of excellence in shoe manufacturing equipment. Precision engineering, global delivery.',
    'hero.cta': 'Explore Products',
    'hero.contact': 'Contact Us',
    
    // About
    'about.title': 'About Our Company',
    'about.subtitle': 'Excellence in Shoe Manufacturing Technology',
    'about.description': 'Founded in 2005, Wenzhou Yihua Industrial Co., Ltd. is a technology-driven enterprise specializing in shoe and footwear material R&D, production, and sales. Located in the "China Shoe Capital" Rui\'an, Zhejiang Province, we operate a 10,000+ sqm standardized production base with multiple intelligent automated production lines.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the benchmark enterprise for coordinated development of the global footwear industry.',
    'about.experience': 'Years Experience',
    'about.sqm': 'SQM Production Base',
    'about.countries': 'Countries Served',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Professional Shoe Manufacturing Equipment',
    'products.viewAll': 'View All Products',
    'products.learnMore': 'Learn More',
    'products.category.cutting': 'Cutting Machines',
    'products.category.sewing': 'Sewing Machines',
    'products.category.folding': 'Folding Machines',
    'products.category.pattern': 'Pattern Machines',
    'products.category.leather': 'Leather Cutting',
    'products.category.marking': 'Marking Systems',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch With Our Team',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.address': 'Address',
    'contact.addressValue': 'Rubber Shoes Industrial Park, Xianjiang Street, Ruian City, Zhejiang, China',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.company': 'Wenzhou Yihua Industry Co., Ltd.',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in your shoe making machines.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.contact': 'اتصل بنا',
    'nav.catalog': 'الكتالوج',
    
    // Hero
    'hero.title': 'شركة ونتشو يهوا الصناعية',
    'hero.subtitle': 'الشركة الرائدة في تصنيع آلات صناعة الأحذية',
    'hero.description': 'أكثر من 18 عاماً من التميز في معدات تصنيع الأحذية. هندسة دقيقة وتوصيل عالمي.',
    'hero.cta': 'استكشف المنتجات',
    'hero.contact': 'اتصل بنا',
    
    // About
    'about.title': 'عن شركتنا',
    'about.subtitle': 'التميز في تكنولوجيا تصنيع الأحذية',
    'about.description': 'تأسست شركة ونتشو يهوا الصناعية عام 2005، وهي مؤسسة تقنية متخصصة في البحث والتطوير والإنتاج والمبيعات لمواد الأحذية. تقع في "عاصمة الأحذية الصينية" روي آن، مقاطعة تشجيانغ، ونعمل على قاعدة إنتاج موحدة تزيد عن 10,000 متر مربع مع خطوط إنتاج آلية ذكية متعددة.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نكون المؤسسة المرجعية للتنمية المتناسقة لصناعة الأحذية العالمية.',
    'about.experience': 'سنوات الخبرة',
    'about.sqm': 'متر مربع قاعدة الإنتاج',
    'about.countries': 'دولة نخدمها',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'معدات تصنيع الأحذية الاحترافية',
    'products.viewAll': 'عرض جميع المنتجات',
    'products.learnMore': 'اعرف المزيد',
    'products.category.cutting': 'آلات القطع',
    'products.category.sewing': 'آلات الخياطة',
    'products.category.folding': 'آلات الطي',
    'products.category.pattern': 'آلات الأنماط',
    'products.category.leather': 'قطع الجلود',
    'products.category.marking': 'أنظمة الوسم',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.whatsapp': 'تحدث عبر واتساب',
    'contact.address': 'العنوان',
    'contact.addressValue': 'المنطقة الصناعية للأحذية المطاطية، شارع شيانجيانغ، مدينة روي آن، تشجيانغ، الصين',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.phoneLabel': 'الهاتف',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.company': 'شركة ونتشو يهوا الصناعية المحدودة',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بآلات صناعة الأحذية الخاصة بكم.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
