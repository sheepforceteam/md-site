function loadMarkdown(path) {
    fetch(path)
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked(text);
        })
        .catch(error => console.error('Error fetching markdown:', error));
}
