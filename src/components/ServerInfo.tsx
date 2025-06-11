import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  const gameMode = [
    {
      icon: "Sword",
      title: "Выживание",
      description: "Классический режим с уникальными дополнениями",
    },
    {
      icon: "Zap",
      title: "SkyBlock",
      description: "Строй свой остров в небесах",
    },
    {
      icon: "Target",
      title: "PvP Арена",
      description: "Сражайся с другими игроками",
    },
    {
      icon: "Users",
      title: "Мини-игры",
      description: "Десятки увлекательных мини-игр",
    },
  ];

  const features = [
    {
      icon: "Shield",
      title: "Защита от гриферов",
      description: "Надежная система защиты твоих построек",
    },
    {
      icon: "Star",
      title: "Уникальные плагины",
      description: "Эксклюзивные возможности только на нашем сервере",
    },
    {
      icon: "MessageCircle",
      title: "Активное сообщество",
      description: "Дружелюбные игроки и опытные модераторы",
    },
    {
      icon: "Rocket",
      title: "Регулярные обновления",
      description: "Новый контент и события каждую неделю",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-montserrat">
            ⚡ О сервере
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            CraftGalaxy — это не просто Minecraft сервер, это целая вселенная
            возможностей
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-lg max-w-md mx-auto mb-8">
            play.craftgalaxy.ru
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🎮 Игровые режимы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameMode.map((mode, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <Icon
                    name={mode.icon as any}
                    size={48}
                    className="mx-auto mb-4 text-purple-600"
                  />
                  <CardTitle className="text-lg">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ✨ Особенности сервера
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Готов к приключениям?
            </h3>
            <p className="text-lg mb-4">
              Скопируй IP-адрес и подключайся к серверу прямо сейчас!
            </p>
            <div className="text-sm opacity-90">Версия Minecraft: 1.20.x</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
