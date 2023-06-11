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

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function toast(message, alertType, timing = 2000) {
  const createToaster = () => {
    const node = document.createElement("aside");
    node.id = "toaster";
    node.className =
      "toast toast-start z-[100] animate__animated aniamte__fast animate__fadeIn";
    node.setAttribute("role", "alert");
    node.setAttribute("aria-live", "polite");
    node.setAttribute("aria-atomic", "true");
    document.firstElementChild.insertBefore(node, document.body);
    return node;
  };

  const createToast = () => {
    const node = document.createElement("output");
    node.innerText = message;
    node.className = `alert ${alertType}`;
    return node;
  };

  const ejectAndEatToast = () => {
    const toaster = createToaster();
    const toast = createToast();
    toaster.appendChild(toast);
    setTimeout(() => {
      document.getElementById("toaster").remove();
    }, timing);
  };

  ejectAndEatToast();
}
