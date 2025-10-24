export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/save-email" && request.method === "POST") {
      try {
        const { email } = await request.json();
        if (!email) return new Response("Missing email", { status: 400 });

        await env.DEEDS_KV.put(`email:${email}`, new Date().toISOString());
        return new Response("Email saved ✅");
      } catch (err) {
        return new Response("Error saving email", { status: 500 });
      }
    }

    return new Response("Deeds App worker running ✅");
  }
};

