const tags = [];
const aTags = document.getElementsByTagName("a");

for (const item of aTags) {
  tags.push(item.textContent);
}
