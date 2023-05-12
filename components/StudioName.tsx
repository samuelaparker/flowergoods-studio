export interface ComponentProps {
  className?: string;
}

const StudioName: React.FC<ComponentProps> = ({ className }) => {
  return <div className={className}>flowergoods.studio</div>;
};

export default StudioName;
