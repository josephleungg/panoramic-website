import { Icon } from "@/components/ui/Icon";
import addIcon from "@iconify-icons/solar/add-circle-linear";

export function Accordion({ items }: { items: { id: string; question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-line">
      {items.map((item) => (
        <details key={item.id} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            {item.question}
            <Icon
              icon={addIcon}
              width={22}
              height={22}
              className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
