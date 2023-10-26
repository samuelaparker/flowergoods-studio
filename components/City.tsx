export interface ComponentProps {
  className?: string;
}

const City: React.FC<ComponentProps> = ({ className }) => {
  return <div className={className}>richmond</div>;
};

export default City;
