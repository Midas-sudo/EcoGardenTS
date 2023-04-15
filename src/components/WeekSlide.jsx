export default function WeekSlide() {
  const days_of_week = ["M", "T", "W", "T", "F", "S", "S"];
  const nb_day = new Date().getDay();

  return (
    <>
      <p>Scheculed for this week</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {days_of_week.map((day, idx) => {
          return <Day key={idx} day_week={day} selected={nb_day - 1 == idx || (idx == 6 && nb_day == 0)} watering={idx % 2 == 0} />;
        })}
      </div>
    </>
  );
}

function Day({ day_week, selected, watering }) {
  return (
    <div id={day_week} style={{ display: "flex", flexDirection: "column", textAlign: "center", width: "fit-content", alignItems: "center" }}>
      <label className="label" style={{ margin: "0px" }}>{`${day_week}`}</label>
      <svg width="12vw" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="58" height="58" rx="12" fill="#C9E1B8" />
        <path
          d="M29.7371 17.1704C29.3021 16.832 28.698 16.832 28.263 17.1704C25.9671 18.9225 19.1884 24.6379 19.2246 31.2958C19.2246 36.685 23.6109 41.0833 29.0121 41.0833C34.4134 41.0833 38.7996 36.697 38.7996 31.3079C38.8117 24.7466 32.0209 18.9345 29.7371 17.1704Z"
          stroke="#61AF2B"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          fill={watering ? "#61AF2B" : ""}
        />
      </svg>
      {selected && <div style={{ border: "1px solid #61AF2B", width: "70%" }}></div>}
    </div>
  );
}
