export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-bone">
      <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-gold/60 text-gold-deep">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l9 9h-3v8h-5v-5h-2v5H6v-8H3l9-9z" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-stone">
        Aurelia Estates
      </p>
      <div className="hairline mt-6 w-40" />
    </div>
  );
}
