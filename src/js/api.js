export async function sendEmailData(formNode) {
  const url = import.meta.env.PUBLIC_MAILING_LIST; // Netlify .env
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: new FormData(formNode),
    });
  } catch (error) {
    response = false;
  } finally {
    return response;
  }
}
