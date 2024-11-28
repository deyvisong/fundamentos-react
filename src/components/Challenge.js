const Challenge = () => {
  const num1 = 2;
  const num2 = 3;
  return (
    <div>
      <p>A: {num1}</p>
      <p>B: {num2}</p>
      <button
        onClick={() => {
          console.log(num1 + num2);
        }}
      >
        Sum the numbers
      </button>
    </div>
  );
};

export default Challenge;
