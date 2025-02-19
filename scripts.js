const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const html = marked(markdownText);
    htmlOutput.innerHTML = html;
});
