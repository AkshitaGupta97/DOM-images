
const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th><i>Key</i></th>
                    <th><i>Keycode</i></th>
                    <th><i>Code</i></th>
                </tr>
                <tr>
                    <td>${event.key === " " ? "Space" : event.key}</td>
                    <td>${event.keyCode}</td>
                    <td>${event.code}</td>
                </tr>
            </table>
        </div>
    `
})