import { AppState } from "./state/appStateReducer";

const envUrl = process.env.REACT_APP_BACKEND_ENDPOINT;

console.log({ envUrl });

export const save = (payload: AppState) => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response: any) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error while saving the state.");
    }
  });
};

export const load = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
    (response: any) => {
      if (response.ok) {
        return response.json() as Promise<AppState>;
      } else {
        throw new Error("Error while loading the state.");
      }
    }
  );
};
