// src/lib/img.ts
export function img(name: string): string {
  // Supports subfolders like "angul-jagannath-temple/1"
  return `/images/${name}.jpg`;
}