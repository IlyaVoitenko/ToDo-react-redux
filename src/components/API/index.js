const baseURL = `http://localhost:3001/todos`;

export function getFetch(id) {
  return fetch(`${baseURL}/${id}`);
}
export function put(id, name, description, timeCompletion, category, priority) {
  console.log(id, name, description, timeCompletion, category, priority);
  return fetch(`${baseURL}/${id}`, {
    method: "PUT",
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
export function post(name, description, timeCompletion, category, priority) {
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
