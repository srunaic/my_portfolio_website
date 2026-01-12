import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="py-20 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
                <p className="text-zinc-400 mb-12">
                    Ready to contribute to Eight Studio's next big hit? <br />
                    I am available for interviews and code tests.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                        <Mail className="text-white mb-4" size={32} />
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <a href="mailto:victoryka123@naver.com" className="text-zinc-400 hover:text-white transition-colors">
                            victoryka123@naver.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                        <Phone className="text-white mb-4" size={32} />
                        <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                        <p className="text-zinc-400">010-5177-1243</p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                        <MapPin className="text-white mb-4" size={32} />
                        <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                        <p className="text-zinc-400">Daegu, South Korea</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/srunaic" target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
                        <Github size={24} />
                    </a>
                </div>

                <footer className="mt-20 text-zinc-600 text-sm">
                    © 2026 Choi Seong-hyo. Built with React & Tailwind CSS.
                </footer>
            </div>
        </section>
    );
};
