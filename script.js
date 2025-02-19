document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");
  
  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  }

  // Add initial 10 items
  addListItems(10);

  // Infinite scroll functionality
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
    ) {
      addListItems(2);
    }
  });
});
