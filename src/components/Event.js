const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Event activated!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderising it!</h1>;
    } else {
      return <h1>I can also renderising it!</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click here!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicked")}>Click here too!</button>
        <button
          onClick={() => {
            if (true) {
              console.log("This should not exist");
            }
          }}
        >
          Click here please!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
