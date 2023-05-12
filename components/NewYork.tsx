export interface ComponentProps {
  className?: string;
}

const NewYork: React.FC<ComponentProps> = ({ className }) => {
  return <div className={className}>new york</div>;
};

export default NewYork;
