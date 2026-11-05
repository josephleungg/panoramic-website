export type PanoramaLink = {
  toSceneId: string;
  yaw: number;
  pitch: number;
  label: string;
};

export type PanoramaScene = {
  id: string;
  name: string;
  panoramaSrc: string;
  previewSrc: string;
  initialYaw: number;
  initialPitch: number;
  links: PanoramaLink[];
};

/**
 * [PLACEHOLDER] CC0 test panoramas — see /public/panoramas/CREDITS.md.
 * Replace panoramaSrc/previewSrc with real photos and this list keeps working;
 * see README "Replacing panoramas" for file specs.
 */
export const scenes: PanoramaScene[] = [
  {
    id: "reception",
    name: "Reception",
    panoramaSrc: "/panoramas/reception.jpg",
    previewSrc: "/panoramas/reception-preview.jpg",
    initialYaw: 0,
    initialPitch: 0,
    links: [{ toSceneId: "styling-floor", yaw: 1.2, pitch: 0, label: "Styling Floor" }],
  },
  {
    id: "styling-floor",
    name: "Styling Floor",
    panoramaSrc: "/panoramas/styling-floor.jpg",
    previewSrc: "/panoramas/styling-floor-preview.jpg",
    initialYaw: 0,
    initialPitch: 0,
    links: [
      { toSceneId: "reception", yaw: -2.0, pitch: 0, label: "Reception" },
      { toSceneId: "wash-area", yaw: 1.8, pitch: 0, label: "Wash Area" },
    ],
  },
  {
    id: "wash-area",
    name: "Wash Area",
    panoramaSrc: "/panoramas/wash-area.jpg",
    previewSrc: "/panoramas/wash-area-preview.jpg",
    initialYaw: 0,
    initialPitch: 0,
    links: [{ toSceneId: "styling-floor", yaw: -1.5, pitch: 0, label: "Styling Floor" }],
  },
];
