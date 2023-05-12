export interface ComponentProps {
  className?: string;
}

const Heading: React.FC<ComponentProps> = ({ className }) => {
  return <h1 className={className}>saturday flowers</h1>;
};

export default Heading;

//hide an element-  lg:hidden"
