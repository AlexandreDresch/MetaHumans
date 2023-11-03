export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-accent px-8 py-4">
      <p className="text-xs opacity-75">
        {new Date().getFullYear()} &copy;{" "}
        <span className="font-semibold">MetaHumans</span>
      </p>
    </footer>
  );
}
