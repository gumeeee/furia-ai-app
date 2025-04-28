"use client";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewHome() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Acesse já a loja oficial da{" "}
        <LinkPreview url="https://www.furia.gg/" className="font-bold">
          FURIA
        </LinkPreview>{" "}
        e fique por dentro de todas as novidades!
      </div>
    </div>
  );
}
