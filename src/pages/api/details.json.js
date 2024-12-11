import { translations } from "../../translations.js";
export async function GET({ request }) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");
  const content = translations[lang].details;
  return new Response(
    JSON.stringify({
      content: content,
    })
  );
}
