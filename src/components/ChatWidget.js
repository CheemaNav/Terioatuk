import { SITE } from "@/lib/site";
import { WhatsAppMark } from "./Icons";

export default function ChatWidget() {
  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[80] flex max-w-[calc(100vw-2rem)] flex-col items-end">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-[13px] text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(37,211,102,0.42)] transition-colors hover:bg-[#1ebe5d] sm:px-5"
      >
        <WhatsAppMark size={18} />
        Chat with us
      </a>
    </div>
  );
}
