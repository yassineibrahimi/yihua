import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const phoneNumber = '8615888750003';
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      language === 'ar'
        ? `الاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالرسالة: ${formData.message}`
        : `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    toast({
      title: language === 'ar' ? 'تم إرسال الرسالة!' : 'Message Sent!',
      description: language === 'ar' 
        ? 'سنتواصل معك قريباً'
        : 'We will contact you soon',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      labelEn: 'Phone',
      labelAr: 'الهاتف',
      value: '+86 158 8875 0003',
      href: 'tel:+8615888750003',
    },
    {
      icon: Mail,
      labelEn: 'Email',
      labelAr: 'البريد الإلكتروني',
      value: 'peter@manyi-shoes.com',
      href: 'mailto:peter@manyi-shoes.com',
    },
    {
      icon: MapPin,
      labelEn: 'Address',
      labelAr: 'العنوان',
      value: t('contact.addressValue'),
      href: '#',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-industrial p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.phone')}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    dir="ltr"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {t('contact.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info & WhatsApp */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-[#25D366] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">WhatsApp</h3>
                    <p className="text-white/80">
                      {language === 'ar' ? 'تواصل فوري' : 'Instant Contact'}
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-white/90">
                  {language === 'ar' 
                    ? 'تواصل معنا مباشرة عبر واتساب للحصول على رد سريع'
                    : 'Connect with us directly via WhatsApp for quick response'}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-6 py-3 rounded-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('contact.whatsapp')}
                </a>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="card-industrial p-5 flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <info.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? info.labelAr : info.labelEn}
                      </p>
                      <p className="font-medium text-foreground" dir={info.icon === Phone ? 'ltr' : undefined}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="card-industrial overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4!2d120.65!3d27.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQ2JzQ4LjAiTiAxMjDCsDM5JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
