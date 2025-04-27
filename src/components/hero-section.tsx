import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroText from "./hero-text";

export default function HeroSection() {
  return (
    <>
      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <Link
                  href="/chat"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    Novo
                  </span>
                  <span className="text-sm">
                    Teste já o nosso chat com o FURIA AI
                  </span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <HeroText />

                <div>
                  <form
                    action=""
                    className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                  >
                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                      <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                      <input
                        placeholder="Seu email para novos Updates"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          aria-label="submit"
                          className="rounded-(--radius)"
                        >
                          <SendHorizonal
                            className="relative mx-auto size-5"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>

                  <ul className="list-inside list-disc space-y-2">
                    <li>Rápido</li>
                    <li>Moderno</li>
                    <li>Inovador</li>
                    <li>Interativo</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div className="relative">
                <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
                <Image
                  src="/furia-background.png"
                  alt="app illustration"
                  width={2796}
                  height={2008}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
