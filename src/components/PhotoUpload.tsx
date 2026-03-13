import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Trash2, Upload } from "lucide-react";

export default function PhotoUpload({ destinationId }: { destinationId: string }) {
  const { user } = useAuth();
  const storageKey = `angul_photos_${destinationId}`;
  const [photos, setPhotos] = useState<{ email: string; name: string; url: string; id: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setPhotos(JSON.parse(stored));
  }, [storageKey]);

  const save = (updated: typeof photos) => {
    setPhotos(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const userPhotoCount = user ? photos.filter((p) => p.email === user.email).length : 0;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    if (userPhotoCount >= 3) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = { email: user.email, name: user.name, url: reader.result as string, id: Date.now().toString() };
      save([...photos, newPhoto]);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const deletePhoto = (id: string) => {
    save(photos.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">User Photos</h3>
        {user && !user.isAdmin && userPhotoCount < 3 && (
          <label className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium cursor-pointer hover:-translate-y-px transition-transform">
            <Upload size={14} />
            Upload Photo
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          </label>
        )}
      </div>
      {user && !user.isAdmin && (
        <p className="text-xs text-muted-foreground">{userPhotoCount}/3 photos uploaded</p>
      )}
      {!user && <p className="text-sm text-muted-foreground">Log in to upload photos.</p>}

      {photos.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((p) => (
            <div key={p.id} className="relative group rounded-xl overflow-hidden">
              <img src={p.url} alt={`Photo by ${p.name}`} className="aspect-square w-full object-cover img-edge" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <span className="text-xs text-white">{p.name}</span>
              </div>
              {user?.isAdmin && (
                <button
                  onClick={() => deletePhoto(p.id)}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No user photos yet.</p>
      )}
    </div>
  );
}
