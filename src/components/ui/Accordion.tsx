export function Accordion({ items }: { items: { id: string; question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-line">
      {items.map((item) => (
        <details key={item.id} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            {item.question}
            <span className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-charcoal/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
