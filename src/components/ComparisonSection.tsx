import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingDown, CheckCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonSection = () => {
  const { t, language } = useLanguage();

  // Было: useState(30)
  // Стало: пустая строка, чтобы поле было пустым по умолчанию
  const [teamSize, setTeamSize] = useState<string>("");

  // Фиксированные значения
  const avgWeight = 70;     // средний вес сотрудника (кг)
  const bottlePrice = 1100; // цена за бутыль 19л
  const purifierCost = 4;   // стоимость за литр с пурифайером

  // Парсим число людей только из введённой строки
  const teamSizeNum = Number(teamSize) || 0;

  // Расчёт потребления воды
  const dailyWaterPerPerson = (avgWeight * 30) / 1000; // литров в день на человека
  const monthlyWaterPerPerson = dailyWaterPerPerson * 22; // 22 рабочих дня
  const totalMonthlyWater = monthlyWaterPerPerson * teamSizeNum;
  const bottlesNeeded = Math.ceil(totalMonthlyWater / 19); // бутылей 19л

  const dispenserCost = bottlesNeeded * bottlePrice;
  const purifierTotalCost = totalMonthlyWater * purifierCost;
  const monthlySavings = Math.max(0, dispenserCost - purifierTotalCost);
  const savingsPercent = dispenserCost > 0 ? Math.round((monthlySavings / dispenserCost) * 79) : 0;

  const formatOrDash = (val: number | string, opts?: Intl.NumberFormatOptions) => {
    if (!teamSizeNum) return "—";
    if (typeof val === "string") return val || "—";
    if (!isFinite(val)) return "—";
    if (opts) return val.toLocaleString(undefined, opts);
    return val.toLocaleString();
  };

  const content = {
    ru: {
      title: "Сравнение затрат: Диспенсер vs Пурифайер",
      subtitle: "Почему это выгодно?",
      description: "В таблице взяты средние расчеты потребления воды в коллективе из 30 человек",
      calculator: {
        title: "Калькулятор потребления воды",
        formula: "Формула расчета: 30 мл на кг массы тела",
        weight: "Средний вес сотрудника (кг)",
        teamSize: "Количество человек в офисе",
        dailyPerPerson: "Потребление в день на человека",
        monthlyTotal: "Общее потребление в месяц",
        bottlesNeeded: "Необходимо бутылей (19л)",
      },
      dispenser: {
        name: "Диспенсер",
        bottlePrice: "Стоимость 1 бутыли (19л)",
        bottlesPerMonth: "Кол-во бутылей в месяц",
        waterPrice: "Цена за литр воды",
        totalCost: "Общая сумма затрат/мес",
      },
      purifier: {
        name: "Пурифайер",
        waterPrice: "Цена за литр воды",
        totalCost: "Общая сумма затрат/мес",
      },
      savings: "Ежемесячная выгода от пурифайера составляет",
      benefits: {
        title: "Преимущества пурифайера",
        items: [
          "Экономия до 61.5% на расходах",
          "Неограниченное количество воды",
          "Отсутствие логистических проблем",
          "Экологичность - нет пластиковых бутылей",
          "Всегда свежая вода",
          "Контроль качества в реальном времени",
        ],
      },
    },
    kz: {
      title: "Шығындарды салыстыру: Диспенсер vs Пурифайер",
      subtitle: "Неліктен бұл тиімді?",
      description: "Кестеде 30 адамнан тұратын ұжымның орташа су тұтыну есептері алынған",
      calculator: {
        title: "Су тұтынуды есептеу калькуляторы",
        formula: "Есептеу формуласы: дене салмағының кг-на 30мл",
        weight: "Қызметкердің орташа салмағы (кг)",
        teamSize: "Кеңседегі адам саны",
        dailyPerPerson: "Бір адамға күніне тұтыну",
        monthlyTotal: "Айына жалпы тұтыну",
        bottlesNeeded: "Қажетті бөтелкелер (19л)",
      },
      dispenser: {
        name: "Диспенсер",
        bottlePrice: "1 бөтелкенің құны (19л)",
        bottlesPerMonth: "Айына бөтелке саны",
        waterPrice: "Литр суының бағасы",
        totalCost: "Жалпы шығын сомасы/ай",
      },
      purifier: {
        name: "Пурифайер",
        waterPrice: "Литр суының бағасы",
        totalCost: "Жалпы шығын сомасы/ай",
      },
      savings: "Пурифайерден айлық пайда құрайды",
      benefits: {
        title: "Пурифайердің артықшылықтары",
        items: [
          "Шығындарды 61.5% дейін үнемдеу",
          "Шексіз су мөлшері",
          "Логистикалық мәселелердің жоқтығы",
          "Экологиялық - пластик бөтелкелер жоқ",
          "Әрқашан таза су",
          "Сапаны нақты уақытта бақылау",
        ],
      },
    },
  }[language as "ru" | "kz"] || ({} as any);

  return (
    <section className="py-20 bg-gradient-to-b from-water-light/20 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-water bg-clip-text text-transparent">
            {content.title}
          </span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {content.subtitle}
        </p>

        {/* Калькулятор */}
        <Card className="mb-12 p-8 bg-white/50 backdrop-blur-sm border-water-light">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">{content.calculator.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">{content.calculator.formula}</p>

          <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2">
                {content.calculator.teamSize}
              </label>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={language === "kz" ? "сан енгізіңіз" : "введите число"}
                value={teamSize}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D+/g, "");
                  setTeamSize(onlyDigits);
                }}
                className="w-full text-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 p-4 bg-water-light/20 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {content.calculator.dailyPerPerson}
              </p>
              {/* это не зависит от ввода, можно показать всегда */}
              <p className="text-2xl font-bold text-primary">
                {dailyWaterPerPerson} л
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {content.calculator.monthlyTotal}
              </p>
              <p className="text-2xl font-bold text-primary">
                {formatOrDash(Number(totalMonthlyWater.toFixed(0)))} л
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {content.calculator.bottlesNeeded}
              </p>
              <p className="text-2xl font-bold text-primary">
                {formatOrDash(bottlesNeeded)}
              </p>
            </div>
          </div>
        </Card>

        {/* Таблица сравнения */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 border-2 border-red-200 bg-red-50/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{content.dispenser.name}</h3>
              <X className="h-8 w-8 text-red-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-red-200">
                <span className="text-muted-foreground">{content.dispenser.bottlePrice}</span>
                <span className="font-semibold">{bottlePrice.toLocaleString()} ₸</span>
              </div>
              <div className="flex justify-between py-3 border-b border-red-200">
                <span className="text-muted-foreground">{content.dispenser.bottlesPerMonth}</span>
                <span className="font-semibold">{formatOrDash(bottlesNeeded)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-red-200">
                <span className="text-muted-foreground">{content.dispenser.waterPrice}</span>
                <span className="font-semibold">
                  {teamSizeNum && totalMonthlyWater > 0
                    ? `${(dispenserCost / totalMonthlyWater).toFixed(0)} ₸/л`
                    : "—"}
                </span>
              </div>
              <div className="flex justify-between py-3 bg-red-100 -mx-6 px-6 rounded-lg">
                <span className="font-semibold">{content.dispenser.totalCost}</span>
                <span className="text-2xl font-bold text-red-600">
                  {formatOrDash(dispenserCost)} ₸
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-green-200 bg-green-50/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{content.purifier.name}</h3>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-green-200">
                <span className="text-muted-foreground">{content.dispenser.bottlePrice}</span>
                <span className="font-semibold">—</span>
              </div>
              <div className="flex justify-between py-3 border-b border-green-200">
                <span className="text-muted-foreground">{content.dispenser.bottlesPerMonth}</span>
                <span className="font-semibold">—</span>
              </div>
              <div className="flex justify-between py-3 border-b border-green-200">
                <span className="text-muted-foreground">{content.purifier.waterPrice}</span>
                <span className="font-semibold">{purifierCost} ₸/л</span>
              </div>
              <div className="flex justify-between py-3 bg-green-100 -mx-6 px-6 rounded-lg">
                <span className="font-semibold">{content.purifier.totalCost}</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatOrDash(purifierTotalCost)} ₸
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Выгода */}
        <Card className="p-8 bg-gradient-water text-white shadow-water mb-12">
          <div className="text-center">
            <TrendingDown className="h-16 w-16 mx-auto mb-4" />
            <p className="text-2xl mb-2">{content.savings}</p>
            <p className="text-5xl font-bold mb-4">
              {teamSizeNum ? `${savingsPercent}%` : "—"}
            </p>
            <p className="text-3xl font-semibold">
              {teamSizeNum
                ? `${monthlySavings.toLocaleString()} ₸/${language === "kz" ? "ай" : "мес"}`
                : ""}
            </p>
          </div>
        </Card>

        {/* Преимущества */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            {content.benefits.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {content.benefits.items.map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
