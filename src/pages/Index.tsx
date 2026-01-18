import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const sections = [
  {
    id: 1,
    title: "Познай себя",
    description: "Книги и материалы для инженера-технаря о развитии личности, навыков и самопознании",
    icon: "User",
    color: "bg-primary/5 hover:bg-primary/10",
    borderColor: "border-primary/20",
    topics: ["Личностный рост", "Навыки инженера", "Саморазвитие", "Профессиональная этика"]
  },
  {
    id: 2,
    title: "Познай других",
    description: "Знания о мире людей: социология, политология, менеджмент, психология, культурология",
    icon: "Users",
    color: "bg-accent/5 hover:bg-accent/10",
    borderColor: "border-accent/30",
    topics: ["Социология", "Политология", "Менеджмент", "Психология", "Культурология"]
  },
  {
    id: 3,
    title: "Познай мир вокруг",
    description: "Естественнонаучные и технические дисциплины: математика, физика, радиотехника, автоматика",
    icon: "Atom",
    color: "bg-secondary/5 hover:bg-secondary/10",
    borderColor: "border-secondary/30",
    topics: ["Математика", "Физика", "Теор. механика", "ТЭЦ", "Радиотехника", "Автоматика"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Icon name="GraduationCap" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Техническая библиотека</h1>
              <p className="text-xs text-muted-foreground">Образовательный портал</p>
            </div>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            <Icon name="BookOpen" size={18} className="mr-2" />
            Каталог
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Образовательная платформа для инженеров
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Учебные материалы по техническим дисциплинам электронной направленности 
            с интерактивными презентациями и поддержкой ИИ-агентов
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Info" size={20} className="mr-2" />
              О платформе
            </Button>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-3">Разделы библиотеки</h3>
            <p className="text-muted-foreground">Выберите направление для изучения</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card 
                key={section.id} 
                className={`${section.color} ${section.borderColor} border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-card flex items-center justify-center mb-4 border border-border">
                    <Icon name={section.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{section.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {section.topics.map((topic, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 rounded-full bg-card border border-border text-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Перейти к материалам
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-3">Интерактивное обучение</h3>
            <p className="text-muted-foreground">Современный подход к образованию</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={28} className="text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Динамичные картинки</h4>
              <p className="text-sm text-muted-foreground">Яркие визуализации сложных концепций</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="MousePointerClick" size={28} className="text-accent" />
              </div>
              <h4 className="font-bold text-lg mb-2">Интерактивность</h4>
              <p className="text-sm text-muted-foreground">Активное взаимодействие с материалом</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Icon name="Bot" size={28} className="text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">ИИ-агенты</h4>
              <p className="text-sm text-muted-foreground">Интеллектуальные подсказки и проверка</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Target" size={28} className="text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Практические задачи</h4>
              <p className="text-sm text-muted-foreground">Закрепление знаний на практике</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Техническая библиотека. Образовательная платформа для инженеров.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
