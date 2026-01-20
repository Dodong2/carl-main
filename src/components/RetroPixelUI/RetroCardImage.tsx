// components/RetroCard.tsx
import { useState } from 'react';
import type { ProjectsTypes } from '../../types/shared-types';
import RetroButton from './RetroButton';
import RetroContainer from './RetroContainer';

interface RetroCardImageProps {
    data: ProjectsTypes;

}

const RetroCardImage = ({ data }: RetroCardImageProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [read, isRead] = useState(false)

    const Reading = () => {
        isRead((prev) => !prev)
    }

    return (
        <div>
            <div
                className={`
        relative bg-[#1a1a2e] border-4 border-white rounded-sm overflow-hidden
        cursor-pointer transition-all duration-300 
        shadow-[8px_8px_0px_rgba(0,0,0,0.3)]
        hover:shadow-[12px_12px_0px_rgba(0,0,0,0.4)]
        hover:-translate-y-2
      `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Pixel Grid Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-2 opacity-30"
                    style={{
                        backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)
          `
                    }}
                />

                {/* Badge */}
                <div className="absolute top-1 right-1 bg-[#4ecdc4] text-[#1a1a2e] text-[8px] px-1.5 py-0.5 z-4 font-['Press_Start_2P']">
                    {data.projectTitle}
                </div>

                {/* Card Inner */}
                <div className="relative p-4 z-1 min-h-50">
                    {/* GRID */}
                    <div className="w-full max-w-sm mx-auto">
                        <img
                            src={data.image}
                            alt="images"
                            loading="lazy"
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>

                {/* Overlay */}
                <div className={`
        absolute inset-0 bg-[rgba(26,26,46,0.95)] 
        flex flex-col justify-center items-center p-5
        border-4 border-[#e9ff6b] z-3
        transition-all duration-300
        backdrop-blur-sm
        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    {data.projectStats.map((stat, index) => (
                        <div key={index} className="w-full mb-2">
                            <div className="flex justify-between text-[8px] mb-1">
                                <span className="text-[#92f29c]">{stat.label}</span>
                                <span className="text-white">{stat.value}/100</span>
                            </div>
                            <div className="relative h-2 overflow-hidden bg-white/10">
                                <div
                                    className="h-full bg-[#4ecdc4] absolute top-0 left-0 transition-all duration-500"
                                    style={{ width: isHovered ? `${stat.value}%` : '0%' }}
                                />
                            </div>
                        </div>
                    ))}

                    <RetroButton color='blue' onClick={Reading}>Read</RetroButton>
                </div>
            </div>

            {/* modal description */}
            {read && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => isRead(false)}
                    ></div>

                    {/* Modal */}
                    <div className="relative z-10 w-[90%] max-w-lg sm:max-w-xl">
                        <RetroContainer size="lg" title={data.projectTitle}>
                            <div className="space-y-2 text-[10px] sm:text-[12px] md:text-[14px] text-white leading-relaxed">
                                <p className="text-[#92f29c]">{data.created}</p>
                                <p>{data.descriptions}</p>
                            </div>
                        </RetroContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RetroCardImage;
