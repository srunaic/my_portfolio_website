import React from 'react';

export const BrandLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="brandCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF"/>
                    <stop offset="50%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#8B5CF6"/>
                </linearGradient>
                <filter id="brandGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="100" height="100" rx="22" fill="#0A0F1D" />
            <rect width="100" height="100" rx="22" stroke="url(#brandCoreGrad)" strokeWidth="1.5" strokeOpacity="0.5" />

            <g filter="url(#brandGlow)" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="50,22 76,37 50,52 24,37" fill="#00F0FF" fillOpacity="0.25" stroke="url(#brandCoreGrad)" strokeWidth="2.2"/>
                <polygon points="24,37 50,52 50,79 24,64" fill="#3B82F6" fillOpacity="0.3" stroke="url(#brandCoreGrad)" strokeWidth="2.2"/>
                <polygon points="50,52 76,37 76,64 50,79" fill="#8B5CF6" fillOpacity="0.35" stroke="url(#brandCoreGrad)" strokeWidth="2.2"/>
                
                <circle cx="50" cy="52" r="5" fill="#00F0FF" />
                
                <line x1="50" y1="22" x2="50" y2="13" stroke="#00F0FF" strokeWidth="2"/>
                <circle cx="50" cy="13" r="2.5" fill="#00F0FF"/>

                <line x1="76" y1="37" x2="86" y2="43" stroke="#8B5CF6" strokeWidth="2"/>
                <circle cx="86" cy="43" r="2.5" fill="#8B5CF6"/>

                <line x1="24" y1="37" x2="14" y2="43" stroke="#3B82F6" strokeWidth="2"/>
                <circle cx="14" cy="43" r="2.5" fill="#3B82F6"/>

                <line x1="50" y1="79" x2="50" y2="87" stroke="#8B5CF6" strokeWidth="2"/>
                <circle cx="50" cy="87" r="2.5" fill="#8B5CF6"/>
            </g>
        </svg>
    );
};