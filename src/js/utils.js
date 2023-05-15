export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function sortByDate(posts) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );
  return sortedPosts;
}

export async function sendEmailData(formNode) {
  const url = import.meta.env.PUBLIC_MAILING_LIST;
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
