"use client";
import LogoThumbnail from "@/components/ui/LogoThumbnail";
import { registerRoute } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  //   useResetState();
  console.log(pathname);

  return (
    <div className="flex h-screen bg-white p-3">
      <div className="hidden h-full flex-1 md:block overflow-hidden">
        {pathname === "/login" ? (
          <div className="h-full bg-[#0E152B] rounded-2xl relative">
            <Image
              className="absolute inset-52 top-32 object-cover transition"
              src="/images/review1.png"
              alt="Image"
              height={320}
              width={320}
            />
            <Image
              className="absolute -inset-40 top-32 object-cover transition"
              src="/images/review2.png"
              alt="Image"
              height={320}
              width={350}
            />
            <Image
              className="absolute -right-40 bottom-32 object-cover transition"
              src="/images/review3.png"
              alt="Image"
              height={350}
              width={350}
            />

            <div className="flex h-full text-white max-w-lg flex-col items-start justify-end pl-12 pb-12">
                <div className="flex items-center gap-2 bg-[#F1F8FF] rounded-full px-4 py-2 w-fit shadow-sm">
                  <span className="flex items-center justify-center bg-[#047AF0] text-white px-2 py-0.5 text-xs rounded-full">
                    Care
                  </span>

                  <p className="font-twk text-sm text-[#545454]">
                    Compassionate Domiciliary Care at Home
                  </p>
                </div>
                <h2 className="text-[26px] max-w-sm tracking-tight leading-[110%] mt-6">
                  Compassionate domiciliary care shaped around dignity and
                  comfort.
                </h2>
                <p className="text-[14px] mt-4">
                  Delivering high-quality, person-centred domiciliary care that
                  supports independent living, dignity, comfort, and wellbeing
                  in your own home.
                </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="h-full bg-[#0E152B] rounded-2xl relative">
              <Image
                className="absolute inset-52 top-32 object-cover transition"
                src="/images/review1.png"
                alt="Image"
                height={320}
                width={320}
              />
              <Image
                className="absolute -inset-40 top-32 object-cover transition"
                src="/images/review2.png"
                alt="Image"
                height={320}
                width={350}
              />
              <Image
                className="absolute -right-40 bottom-32 object-cover transition"
                src="/images/review3.png"
                alt="Image"
                height={350}
                width={350}
              />
              <div className="flex h-full text-white max-w-lg flex-col items-start justify-end pl-12 pb-12">
                <div className="flex items-center gap-2 bg-[#F1F8FF] rounded-full px-4 py-2 w-fit shadow-sm">
                  <span className="flex items-center justify-center bg-[#047AF0] text-white px-2 py-0.5 text-xs rounded-full">
                    Care
                  </span>

                  <p className="font-twk text-sm text-[#545454]">
                    Compassionate Domiciliary Care at Home
                  </p>
                </div>
                <h2 className="text-[26px] max-w-sm tracking-tight leading-[110%] mt-6">
                  Compassionate domiciliary care shaped around dignity and
                  comfort.
                </h2>
                <p className="text-[14px] mt-4">
                  Delivering high-quality, person-centred domiciliary care that
                  supports independent living, dignity, comfort, and wellbeing
                  in your own home.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hide-scroll h-full flex-1 overflow-auto pb-20">
        <section className="container px-4 pt-8 md:pt-8 lg:px-16">
          <div className="flex items-center justify-between">
            <LogoThumbnail type="black" />
            <div>
              <p className="text-[#828282] text-[14px] font-twk leading-[154%]">
                Don&apos;t have an account?{" "}
                <Link href={registerRoute} className="underline text-[#1463E5]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-96 lg:mt-16">{children}</div>
        </section>
      </div>
    </div>
  );
}
