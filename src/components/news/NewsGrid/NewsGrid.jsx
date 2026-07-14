const NewsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default NewsGrid;