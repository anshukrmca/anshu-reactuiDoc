// src/components/sections/FooterNote.tsx

export function FooterNote() {
  return (
    <footer className="text-xs text-slate-500">
      Note: This page demonstrates the utilities your config attempts to safelist. If a class displays a "Inline-style preview" note, it means the token is not a valid Tailwind utility name by default — add it to <code>theme.extend.spacing</code> (or another appropriate theme area) to produce real classes.
    </footer>
  );
}