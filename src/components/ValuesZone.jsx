import Sensor from "./Sensor";

export default function ValuesZone({ device, sel, fav }) {
  let values;
  if (device != undefined) {
    values = { temperature: device.temp_reads[0], humidity: device.hum_reads[0] };
    console.log(values, sel, fav);
  }

  return (
    device != undefined && (
      <div>
        <p>Real Time Values</p>
        <Sensor value={values.temperature} min={fav[sel].temperature.min} max={fav[sel].temperature.max} left={fav[sel].temperature.left} type={0} name="Temperatura" />
        <Sensor value={values.humidity} min={fav[sel].humidity.min} max={fav[sel].humidity.max} left={fav[sel].humidity.left} type={1} name="Humidity" />
        {/* <Sensor value={null} type={2} name="pH" /> */}
      </div>
    )
  );
}
