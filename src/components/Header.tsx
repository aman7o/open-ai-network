import ritualLogo from "@/assets/ritual-logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <img src={ritualLogo} alt="Ritual Logo" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">RITUAL</span>
        </div>
      </div>
    </header>
  );
};
