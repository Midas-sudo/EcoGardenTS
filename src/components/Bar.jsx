export default function Bar({ type, left, min, max, value }) {
  left = parseInt(left);
  min = parseInt(min);
  max = parseInt(max);
  value = parseInt(value);
  let left_curr = 0;
  if (type == 0) {
    left_curr = (value - min) / (max - min);

    left_curr = left_curr * 62 + left;
  }
  if (type == 1) {
    let t_value = value / 100;
    left_curr = t_value * 62 + left;
    value = value + "%";
  }

  return (
    <div className="full-int">
      <div style={{ left: `${left}%` }} className="ideal-int">
        <div style={{ left: `${left_curr}%` }} className="curr"></div>
        
      </div>
    </div>
  );
}
