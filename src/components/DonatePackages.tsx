import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DonatePackages = () => {
  const packages = [
    {
      name: "Астронавт",
      price: "199 ₽",
      popular: false,
      color: "from-blue-500 to-blue-600",
      features: [
        "Префикс [Астронавт]",
        "Доступ к /kit astronaut",
        "Приватный варп",
        "Цветной ник в чате",
        "3 дома (/sethome)",
      ],
    },
    {
      name: "Космонавт",
      price: "399 ₽",
      popular: true,
      color: "from-purple-500 to-purple-600",
      features: [
        "Все привилегии Астронавта",
        "Префикс [Космонавт]",
        "Доступ к /fly в лобби",
        "Уникальные эффекты",
        "5 домов (/sethome)",
        "Приоритетный вход",
      ],
    },
    {
      name: "Капитан",
      price: "799 ₽",
      popular: false,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Все привилегии Космонавта",
        "Префикс [Капитан]",
        "Доступ к /god",
        "Телепортация к игрокам",
        "10 домов (/sethome)",
        "Эксклюзивные кейсы",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-montserrat">
            🚀 Донат-пакеты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Поддержи сервер и получи уникальные привилегии для космических
            приключений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                pkg.popular ? "ring-2 ring-purple-500 ring-offset-2" : ""
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Популярный
                </Badge>
              )}

              <CardHeader
                className={`bg-gradient-to-r ${pkg.color} text-white relative`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold">{pkg.price}</div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        size={18}
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3`}
                  size="lg"
                >
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            💡 Все донат-привилегии действуют навсегда!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="Gift" className="mr-2" />
            Промокоды и скидки
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonatePackages;
