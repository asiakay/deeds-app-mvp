export default {
  async fetch(request, env, ctx) {
    return new Response("Deeds app is alive ✅", { status: 200 });
  },
};