import Pill from "./Pill";

export default function SettingsPill({ name, type }) {
  return (
    <>
      <div className="pill">
        <Pill text="Sunrise" />
        <Pill text="Sunrise" />
        <Pill text="Sunrise" />
      </div>
      <div style={{ marginInline: "auto", width:"fit-content", marginTop:"8px" }}>
        <label style={{ color: "var(--colors-brandAccent)" }} className="label with-drop">
          See Recomended
        </label>
      </div>
    </>
  );
}
