// Dumb component: Animal
export default function Animal({ type, name, age }) {
  return (
    <div>
      <li>
        <strong>{type} |</strong> {name} | {age} years old
      </li>
    </div>
  );
}
