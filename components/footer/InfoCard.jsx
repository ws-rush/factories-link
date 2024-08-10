export function InfoCard({ title, children, className }) {
  return (
    <div className="p-2 mr-8">
      <h6 className="text-[#60626c] font-semibold py-2">{title}</h6>
      <ul className={`text-sm flex flex-col gap-1 ${className}`}>{children}</ul>
    </div>
  );
}
