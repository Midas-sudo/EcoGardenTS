import Sensor from "./Sensor";

export default function ValuesZone() {
  return (
    <div>
      <p>Real Time Values</p>
      <Sensor type={0} name="Temperatura" />
    </div>
  );
}
