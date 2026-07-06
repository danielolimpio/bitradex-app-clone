import { Apple, Play, Smartphone } from "lucide-react";
import QRCode from "react-qr-code";
import { useTranslation } from "react-i18next";

const DOWNLOAD_URL = "https://www.bitradex.com/en/account/register?inviteCode=7UII2W";

const AndroidIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.22a11.43 11.43 0 0 0-9.78 0L5.25 5.9a.4.4 0 1 0-.69.4L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
  </svg>
);

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.365 1.43c0 1.14-.47 2.23-1.23 3.02-.82.86-2.15 1.52-3.24 1.43-.14-1.12.42-2.28 1.16-3.02.83-.85 2.25-1.48 3.31-1.43zM20.5 17.06c-.55 1.27-.82 1.83-1.53 2.94-.99 1.55-2.4 3.48-4.13 3.49-1.54.02-1.94-1-4.03-.99-2.1 0-2.53 1.01-4.08.99-1.73-.02-3.06-1.75-4.05-3.3C.02 15.75-.29 10.66 2.4 8.03c1-.98 2.51-1.6 4.01-1.6 1.6 0 2.6.87 3.94.87 1.3 0 2.09-.87 3.94-.87 1.4 0 2.87.76 3.94 2.07-3.46 1.9-2.9 6.85.27 8.56z" />
  </svg>
);

const platforms = [
  { key: "appStore", label: "App Store", Icon: AppleIcon },
  { key: "googlePlay", label: "Google Play", Icon: Play },
  { key: "androidApk", label: "Android APK", Icon: AndroidIcon },
  { key: "iosEnterprise", label: "iOS (Enterprise)", Icon: Smartphone },
];

const AppDownloadSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="space-y-6 mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("appDownload.badge")}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t("appDownload.description")}
          </p>
        </div>

        {/* QR Card */}
        <div className="rounded-2xl border border-white/10 bg-[#141518] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="bg-white p-3 rounded-lg flex-shrink-0">
              <QRCode value={DOWNLOAD_URL} size={140} level="M" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground mb-1">
                {t("appDownload.title")}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {t("appDownload.platforms")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("appDownload.platformsDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Platform icons */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          {platforms.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => window.open(DOWNLOAD_URL, "_blank")}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
