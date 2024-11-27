const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Event activated!");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click here!</button>
      </div>
    </div>
  );
};

export default Events;
