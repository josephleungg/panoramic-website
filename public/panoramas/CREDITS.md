# Panorama Credits

All panoramas below are **[PLACEHOLDER] test content** used to build and demo the 360° viewer.
They are not photos of the real J&K Salon and must be replaced with real interior photos before launch.

All sources are CC0 (public domain) from [Poly Haven](https://polyhaven.com), originally published
as equirectangular HDRIs. Each was downloaded at 2K resolution, tone-mapped (Reinhard operator) to
an 8-bit JPEG, and resized/compressed for web delivery. No attribution is legally required for CC0
content, but original authors are credited here as a courtesy.

| File | Scene | Source | Author | License |
|---|---|---|---|---|
| `reception.jpg` / `reception-preview.jpg` | Reception | [Entrance Hall](https://polyhaven.com/a/entrance_hall) — Poly Haven | Sergej Majboroda | CC0 |
| `styling-floor.jpg` / `styling-floor-preview.jpg` | Styling Floor | [Lythwood Room](https://polyhaven.com/a/lythwood_room) — Poly Haven | Greg Zaal | CC0 |
| `wash-area.jpg` / `wash-area-preview.jpg` | Wash Area | [Modern Bathroom](https://polyhaven.com/a/modern_bathroom) — Poly Haven | Adrian Kubasa | CC0 |

## Processing

Original files were downloaded as 2K `.hdr` (Radiance) files from Poly Haven's CDN, tone-mapped with
OpenCV's Reinhard tonemap operator (`gamma=1.2`), resized to 4096×2048 (full) and 1024×512 (blurred
loading preview), and saved as progressive/standard JPEGs. Source `.hdr` files are not kept in the repo.

## Replacing with real photos

See the README "Replacing panoramas" section for the exact file specs (equirectangular 2:1,
6000×3000, under 3MB) and how to update `src/config/scenes.ts`.
