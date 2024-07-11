// Dumb component: Animal

interface Props {
  type: string;
  name: string;
  age: number;
}

const Animal: React.FC<Props> = ({ type, name, age }) => {
  return (
    <div>
      <li>
        <strong>{type} |</strong> {name} | {age} years old
      </li>
    </div>
  );
};

export default Animal;
