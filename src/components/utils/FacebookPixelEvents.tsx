"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FacebookPixelEvents({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams, pixelId]);

  return null;
}
