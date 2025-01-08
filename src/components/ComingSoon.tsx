interface ComingSoonProps {
  name: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl text-center font-bold text-gray-100">
        {name} - Coming Soon!
      </h1>
    </div>
  );
};

export default ComingSoon;
