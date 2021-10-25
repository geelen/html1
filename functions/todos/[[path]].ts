export async function onRequestGet({ params }) {
  const { path } = params
  return new Response(`Sorry, nothing on ${path}!`, { status: 404 })
}
