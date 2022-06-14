export const init = () => {
    const clipboards = document.querySelectorAll('.copy-to-clipboard')

    clipboards.forEach(clipboard => {
        const btn = clipboard.querySelectorAll('.btn-copy-to-clipboard')[0]
        const code = clipboard.querySelectorAll('.code-copy-to-clipboard')[0]
        btn.addEventListener('click', (evt) => copy(code))
    })
}

const copy = (code: Node) => {
    const range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges() // clear current selection
    window.getSelection().addRange(range) // to select text
    document.execCommand('copy')
    window.getSelection().removeAllRanges()// to deselect
    alert('Copy to Clipboard Successfully')
}
