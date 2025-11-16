export const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a href="https://ritual.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Website
            </a>
            <a href="https://twitter.com/ritualnet" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="https://discord.ritual.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Discord
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Created by Aman. This is an unofficial educational website.
          </p>
        </div>
      </div>
    </footer>
  );
};
