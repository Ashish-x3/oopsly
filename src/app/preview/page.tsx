import Emoji404 from "@/app/components/Emoji404";
import { notFound } from "next/navigation";

export default function Preview({ searchParams }: { searchParams: { id: string } }) {
  try {
    const decoded = decodeURIComponent(searchParams.id);
    const { title, message, layout, emoji, emojiAnim, bgColor } = JSON.parse(decoded);

    switch (layout) {
      case "emoji":
        return (
          <Emoji404
            emoji={emoji}
            title={title}
            message={message}
            emojiAnim={emojiAnim}
            bgColor={bgColor}
          />
        );
    }
  } catch (e) {
    return notFound();
  }
}
