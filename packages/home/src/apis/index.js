export const addToCart = (item) =>
  fetch("/api/add", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());
