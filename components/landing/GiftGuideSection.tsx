"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Heart, ScanQrCode } from "lucide-react";
import { FloralScroll } from "@/components/ui/OrnateFrame";
import { CandleGlowSpots } from "@/components/ui/CandlelightParticles";

const giftChannels = [
    {
        name: "GCash",
        logo: "/qr_logo/GCASHLOGO.png",
        qr: "/qr_logo/GCASHQR.png",
    },
    {
        name: "GoTyme Bank",
        logo: "/qr_logo/GOTYMELOGO.png",
        qr: "/qr_logo/GOTYMEQR.png",
    },
    {
        name: "BPI",
        logo: "/qr_logo/BPILOGO.png",
        qr: "/qr_logo/BPIQR.png",
    },
];

export function GiftGuideSection() {
    return (
        <section id="gifts" className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-wedding-maroon via-wedding-burgundy-dark to-wedding-burgundy" />
            <div className="absolute inset-0 velvet-texture opacity-20" />
            <CandleGlowSpots count={10} />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.1) 0%, transparent 42%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.div
                    className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="mb-4 text-xs uppercase tracking-[0.4em] text-wedding-champagne"
                        style={{ fontFamily: "var(--font-ornate)" }}
                    >
                        Wedding Gifts
                    </p>
                    <h2
                        className="mb-6 text-4xl text-wedding-gold md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Gift Guide
                    </h2>
                    <FloralScroll className="mx-auto mb-8 h-6 w-32 md:w-48" />
                    <p
                        className="mx-auto max-w-xl text-sm leading-relaxed text-wedding-pearl/80 md:text-base"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        With all that we have, we are already truly blessed by your
                        presence and prayers. If you would still like to give a gift,
                        a monetary blessing would be warmly appreciated.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {giftChannels.map((channel, index) => (
                        <motion.article
                            key={channel.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-wedding-gold/15 bg-wedding-pearl/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-black/10 opacity-80" />
                            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent" />

                            <div className="relative z-10 flex h-full flex-col items-center text-center">
                                <div className="mb-5 flex h-16 items-center justify-center">
                                    <Image
                                        src={channel.logo}
                                        alt={`${channel.name} logo`}
                                        width={180}
                                        height={56}
                                        className="max-h-14 w-auto object-contain"
                                    />
                                </div>

                                <div className="relative mb-4 h-[15.5rem] w-[15.5rem] max-w-full overflow-hidden rounded-[1.25rem] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                                    <Image
                                        src={channel.qr}
                                        alt={`${channel.name} QR code`}
                                        fill
                                        sizes="248px"
                                        className="object-contain p-4"
                                    />
                                </div>

                                <p
                                    className="mb-2 text-lg text-wedding-champagne"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {channel.name}
                                </p>
                                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-wedding-gold/70">
                                    <ScanQrCode size={14} />
                                    <span>Scan to send</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 text-center md:mt-16"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-wedding-gold/25 bg-wedding-pearl/8 px-5 py-3 text-xs uppercase tracking-[0.18em] text-wedding-champagne shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm md:px-8">
                        <Gift size={14} className="text-wedding-gold" />
                        <span>With love and gratitude</span>
                        <Heart size={14} className="text-wedding-gold" fill="currentColor" />
                        <span>Carl Joseph &amp; Shania Mae</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent" />
        </section>
    );
}
