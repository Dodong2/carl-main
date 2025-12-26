import { useState, useEffect } from "react";

export const AnimatedGridBackground = () => {
    const [filledCells, setFilledCells] = useState(new Set());
    const [totalCells, setTotalCells] = useState(0);

    // Calculate total cells based on screen size
    useEffect(() => {
        const calculateCells = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Determine cell size based on screen width
            let cellSize = 50;
            if (width <= 400) cellSize = 25;
            else if (width <= 576) cellSize = 30;
            else if (width <= 768) cellSize = 35;
            else if (width <= 992) cellSize = 40;
            else if (width <= 1200) cellSize = 45;
            
            // Calculate columns and rows
            const cols = Math.ceil(width / cellSize);
            const rows = Math.ceil(height / cellSize);
            
            // Total cells = cols * rows
            const total = cols * rows;
            setTotalCells(total);
        };

        calculateCells();
        window.addEventListener('resize', calculateCells);
        
        return () => window.removeEventListener('resize', calculateCells);
    }, []);

    // Animation effect
    useEffect(() => {
        if (totalCells === 0) return;

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
    }, [totalCells]);

    return (
        <div className="animated-grid-background">
            <div className="grid-container">
                {Array.from({ length: totalCells }).map((_, i) => (
                    <div
                        key={i}
                        className={`grid-cell ${filledCells.has(i) ? 'filled' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};