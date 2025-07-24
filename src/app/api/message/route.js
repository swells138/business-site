export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Received message:', data);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error parsing request', err);
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
