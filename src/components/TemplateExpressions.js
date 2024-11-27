const TemplateExpressions = () => {
  const name = "Deyvison";
  const data = {
    age: 35,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Hi {name}, how you doing?</h1>
      <p>You are a : {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
