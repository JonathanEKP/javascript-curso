import { showModal } from "../render-modal/render-modal";
import "./render-add-button.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderAddButton = (element) => {
  const fanButton = document.createElement("button");
  fanButton.innerText = "+";
  fanButton.classList.add("fab-button");

  element.append(fanButton);

  fanButton.addEventListener("click", () => {
    showModal();
  });
};
