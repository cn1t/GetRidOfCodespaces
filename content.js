// Branch selection

function changeDefaultSelection() {const radioButtonsParent = document.querySelector("#partial-discussion-sidebar > create-branch > details > details-dialog > form > div.Box-row");
  
  if (!radioButtonsParent) {
    return;
  }
  
  const radioButtons = radioButtonsParent.querySelectorAll('input[type="radio"]');
  
  if (radioButtons.length === 0) {
    return;
  }
  
  radioButtons.forEach((radio) => {
    if (radio.value === 'checkout-locally') {
      radio.checked = true;
    }
  });
}

const createBranchButton = document.querySelector('form[data-target="create-branch.developmentForm"]');

if (createBranchButton) {
  createBranchButton.addEventListener('click', changeDefaultSelection);
}

const observer = new MutationObserver(() => {
  const radioButtonsParent = document.querySelector("#partial-discussion-sidebar > create-branch > details > details-dialog > form > div.Box-row");
  
  if (radioButtonsParent) {
    observer.disconnect();
    changeDefaultSelection();
  }
});

observer.observe(document, { childList: true, subtree: true }); 

// Change default selection for "Download code" button

const localTabButton = document.getElementById("local-tab");

localTabButton.classList.add("selected");
localTabButton.setAttribute("tabindex", "0");
localTabButton.setAttribute("aria-selected", "true");

const cloudTabButton = document.getElementById("cloud-tab");
cloudTabButton.classList.remove("selected");
cloudTabButton.setAttribute("aria-selected", "false");
cloudTabButton.setAttribute("tabindex", "-1");