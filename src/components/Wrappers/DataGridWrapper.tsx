const DataGridWrapper = ({ children }: DataGridWrapperProps) => {
  return (
    <div className="grid grid-cols-data-card justify-around gap-6">
      {children}
    </div>
  );
};

export default DataGridWrapper;
