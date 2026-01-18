const PiLogo = ({ size = 40 }: { size?: number }) => {
  const digits = "3141592653589793238".split("");
  const radius = size * 0.45;
  const center = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative">
      {/* Circle with pi digits */}
      {digits.map((digit, index) => {
        const angle = (index / digits.length) * 2 * Math.PI - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        
        return (
          <text
            key={index}
            x={x}
            y={y}
            fontSize={size * 0.12}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-secondary/60 font-mono"
            transform={`rotate(${(angle * 180) / Math.PI + 90}, ${x}, ${y})`}
          >
            {digit}
          </text>
        );
      })}
      
      {/* Pi symbol in center */}
      <text
        x={center}
        y={center}
        fontSize={size * 0.5}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-primary font-serif"
      >
        π
      </text>
    </svg>
  );
};

export default PiLogo;
