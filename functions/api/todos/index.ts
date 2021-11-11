const id = () => Math.floor(Math.random() * 1000) + 1

export async function onRequest() {
  return new Response("Method Not Allowed", { status: 405 })
}

export async function onRequestGet() {
  const todos = Array.from({ length: 5 }, () => ({ id: id() }))
  return new Response(JSON.stringify(todos), { status: 200 })
}

export async function onRequestPost() {
  return new Response(JSON.stringify({ id: id() }))
}
