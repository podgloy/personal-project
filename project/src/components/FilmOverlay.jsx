export default function FilmOverlay({ addedClass }) {
  return (
    <img
      src="/film-grain.png"
      className={`absolute w-full h-full top-0 left-0 object-cover mix-blend-soft-light z-0 pointer-events-none ${addedClass}`}
    />
  );
}
