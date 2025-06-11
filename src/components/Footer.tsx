import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent font-montserrat">
              CraftGalaxy
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Лучший Minecraft сервер с уникальными возможностями. Присоединяйся
              к нашей космической семье уже сегодня!
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Discord
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <Icon name="Users" className="mr-2" size={16} />
                VK
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
              >
                <Icon name="Play" className="mr-2" size={16} />
                YouTube
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Игра</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила сервера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Команды
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гайды
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Подать жалобу
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 CraftGalaxy. Все права защищены.
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Сервер онлайн
              </span>
              <span>Онлайн: 1,247 игроков</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
