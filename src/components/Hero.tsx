
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent font-montserrat">
              CraftGalaxy
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-purple-100">
              ⭐ Лучший Minecraft сервер в галактике
            </p>
            <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
              Присоединяйся к тысячам игроков в невероятных приключениях. 
              Уникальные режимы, дружелюбное сообщество и космические возможности!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button variant="outline" size="lg" className="border-purple-300 text-purple-100 hover:bg-purple-800 px-8 py-4 text-lg">
              <Icon name="Users" className="mr-2" />
              Сообщество
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <Icon name="Users" size={40} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">2,500+</h3>
              <p className="text-purple-200">Активных игроков</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <Icon name="Zap" size={40} className="mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2">99.9%</h3>
              <p className="text-purple-200">Время работы</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <Icon name="Award" size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">5 лет</h3>
              <p className="text-purple-200">Стабильной работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
