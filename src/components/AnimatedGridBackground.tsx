import { useState, useEffect } from "react";

export const AnimatedGridBackground = () => {
    const [filledCells, setFilledCells] = useState(new Set());

    useEffect(() => {
        const totalCells = 1000;
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * totalCells);
            setFilledCells(prev => {
                const newSet = new Set(prev);
                if (newSet.has(randomIndex)) {
                    newSet.delete(randomIndex);
                } else {
                    newSet.add(randomIndex);
                }
                // Keep only 20-30 cells filled at a time
                if (newSet.size > 30) {
                    const firstItem = newSet.values().next().value;
                    newSet.delete(firstItem);
                }
                return newSet;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animated-grid-background">
            <div className="grid-container">
                {Array.from({ length: 400 }).map((_, i) => (
                    <div
                        key={i}
                        className={`grid-cell ${filledCells.has(i) ? 'filled' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
