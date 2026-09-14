var t
let next = "X"
let go
//setTimeout(() => f(), 100)
setTimeout(() => aknakereso(), 100)
function f() {
    go = false
    t = Array(10).fill(0).map(() => Array(15).fill(0))
    document.getElementById("x1").innerHTML = `
        <table>
        ${t.map((v, j) => `
            <tr>
                ${v.map((x, i) => `<td 
                    id="${j}-${i}"
                    onclick="g(${i},${j})"></td>`).join("")}
            </tr>`).join("")}
        </table>
    `
}
function g(x, y) {
    let player = next
    let clickedcell = document.getElementById(`${y}-${x}`)
    if (clickedcell.innerHTML == "" &&!go) {
        t[y][x] = next
        clickedcell.innerHTML = next
        clickedcell.classList.add(next);
        [[0, 1], [1, 0], [1, 1], [1, -1]].forEach(v => {
            let n = 0
            var [xp, yp] = [x, y]
            var [xi, yi] = v
            xp += xi
            yp += yi
            while (
                yp >= 0 && yp < 10 &&
                xp >= 0 && xp < 15 &&
                t[yp][xp] == player
            ) {
                n++
                xp += xi
                yp += yi
            }
            [xp, yp] = [x, y]
            xp -= xi
            yp -= yi
            while (
                yp >= 0 && yp < 10 &&
                xp >= 0 && xp < 15 &&
                t[yp][xp] == player
            ) {
                n++
                xp -= xi
                yp -= yi
            }
            if (n >= 4) {
                setTimeout(() => alert(player + " nyert!"), 100)
                go = true
            }
        })
        next = next == "X" ? "O" : "X"
    }
}

let bombakhelye = Array()
function aknakereso() {
    let tabla = Array()
    let bombakszama = 10
    for (let i = 0; i < bombakszama; i++)
        {
            let velszam = Math.floor(Math.random(0, 10)*100)
            bombakhelye.push(velszam)
        }
        for (let i = 0; i < 10; i++) {
            let sor = Array()
            for (let j = 0; j < 10; j++) {
            sor[j] = 0
        }
        tabla[i] = sor
    }
    let bomba = 0
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[i].length; j++) {
            for (let k = 0; k < bombakhelye.length; k++)
            {
                if(bombakhelye[k] == bomba)
                {
                    tabla[i][j] = "bomba"
                }
            }
            bomba++;
        }
    }
    console.log(tabla)

    let id = 0
    const table = document.createElement("table")
    document.getElementById("x1").appendChild(table)
    for (let i = 0; i < tabla.length; i++) {
        let tr = table.appendChild(document.createElement("tr"))
        for (let j = 0; j < tabla[i].length; j++) {
            let td = tr.appendChild(document.createElement("td"))
            td.addEventListener("click", robbant)
            td.classList.add(id)
            id++
        }
    }
}

function robbant(event) {
    console.log(bombakhelye)
    for (let i = 0; i < bombakhelye.length; i++)
    {
        if(bombakhelye[i] == event.currentTarget.classList.value)
        {
            console.log("bomba")
        }
    }
    console.log(event.currentTarget.classList.value)
}