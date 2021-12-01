export function POST(name, description, timeCompletion, category, priority) {
  fetch(`http://localhost:3001/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nameToDo: name,
      descriptionToDo: description,
      timeCompletionToDo: timeCompletion,
      category: category,
      isPriority: priority,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(`error : ${err}`));
}
export function getValue({ value }) {
  return value;
}
