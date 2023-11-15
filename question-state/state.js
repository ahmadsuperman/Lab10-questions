let tabBtns = [];
let tabPanels = {};

tabBtns = Array.from(document.querySelectorAll(".tabBtn"));
for (let i =0 ; i < tabBtns.length; i++) {
	tabBtns[i].addEventListener("click", selectTab, false);
	tabBtns[i].addEventListener("keyup", focusTab, false);
    // Set aria-selected to false for all tabs initially
    tabBtns[i].setAttribute("aria-selected", "false"); // Added this line
}

let x = document.querySelectorAll(".tabPanel");
for (let i =0 ; i < x.length; i++) {
	tabPanels[x[i].id] = x[i];
}

function focusTab (e) {
	if (e.keyCode == 39) {
		tabBtns[(tabBtns.indexOf(e.target) + 1) % 3].focus();
	} else if (e.keyCode == 37) {
		tabBtns[((tabBtns.indexOf(e.target) - 1) < 0 ? 2 : tabBtns.indexOf(e.target) - 1)].focus();
	}
}

function selectTab(e) {
	let tabPanelID = e.target.id.replace("Btn", "Panel");

	for (var i = 0; i < tabBtns.length; i++) {
		if (tabBtns[i].id == e.target.id) {
			tabPanels[tabPanelID].classList.remove("hidden");
			tabBtns[i].removeAttribute("tabindex");
			tabBtns[i].parentNode.classList.add("selectedTab");
            // Set aria-selected to true for the selected tab
            tabBtns[i].setAttribute("aria-selected", "true"); // Added this line
		} else {
			tabPanels[tabBtns[i].id.replace("Btn", "Panel")].classList.add("hidden");
			tabBtns[i].setAttribute("tabindex", "-1");
			tabBtns[i].parentNode.classList.remove("selectedTab");
            // Set aria-selected to false for all other tabs
            tabBtns[i].setAttribute("aria-selected", "false"); // Added this line
		}
	}
}
