function editElement(ref, match, replacer) {
let content = ref.textContent;
let result = content.replaceAll(match, replacer);
ref.textContent = result;
}