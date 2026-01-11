export default function Background() {
    const dots = Array.from({ length: 100 });

    return (
        <div className="absolute inset-0 overflow-hidden">
            {dots.map((_, index) => (
                <span
                    key={index}
                    className="dot"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                    }}
                />
            ))}
        </div>
    );
}
