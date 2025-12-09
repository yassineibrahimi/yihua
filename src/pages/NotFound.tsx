import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <p className="text-2xl text-primary font-semibold mb-2">
            {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </p>
          <p className="text-muted-foreground mb-8">
            {language === 'ar' 
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة'
              : 'Sorry, the page you are looking for does not exist'}
          </p>
          <Link to="/" className="btn-gold inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            {language === 'ar' ? 'العودة للرئيسية' : 'Return Home'}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
