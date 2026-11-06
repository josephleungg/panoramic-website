type IconData = {
  body: string;
  width?: number;
  height?: number;
};

/**
 * Renders Solar icon data (from @iconify-icons/solar) as a plain inline SVG.
 * Deliberately not @iconify/react's <Icon>: that component renders nothing
 * until client hydration, which fails our no-JS and flash-of-missing-icon
 * requirements. This is synchronous SSR-safe markup instead.
 */
export function Icon({
  icon,
  width = 24,
  height = 24,
  className,
  "aria-hidden": ariaHidden = true,
}: {
  icon: IconData;
  width?: number;
  height?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  const viewBoxWidth = icon.width ?? 24;
  const viewBoxHeight = icon.height ?? 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      aria-hidden={ariaHidden}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
