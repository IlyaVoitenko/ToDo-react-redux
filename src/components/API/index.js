const baseURL = `http://localhost:3001/todos`;

export function getFetch() {
  return fetch(`${baseURL}`);
}
export function POST(name, description, timeCompletion, category, priority) {
  return fetch(`${baseURL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nameToDo: name,
      descriptionToDo: description,
      timeCompletionToDo: timeCompletion,
      category: category,
      isPriority: priority,
    }),
  }).catch((err) => console.log(`error : ${err}`));
}
export function deleteById(id) {
  return fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
  });
}
