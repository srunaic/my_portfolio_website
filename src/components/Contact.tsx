import React from 'react';
import { Mail, Phone, MapPin, Github, Send, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-bg-card/30 border-t border-bg-accent/40 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-4">
                    <Send size={13} />
                    <span>GET IN TOUCH</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-text-primary tracking-tight">
                    인터뷰 문의
                </h2>

                <p className="text-text-muted mb-12 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                    전화 부재중 일시 메일 남겨주시기 바랍니다.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="flex flex-col items-center p-6 bg-bg-base/90 rounded-2xl border border-bg-accent/70 shadow-sm hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.06)] transition-all group backdrop-blur-md">
                        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-serif text-base font-bold text-text-primary mb-1">이메일 (Email)</h3>
                        <a href="mailto:victoryka123@naver.com" className="text-text-muted hover:text-cyan-400 transition-colors text-sm font-mono font-medium">
                            victoryka123@naver.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-bg-base/90 rounded-2xl border border-bg-accent/70 shadow-sm hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.06)] transition-all group backdrop-blur-md">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-serif text-base font-bold text-text-primary mb-1">연락처 (Phone)</h3>
                        <p className="text-text-muted text-sm font-mono font-medium">010-5177-1243</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-bg-base/90 rounded-2xl border border-bg-accent/70 shadow-sm hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.06)] transition-all group backdrop-blur-md">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 mb-4 group-hover:scale-110 transition-transform border border-purple-500/20">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-serif text-base font-bold text-text-primary mb-1">근무지 (Location)</h3>
                        <p className="text-text-muted text-sm font-medium">대구광역시 (Daegu, Korea)</p>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mb-16">
                    <a
                        href="https://github.com/srunaic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-bg-card hover:bg-bg-card/80 text-text-primary rounded-xl border border-bg-accent/80 hover:border-cyan-500/40 transition-all flex items-center gap-2.5 font-mono text-sm shadow-sm"
                        aria-label="Visit Seonghyo's GitHub profile"
                    >
                        <Github size={18} />
                        <span>GitHub @srunaic</span>
                        <ArrowUpRight size={14} className="text-cyan-400" />
                    </a>
                </div>

                {/* Corporate Footer */}
                <footer className="pt-8 border-t border-bg-accent/40 flex flex-col sm:flex-row items-center justify-between text-text-muted text-xs font-mono gap-4">
                    <div className="flex items-center gap-2.5">
                        <BrandLogo size={20} />
                        <span>SEONGHYO CHOI — R&D TECH STUDIO</span>
                    </div>
                    <div>
                        © 2026 All Rights Reserved. Built with React & TypeScript.
                    </div>
                </footer>
            </div>
        </section>
    );
};