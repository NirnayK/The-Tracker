const page = ({ params }: { params: { category: string } }) => {
  const category = params.category;
  return (
    <div>
      <div>{category}</div>
    </div>
  );
};

export default page;
