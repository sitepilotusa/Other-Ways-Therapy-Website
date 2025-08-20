interface AuthorDatePillProps {
  author: string;
  date: string;
  className?: string;
}

export function AuthorDatePill({ author, date, className = "" }: AuthorDatePillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-owt-bg-accent text-owt-supporting px-3 py-1.5 text-xs md:text-sm border border-owt-primary-brown/30 shadow-sm ${className}`}
    >
      <span className="font-medium">By {author}</span>
      <span aria-hidden="true" className="text-owt-supporting">
        •
      </span>
      <span className="text-owt-supporting">{date}</span>
    </div>
  );
}


