export const onRequestGet = async ({ params }) => {
  const { id } = params
  return new Response(JSON.stringify({ id }), {status: 200})
}

export async function onRequestPatch({ params }) { 
  const { id } = params
  return new Response(JSON.stringify({ id }), {status: 200})
}

export const onRequestPut = onRequestPatch

export const onRequestDelete = async () => { 
  return new Response(null, {status: 200})
}
