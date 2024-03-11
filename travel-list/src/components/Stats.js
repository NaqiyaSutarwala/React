const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const alreadyPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((alreadyPacked * 100) / items.length);
  return (
    <footer className="stats">
      {packedPercent === 100 ? (
        `You got everything! Let's Go!!✈️`
      ) : (
        <em>
          You have {items.length} items on your list. And you already packed{" "}
          {alreadyPacked} ({packedPercent}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
