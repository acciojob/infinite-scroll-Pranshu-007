//your code here!
// Function to add a specified number of list items
function addListItems(numItems) {
	const itemList = document.getElementById("item-list");

	for (let i = 1; i <= numItems; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = `Item ${itemList.children.length + 1}`;
		itemList.appendChild(listItem);
	}
}

addListItems(10);

function isEndOfList() {
	const listContainer = document.getElementById("list-container");
	const itemList = document.getElementById("item-list");
	return listContainer.scrollTop + listContainer.clientHeight >= itemList.clientHeight;
}

function handleScroll() {
	if (isEndOfList()) {
		addListItems(2);
	}
}
const listContainer = document.getElementById("list-container");
listContainer.addEventListener("scroll", handleScroll);
