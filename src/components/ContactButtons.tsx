import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-3">
      <a 
        href="https://wa.me/79991234567?text=Здравствуйте! Меня интересуют ваши продукты для водоснабжения" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group"
      >
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 
                     sm:pr-6 sm:pl-6 p-3 sm:p-4"
        >
          <MessageCircle className="h-5 w-5 sm:mr-2" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>
      </a>
      
      <a href="tel:+79991234567" className="group">
        <Button 
          size="lg" 
          variant="hero"
          className="shadow-xl hover:shadow-2xl transition-all hover:scale-110 
                     sm:pr-6 sm:pl-6 p-3 sm:p-4"
        >
          <Phone className="h-5 w-5 sm:mr-2" />
          <span className="hidden sm:inline">Позвонить</span>
        </Button>
      </a>
    </div>
  );
};

export default ContactButtons;