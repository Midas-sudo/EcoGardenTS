import { Dropdown } from "react-bootstrap";

// option = {
//     label: "M1 - Slave 2",
//     id: 2,
// }

export default function Drops({ options, value, onChange, text }) {
  console.log(options, value, onChange);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {options != [] ? (options.find(({ id }) => id === value) ? options.find(({ id }) => id == value).label : `No ${text}`) : `No ${text}`}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option.id} value={option.value} onClick={onChange}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
