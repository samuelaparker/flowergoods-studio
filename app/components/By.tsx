export interface ComponentProps {
  className?: string;
}

const By: React.FC<ComponentProps> = ({ className }) => {
  return <div className={className}>by</div>;
};

export default By;
