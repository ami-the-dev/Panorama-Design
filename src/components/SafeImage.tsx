import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Renders an <img>, but if the file is missing (e.g. you haven't dropped
 * your real photo into /public/images/ yet), shows a quiet placeholder
 * instead of the browser's broken-image icon.
 */
export default function SafeImage({ src, alt, className, loading = "lazy" }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center gap-2 bg-dusk text-steel ${className ?? ""}`}>
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="font-mono text-[10px] uppercase tracking-wider text-center px-2">
          Add photo:<br />{src.replace("/images/", "")}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
