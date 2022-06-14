export const init = () => {
    const clipboards = document.querySelectorAll('.copy-to-clipboard')

    clipboards.forEach(clipboard => {
        const btn = clipboard.querySelectorAll('.btn-copy-to-clipboard')[0]
        const code = clipboard.querySelectorAll('.code-copy-to-clipboard')[0]
        btn.addEventListener('click', () => copy(code))
    })
}

const copy = (code: Node) => {
    const range = document.createRange()
    const w = window.getSelection()
    range.selectNode(code)

    if (w) {
        w.removeAllRanges() // clear current selection
        w.addRange(range) // to select text
        document.execCommand('copy')
        w.removeAllRanges() // to deselect
    }
    
    alert('Copy to Clipboard Successfully')
}
