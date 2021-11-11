export async function onRequestGet() {
  return fetch("https://www.google.com/finance/quote/NET:NYSE");
}
