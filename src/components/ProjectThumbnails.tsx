import React from 'react';

interface ThumbnailProps {
    projectId: string;
    className?: string;
}

export const ProjectThumbnail: React.FC<ThumbnailProps> = ({ projectId, className = "" }) => {
    switch (projectId) {
        case 'virtual-server':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    {/* Server Grid & Nodes Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-cyan-500/10" />
                    
                    {/* 3D Server Rack Illustration */}
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="serverRackGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                            </linearGradient>
                            <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#00f0ff"/>
                                <stop offset="100%" stopColor="#3b82f6"/>
                            </linearGradient>
                        </defs>
                        
                        {/* Central Server Chassis */}
                        <rect x="110" y="25" width="100" height="110" rx="8" fill="#0f172a" stroke="url(#serverRackGrad)" strokeWidth="1.5" />
                        
                        {/* Server Blades */}
                        <rect x="118" y="36" width="84" height="14" rx="3" fill="#1e293b" stroke="#0ea5e9" strokeWidth="0.8" />
                        <circle cx="126" cy="43" r="2.5" fill="#00f0ff" className="animate-pulse" />
                        <circle cx="134" cy="43" r="2" fill="#22c55e" />
                        <line x1="145" y1="43" x2="192" y2="43" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
                        
                        <rect x="118" y="56" width="84" height="14" rx="3" fill="#1e293b" stroke="#0ea5e9" strokeWidth="0.8" />
                        <circle cx="126" cy="63" r="2.5" fill="#00f0ff" />
                        <circle cx="134" cy="63" r="2" fill="#22c55e" className="animate-pulse" />
                        <line x1="145" y1="63" x2="192" y2="63" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

                        <rect x="118" y="76" width="84" height="14" rx="3" fill="#1e293b" stroke="#6366f1" strokeWidth="0.8" />
                        <circle cx="126" cy="83" r="2.5" fill="#a855f7" />
                        <circle cx="134" cy="83" r="2" fill="#00f0ff" />
                        <line x1="145" y1="83" x2="192" y2="83" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

                        <rect x="118" y="96" width="84" height="14" rx="3" fill="#1e293b" stroke="#6366f1" strokeWidth="0.8" />
                        <circle cx="126" cy="103" r="2.5" fill="#22c55e" />
                        <circle cx="134" cy="103" r="2" fill="#00f0ff" className="animate-pulse" />
                        <line x1="145" y1="103" x2="192" y2="103" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

                        <rect x="118" y="116" width="84" height="12" rx="3" fill="#090d16" stroke="#334155" strokeWidth="0.5" />
                        <text x="140" y="125" fill="#64748b" fontSize="7" fontFamily="monospace">DJANGO-REST</text>

                        {/* Connected Client Nodes */}
                        <path d="M110 50 L60 50 L60 70" stroke="url(#neonCyan)" strokeWidth="1.2" strokeDasharray="4 2" />
                        <circle cx="60" cy="75" r="14" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.2" />
                        <text x="60" y="78" fill="#00f0ff" fontSize="8" textAnchor="middle" fontFamily="monospace">AUTH</text>

                        <path d="M110 90 L60 90 L60 110" stroke="url(#neonCyan)" strokeWidth="1.2" strokeDasharray="4 2" />
                        <circle cx="60" cy="115" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
                        <text x="60" y="118" fill="#38bdf8" fontSize="7.5" textAnchor="middle" fontFamily="monospace">SYNC</text>

                        <path d="M210 50 L260 50 L260 70" stroke="url(#neonCyan)" strokeWidth="1.2" strokeDasharray="4 2" />
                        <circle cx="260" cy="75" r="14" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
                        <text x="260" y="78" fill="#a855f7" fontSize="8" textAnchor="middle" fontFamily="monospace">API</text>

                        <path d="M210 90 L260 90 L260 110" stroke="url(#neonCyan)" strokeWidth="1.2" strokeDasharray="4 2" />
                        <circle cx="260" cy="115" r="14" fill="#0f172a" stroke="#22c55e" strokeWidth="1.2" />
                        <text x="260" y="118" fill="#22c55e" fontSize="7.5" textAnchor="middle" fontFamily="monospace">SQL</text>
                    </svg>

                    {/* Category Floating Badge */}
                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 backdrop-blur-md">
                        BACKEND & GAME SERVER
                    </div>
                </div>
            );

        case 'luna-ai':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:18px_18px] opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-purple-600/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Neural Core Sphere */}
                        <circle cx="160" cy="75" r="38" fill="url(#purpleGlow)" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="160" cy="75" r="28" fill="#1e1138" stroke="#00f0ff" strokeWidth="1" />
                        <circle cx="160" cy="75" r="14" fill="#a855f7" fillOpacity="0.4" />
                        <circle cx="160" cy="75" r="6" fill="#00f0ff" />

                        {/* Orbiting Neural Rings */}
                        <ellipse cx="160" cy="75" rx="55" ry="20" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" transform="rotate(-25 160 75)" />
                        <ellipse cx="160" cy="75" rx="55" ry="20" stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 4" transform="rotate(35 160 75)" />

                        {/* Dialogue HUD Wave */}
                        <path d="M40 75 Q 80 45, 120 75 T 160 75" stroke="#a855f7" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <path d="M160 75 Q 200 105, 240 75 T 280 75" stroke="#00f0ff" strokeWidth="1.5" fill="none" opacity="0.6" />

                        {/* System Tags */}
                        <rect x="35" y="30" width="70" height="20" rx="5" fill="#0f172a" stroke="#8b5cf6" strokeWidth="0.8" />
                        <text x="70" y="43" fill="#c084fc" fontSize="8" textAnchor="middle" fontFamily="monospace">LANGCHAIN</text>

                        <rect x="215" y="100" width="70" height="20" rx="5" fill="#0f172a" stroke="#00f0ff" strokeWidth="0.8" />
                        <text x="250" y="113" fill="#38bdf8" fontSize="8" textAnchor="middle" fontFamily="monospace">PYQT AGENT</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-[10px] font-mono text-purple-400 backdrop-blur-md">
                        AI DESKTOP AGENT
                    </div>
                </div>
            );

        case 'ai-dashboard':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-blue-600/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Dashboard Window Frame */}
                        <rect x="40" y="20" width="240" height="115" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
                        <line x1="40" y1="42" x2="280" y2="42" stroke="#1e293b" strokeWidth="1" />
                        <circle cx="55" cy="31" r="3" fill="#ef4444" />
                        <circle cx="67" cy="31" r="3" fill="#eab308" />
                        <circle cx="79" cy="31" r="3" fill="#22c55e" />
                        <text x="160" y="34" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">BIG DATA ANALYTICS HUD</text>

                        {/* Chart Line Wave */}
                        <path d="M55 105 L95 85 L135 95 L175 60 L215 75 L265 48" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                        <path d="M55 105 L95 85 L135 95 L175 60 L215 75 L265 48 L265 118 L55 118 Z" fill="url(#chartFill)" opacity="0.2" />
                        
                        {/* Bar Charts */}
                        <rect x="65" y="80" width="10" height="38" rx="2" fill="#6366f1" opacity="0.6" />
                        <rect x="85" y="65" width="10" height="53" rx="2" fill="#00f0ff" opacity="0.8" />
                        <rect x="105" y="75" width="10" height="43" rx="2" fill="#6366f1" opacity="0.6" />
                        <rect x="125" y="55" width="10" height="63" rx="2" fill="#00f0ff" opacity="0.8" />

                        <defs>
                            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-[10px] font-mono text-blue-400 backdrop-blur-md">
                        WEB & DATA CHARTS
                    </div>
                </div>
            );

        case 'tech-blog':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:14px_14px] opacity-30" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="20" width="220" height="115" rx="8" fill="#090d16" stroke="#2563eb" strokeWidth="1" />
                        
                        {/* Terminal Header */}
                        <rect x="50" y="20" width="220" height="22" rx="8" fill="#0f172a" />
                        <circle cx="65" cy="31" r="3" fill="#ef4444" />
                        <circle cx="75" cy="31" r="3" fill="#eab308" />
                        <circle cx="85" cy="31" r="3" fill="#22c55e" />
                        <text x="160" y="34" fill="#60a5fa" fontSize="8" textAnchor="middle" fontFamily="monospace">tech-journal-ci-cd.md</text>

                        {/* Code Lines */}
                        <text x="65" y="58" fill="#c084fc" fontSize="8" fontFamily="monospace">$ git commit -m "docs: release technical notes"</text>
                        <text x="65" y="74" fill="#34d399" fontSize="8" fontFamily="monospace">✔ GitHub Actions CI/CD 정적 호스팅 배포 완료</text>
                        <text x="65" y="90" fill="#94a3b8" fontSize="8" fontFamily="monospace">→ Optimized Static Routing & Markdown Parse</text>
                        <text x="65" y="106" fill="#38bdf8" fontSize="8" fontFamily="monospace">● Live Status: Active (100% Hosted)</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-[10px] font-mono text-sky-400 backdrop-blur-md">
                        WEB BLOG & CI/CD
                    </div>
                </div>
            );

        case 'sensor-plc':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-emerald-600/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Raspberry Pi & PLC Board */}
                        <rect x="70" y="25" width="180" height="105" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
                        
                        {/* Chip Processor */}
                        <rect x="130" y="50" width="55" height="55" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1" />
                        <text x="157" y="80" fill="#34d399" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">ARM BCM</text>
                        
                        {/* GPIO Pins */}
                        <rect x="80" y="32" width="70" height="10" rx="2" fill="#0f172a" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3 2" />
                        <text x="115" y="40" fill="#fbbf24" fontSize="6.5" textAnchor="middle" fontFamily="monospace">GPIO 40-PIN</text>

                        {/* Sensor Signals */}
                        <path d="M200 60 L240 60 L240 90" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 2" />
                        <circle cx="240" cy="95" r="8" fill="#0f172a" stroke="#34d399" strokeWidth="1" />
                        <text x="240" y="98" fill="#34d399" fontSize="7" textAnchor="middle" fontFamily="monospace">PLC</text>

                        <circle cx="95" cy="90" r="10" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
                        <text x="95" y="93" fill="#10b981" fontSize="6.5" textAnchor="middle" fontFamily="monospace">SENSOR</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 backdrop-blur-md">
                        HARDWARE & IOT PLC
                    </div>
                </div>
            );

        case 'directx-engine':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-orange-500/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* 3D Wireframe Mesh Cube & Shaders */}
                        <g stroke="#f97316" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            {/* Front & Back Cube Wireframe */}
                            <polygon points="160,25 215,55 160,85 105,55" fill="#f97316" fillOpacity="0.1" />
                            <polygon points="105,55 160,85 160,135 105,105" fill="#ea580c" fillOpacity="0.2" />
                            <polygon points="160,85 215,55 215,105 160,135" fill="#c2410c" fillOpacity="0.15" />
                            
                            {/* Inner Vertex Geometry Lines */}
                            <line x1="160" y1="25" x2="160" y2="85" stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1" />
                            <line x1="105" y1="55" x2="215" y2="55" stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1" />
                        </g>

                        {/* Rendering Viewport Coordinates */}
                        <text x="50" y="40" fill="#fb923c" fontSize="8" fontFamily="monospace">DirectX 11/12 Engine</text>
                        <text x="50" y="55" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">HLSL / DrawCall Opt</text>
                        <text x="235" y="115" fill="#fb923c" fontSize="8" fontFamily="monospace">FPS: 60.0</text>
                        <text x="235" y="128" fill="#34d399" fontSize="7.5" fontFamily="monospace">DrawCalls: 12</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-[10px] font-mono text-orange-400 backdrop-blur-md">
                        GAME ENGINE & GRAPHICS
                    </div>
                </div>
            );

        case 'ai-hacker-protection':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-red-600/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Security Shield Grid */}
                        <path d="M160 25 L215 45 L215 95 Q 160 135 160 135 Q 105 95 105 45 Z" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.8" />
                        <path d="M160 38 L198 52 L198 90 Q 160 120 160 120 Q 122 90 122 52 Z" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.2" />

                        {/* Neural Warning Radar */}
                        <circle cx="160" cy="75" r="14" fill="#0f172a" stroke="#ef4444" strokeWidth="1.2" />
                        <circle cx="160" cy="75" r="5" fill="#ef4444" className="animate-ping" />

                        <text x="50" y="60" fill="#f87171" fontSize="8" fontFamily="monospace">INTRUSION DETECTED</text>
                        <text x="50" y="75" fill="#34d399" fontSize="7.5" fontFamily="monospace">AUTO-BLOCK: ACTIVE</text>

                        <text x="225" y="70" fill="#c084fc" fontSize="8" fontFamily="monospace">TENSORFLOW</text>
                        <text x="225" y="85" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">NEURAL DEFENSE</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-red-500/30 text-[10px] font-mono text-red-400 backdrop-blur-md">
                        SECURITY AI & MONITORING
                    </div>
                </div>
            );

        case 'traffic-gis':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-teal-500/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* GIS Vector Map Isometric Grid */}
                        <g stroke="#14b8a6" strokeWidth="1" opacity="0.7">
                            <line x1="40" y1="80" x2="280" y2="80" strokeWidth="2" stroke="#2dd4bf" />
                            <line x1="160" y1="20" x2="160" y2="140" strokeWidth="2" stroke="#2dd4bf" />
                            <circle cx="160" cy="80" r="30" stroke="#00f0ff" strokeDasharray="3 3" />
                            <circle cx="160" cy="80" r="50" stroke="#14b8a6" strokeDasharray="4 4" />
                        </g>

                        {/* Traffic Node Pointers */}
                        <circle cx="110" cy="80" r="4" fill="#22c55e" />
                        <circle cx="210" cy="80" r="4" fill="#00f0ff" />
                        <circle cx="160" cy="45" r="4" fill="#eab308" />
                        <circle cx="160" cy="115" r="4" fill="#ef4444" />

                        <text x="50" y="38" fill="#2dd4bf" fontSize="8" fontFamily="monospace">GIS INFRASTRUCTURE</text>
                        <text x="210" y="130" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">C# .NET Controller</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-[10px] font-mono text-teal-400 backdrop-blur-md">
                        GIS SYSTEM & CONTROL
                    </div>
                </div>
            );

        case 'design-ai-support':
            return (
                <div className={`relative w-full h-44 bg-slate-950 overflow-hidden rounded-t-xl flex items-center justify-center ${className}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-pink-500/15" />
                    
                    <svg viewBox="0 0 320 160" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Generative Workflow Canvas */}
                        <rect x="60" y="25" width="200" height="105" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
                        
                        {/* AI Creation Nodes */}
                        <circle cx="100" cy="75" r="16" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.2" />
                        <text x="100" y="78" fill="#c084fc" fontSize="7" textAnchor="middle" fontFamily="monospace">PROMPT</text>

                        <line x1="116" y1="75" x2="146" y2="75" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 2" />

                        <circle cx="160" cy="75" r="14" fill="#831843" stroke="#f472b6" strokeWidth="1.2" />
                        <text x="160" y="78" fill="#fbcfe8" fontSize="6.5" textAnchor="middle" fontFamily="monospace">LLM DIFF</text>

                        <line x1="174" y1="75" x2="204" y2="75" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 2" />

                        <circle cx="220" cy="75" r="16" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="1.2" />
                        <text x="220" y="78" fill="#67e8f9" fontSize="7" textAnchor="middle" fontFamily="monospace">OUTPUT</text>
                    </svg>

                    <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-pink-500/30 text-[10px] font-mono text-pink-400 backdrop-blur-md">
                        AI AUTOMATION & DESIGN
                    </div>
                </div>
            );

        default:
            return null;
    }
};