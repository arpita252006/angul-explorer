import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Search", path: "/search" },
  { label: "Explore", path: "/explore" },
  { label: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 h-16 nav-blur border-b border-border">
      <div className="container flex h-full items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Angul Explorer
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{user.name}</span>
              <button
                onClick={logout}
                className="h-9 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:-translate-y-px transition-transform"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium inline-flex items-center hover:-translate-y-px transition-transform"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-b border-border px-6 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-1 ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <>
              <span className="block text-sm text-muted-foreground">{user.name}</span>
              <button onClick={() => { logout(); setOpen(false); }} className="text-sm text-destructive">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)} className="block text-sm font-medium text-primary">
              Log In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
