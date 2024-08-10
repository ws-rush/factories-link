export function Logo({ large = false, type = "block", dark = false }) {
  return (
    <div className={["font-bold leading-none", large && "text-3xl"].join(" ")}>
      <span className={dark ? "text-white" : "text-black"}>FACTORIES</span>
      {type === "block" ? <br /> : " "}
      <span className="text-orange-600">LINK</span>
    </div>
  );
}
