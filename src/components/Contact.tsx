import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-bg-card/25 border-t border-bg-accent/40 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-text-primary tracking-tight">연락처 및 문의</h2>
                <p className="text-text-muted mb-12 text-sm md:text-base leading-relaxed">
                    프로젝트 기획 단계부터 실제 퍼블리싱까지 주도할 준비를 마친 인재를 찾고 계신가요?<br />
                    언제든지 인터뷰나 과제 테스트(코딩 테스트) 요청을 주시기 바랍니다.
                </p>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    <div className="flex flex-col items-center p-6 bg-bg-base rounded-2xl border border-bg-accent/50 shadow-sm hover:shadow-md hover:border-brand-accent/25 transition-all group">
                        <Mail className="text-brand-accent mb-4 group-hover:scale-105 transition-transform" size={28} />
                        <h3 className="font-serif text-base font-bold text-text-primary mb-2">이메일 (Email)</h3>
                        <a href="mailto:victoryka123@naver.com" className="text-text-muted hover:text-brand-accent transition-colors text-sm font-medium">
                            victoryka123@naver.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-bg-base rounded-2xl border border-bg-accent/50 shadow-sm hover:shadow-md hover:border-brand-accent/25 transition-all group">
                        <Phone className="text-brand-accent mb-4 group-hover:scale-105 transition-transform" size={28} />
                        <h3 className="font-serif text-base font-bold text-text-primary mb-2">연락처 (Phone)</h3>
                        <p className="text-text-muted text-sm font-medium">010-5177-1243</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-bg-base rounded-2xl border border-bg-accent/50 shadow-sm hover:shadow-md hover:border-brand-accent/25 transition-all group">
                        <MapPin className="text-brand-accent mb-4 group-hover:scale-105 transition-transform" size={28} />
                        <h3 className="font-serif text-base font-bold text-text-primary mb-2">근무 희망지 (Location)</h3>
                        <p className="text-text-muted text-sm font-medium">대구광역시 (Daegu, South Korea)</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/srunaic" target="_blank" rel="noopener noreferrer"
                        className="p-3.5 bg-brand-accent text-white rounded-xl hover:bg-brand-accent-hover transition-colors shadow-sm flex items-center justify-center" aria-label="Visit Seonghyo's GitHub profile">
                        <Github size={22} />
                    </a>
                </div>

                <footer className="mt-20 text-text-muted text-xs font-sans tracking-wide">
                    © 2026 최성효. Built with React, TypeScript & Tailwind CSS. Designed in a Claude Warm Beige theme.
                </footer>
            </div>
        </section>
    );
};
