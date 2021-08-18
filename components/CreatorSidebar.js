
export default function CreatorHeader({ creator }) {
  return (
    <div className="px-6 py-12 w-80">
        <span className="text-2xl font-semibold">{creator.name || "Anonymous"}</span>
   </div>
  );
}
