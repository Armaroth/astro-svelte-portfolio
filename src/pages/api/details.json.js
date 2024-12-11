import { fetchTranslations } from "../../utils/translation.js";
export async function GET({ request }) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");
  const content = await fetchTranslations(lang);
  return new Response(
    JSON.stringify({
      content: content.details,
    })
  );
}
