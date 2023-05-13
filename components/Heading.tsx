export interface ComponentProps {
  className?: string;
}

const Heading: React.FC<ComponentProps> = ({ className }) => {
  return (
    <h1 className={className}>
      {" "}
      <span className="block">saturday</span>
      <span className="block">flowers</span>
    </h1>
  );
};

export default Heading;

//hide an element-  lg:hidden"
