/*
NOTE: Adds copy to clipboard functionality and transitions
to copy buttons in code blocks.
See CopyCodeButton & CodeBlock component
*/
import copy from "copy-to-clipboard";

const buttons = document.querySelectorAll(
  "[data-copyCodeBtn]"
) as NodeListOf<HTMLButtonElement>;

if (buttons.length > 0) {
  // If CopyCodeButton is rendered on the page add event listener
  buttons.forEach((button) => {
    const codeBlock = button.closest("[data-codeBlock]") as HTMLElement;
    const copyIcon = button.querySelector("[data-copyIcon]") as HTMLElement;
    const copySuccess = button.querySelector(
      "[data-copySuccess]"
    ) as HTMLElement;
    let text = codeBlock.querySelector("code")!.innerText;

    button.addEventListener("click", () => {
      copy(text);
      button.disabled = true;
      button.classList.toggle("ring-success");
      copySuccess.classList.toggle("hidden");
      copyIcon.classList.toggle("hidden");

      setTimeout(() => {
        button.disabled = false;
        button.classList.toggle("ring-success");
        copySuccess.classList.toggle("hidden");
        copyIcon.classList.toggle("hidden");
      }, 2000);
    });
  });
}
