import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, ListMusic, Repeat, ChevronDown } from 'lucide-react';

interface Track {
    id: string;
    title: string;
    artist: string;
    src: string;
}

const PLAYLIST: Track[] = [
    {
        id: 'track-1',
        title: 'After the Rain',
        artist: 'Studio Soundtrack',
        src: `${import.meta.env.BASE_URL}music/after-the-rain.mp3`
    },
    {
        id: 'track-2',
        title: 'Fragile Blue',
        artist: 'Studio Soundtrack',
        src: `${import.meta.env.BASE_URL}music/fragile-blue.mp3`
    },
    {
        id: 'track-3',
        title: 'Letter from Decades Ago',
        artist: 'Studio Soundtrack',
        src: `${import.meta.env.BASE_URL}music/letter-from-decades-ago.mp3`
    },
    {
        id: 'track-4',
        title: 'The Girl Who Stole the Stars',
        artist: 'Studio Soundtrack',
        src: `${import.meta.env.BASE_URL}music/the-girl-who-stole-the-stars.mp3`
    },
    {
        id: 'track-5',
        title: 'The Silence Broke',
        artist: 'Studio Soundtrack',
        src: `${import.meta.env.BASE_URL}music/the-silence-broke.mp3`
    }
];

export const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.4);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [isLoopOne, setIsLoopOne] = useState<boolean>(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = PLAYLIST[currentTrackIndex];

    // Initialize Audio element
    useEffect(() => {
        const audio = new Audio(currentTrack.src);
        audio.volume = isMuted ? 0 : volume;
        audio.preload = 'metadata';
        audioRef.current = audio;

        const updateTime = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            if (isLoopOne) {
                audio.currentTime = 0;
                audio.play().catch(() => {});
            } else {
                handleNext();
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
            audio.src = '';
        };
    }, []);

    // Change track source when index changes
    useEffect(() => {
        if (!audioRef.current) return;
        const audio = audioRef.current;
        const wasPlaying = isPlaying;

        audio.src = currentTrack.src;
        audio.load();

        if (wasPlaying) {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                setIsPlaying(false);
            });
        }
    }, [currentTrackIndex]);

    // Handle Volume changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((err) => {
                console.warn('Autoplay prevented or failed:', err);
                setIsPlaying(false);
            });
        }
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    };

    const handleSelectTrack = (index: number) => {
        setCurrentTrackIndex(index);
        if (!isPlaying && audioRef.current) {
            audioRef.current.src = PLAYLIST[index].src;
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {});
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current || !audioRef.current.duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) / rect.width;
        audioRef.current.currentTime = clickPos * audioRef.current.duration;
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
            {/* Playlist Popup */}
            <AnimatePresence>
                {showPlaylist && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-3 w-80 max-w-[calc(100vw-40px)] bg-slate-950/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-cyan-950/50 text-text-primary"
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-bg-accent/60 mb-3">
                            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                                <ListMusic size={15} />
                                <span>BGM PLAYLIST ({PLAYLIST.length})</span>
                            </div>
                            <button
                                onClick={() => setShowPlaylist(false)}
                                className="p-1 rounded-lg hover:bg-bg-accent/50 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                                aria-label="Close Playlist"
                            >
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        <div className="space-y-1 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                            {PLAYLIST.map((track, idx) => {
                                const isCurrent = idx === currentTrackIndex;
                                return (
                                    <button
                                        key={track.id}
                                        onClick={() => handleSelectTrack(idx)}
                                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs transition-all cursor-pointer ${
                                            isCurrent
                                                ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold'
                                                : 'hover:bg-bg-card/60 text-text-muted hover:text-text-primary'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5 truncate">
                                            <span className="font-mono text-[10px] text-text-muted w-4">
                                                0{idx + 1}
                                            </span>
                                            <span className="truncate">{track.title}</span>
                                        </div>
                                        {isCurrent && isPlaying && (
                                            <div className="flex items-end gap-0.5 h-3 ml-2 shrink-0">
                                                <span className="w-0.5 bg-cyan-400 animate-pulse h-full" />
                                                <span className="w-0.5 bg-cyan-400 animate-pulse delay-75 h-2" />
                                                <span className="w-0.5 bg-cyan-400 animate-pulse delay-150 h-3" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Player Widget */}
            <motion.div
                layout
                className="bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden text-text-primary flex flex-col transition-all"
            >
                {/* Progress Bar Top */}
                <div 
                    onClick={handleSeek}
                    className="w-full h-1 bg-slate-800 cursor-pointer relative group"
                    title="재생 바 (클릭하여 이동)"
                >
                    <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="p-3 sm:p-3.5 flex items-center gap-3">
                    {/* Equalizer / Disc Icon & Mini Play/Pause Toggle */}
                    <button
                        onClick={togglePlay}
                        className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                            isPlaying
                                ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                                : 'bg-bg-card border-bg-accent/80 text-text-muted hover:text-text-primary hover:border-cyan-500/30'
                        }`}
                        title={isPlaying ? 'BGM 일시정지 (OFF)' : 'BGM 재생 (ON)'}
                    >
                        {isPlaying ? (
                            <div className="flex items-end gap-0.5 h-4">
                                <motion.span 
                                    animate={{ height: ['40%', '100%', '60%', '100%', '30%'] }} 
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    className="w-0.5 bg-cyan-400 rounded-full" 
                                />
                                <motion.span 
                                    animate={{ height: ['80%', '30%', '100%', '50%', '90%'] }} 
                                    transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                                    className="w-0.5 bg-cyan-400 rounded-full" 
                                />
                                <motion.span 
                                    animate={{ height: ['50%', '90%', '40%', '100%', '60%'] }} 
                                    transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                                    className="w-0.5 bg-cyan-400 rounded-full" 
                                />
                                <motion.span 
                                    animate={{ height: ['100%', '40%', '80%', '30%', '70%'] }} 
                                    transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                                    className="w-0.5 bg-cyan-400 rounded-full" 
                                />
                            </div>
                        ) : (
                            <Play size={16} className="ml-0.5" />
                        )}
                    </button>

                    {/* Track Info (Click to expand/collapse) */}
                    <div 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex flex-col cursor-pointer min-w-[130px] max-w-[180px] sm:max-w-[210px]"
                    >
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span className="font-serif text-xs font-bold text-text-primary truncate">
                                {currentTrack.title}
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-text-muted truncate pl-3">
                            {isPlaying ? 'Playing • BGM ON' : 'Paused • BGM OFF'}
                        </span>
                    </div>

                    {/* Quick Controls */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handlePrev}
                            className="p-1.5 rounded-lg hover:bg-bg-accent/60 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                            title="이전 곡"
                        >
                            <SkipBack size={14} />
                        </button>

                        <button
                            onClick={togglePlay}
                            className="p-1.5 rounded-lg hover:bg-bg-accent/60 text-text-muted hover:text-cyan-400 transition-colors cursor-pointer"
                            title={isPlaying ? '일시정지' : '재생'}
                        >
                            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                        </button>

                        <button
                            onClick={handleNext}
                            className="p-1.5 rounded-lg hover:bg-bg-accent/60 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                            title="다음 곡"
                        >
                            <SkipForward size={14} />
                        </button>

                        <button
                            onClick={() => setShowPlaylist(!showPlaylist)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                showPlaylist ? 'bg-cyan-500/20 text-cyan-300' : 'hover:bg-bg-accent/60 text-text-muted hover:text-text-primary'
                            }`}
                            title="플레이리스트 보기"
                        >
                            <ListMusic size={15} />
                        </button>
                    </div>

                    {/* Extended Controls toggle button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer hidden sm:block"
                        title={isExpanded ? '간략히 보기' : '상세 컨트롤'}
                    >
                        <ChevronDown size={14} className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Expanded Extra Controls (Volume Slider & Repeat) */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-3.5 pb-3 pt-1 border-t border-bg-accent/40 flex items-center justify-between text-xs gap-3"
                        >
                            {/* Volume Control */}
                            <div className="flex items-center gap-2 flex-grow">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="text-text-muted hover:text-cyan-400 transition-colors cursor-pointer"
                                    title={isMuted ? '음소거 해제' : '음소거'}
                                >
                                    {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                </button>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.05"
                                    value={isMuted ? 0 : volume}
                                    onChange={(e) => {
                                        setVolume(parseFloat(e.target.value));
                                        if (isMuted) setIsMuted(false);
                                    }}
                                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                    title={`볼륨: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                                />
                                <span className="font-mono text-[10px] text-text-muted w-6 text-right">
                                    {Math.round((isMuted ? 0 : volume) * 100)}%
                                </span>
                            </div>

                            {/* Loop Mode Toggle */}
                            <button
                                onClick={() => setIsLoopOne(!isLoopOne)}
                                className={`px-2 py-1 rounded-md text-[10px] font-mono flex items-center gap-1 border transition-all cursor-pointer ${
                                    isLoopOne 
                                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                                        : 'bg-bg-card text-text-muted border-bg-accent/60 hover:text-text-primary'
                                }`}
                                title={isLoopOne ? '한 곡 반복 재생 중' : '전체 플레이리스트 반복 재생 중'}
                            >
                                <Repeat size={11} />
                                <span>{isLoopOne ? '1곡 반복' : '전체 반복'}</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};