export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container text-center">
        <h4 className="text-lg font-semibold text-foreground">Angul Explorer</h4>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Discover the hidden beauty of Angul District. Explore destinations, read stories, and plan your next adventure.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Angul Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
