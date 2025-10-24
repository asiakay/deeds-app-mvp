export default {
  async fetch(req) {
    return new Response("Deeds App worker running ✅", { status: 200 });
  }
}