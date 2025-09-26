import { useLanguage } from "@/contexts/LanguageContext";
import videoFile from "@/assets/1.mp4";

const VideoPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-gradient-to-b from-white via-water-light/5 to-white">
      {/* Hero секция с видео */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-water bg-clip-text text-transparent">
                {t("video.title")}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              {t("video.subtitle")}
            </p>
          </div>

          {/* Видео */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-water animate-scale-in">
              <video
                className="w-full h-auto rounded-2xl"
                src={videoFile}
                controls
                autoPlay
                muted
                loop
              />
            </div>

            {/* Инфо-карточки */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { value: "15+", label: t("video.stats.years") },
                { value: "500+", label: t("video.stats.schools") },
                { value: "100K+", label: t("video.stats.students") },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-card hover:shadow-water transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-water bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
