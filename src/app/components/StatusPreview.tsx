interface StatusPreviewProps {
  title: string;
  message: string;
  emoji: string;
  animate: boolean;
  background: string;
}

export default function StatusPreview({
  title,
  message,
  emoji,
  animate,
  background,
}: StatusPreviewProps) {
  return (
    <div className={`flex-1 flex items-center justify-center ${background} transition-all duration-300`}>
      <div className="text-center px-4">
        <div className={`text-7xl ${animate ? "animate-bounce" : ""}`}>{emoji}</div>
        <h1 className="text-3xl font-bold mt-4">{title}</h1>
        <p className="text-lg text-gray-600 mt-2">{message}</p>
      </div>
    </div>
  );
}
