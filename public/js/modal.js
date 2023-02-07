document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    // Close the modal
    $el.classList.remove("is-active"); // Remove the active class
  }

  function closeAllModals() {
    // Close all modals
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      // For each modal
      closeModal($modal); // Close the modal
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    // For each button
    const modal = $trigger.dataset.target; // Get the data-target attribute
    const $target = document.getElementById(modal); // Get the modal element

    $trigger.addEventListener("click", () => {
      // Add a click event
      openModal($target); // Open the modal
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button") || []).forEach(($close) => {
    const $target = $close.closest(".modal"); // Get the modal element

    $close.addEventListener("click", () => {
      // Add a click event
      closeModal($target); // Close the modal
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    // Add a keyboard event
    const e = event || window.event; // Get the event object

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals(); // Close all modals
    }
  });
});
