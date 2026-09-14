from browser import document as D, html as H
D <= H.H1("Hello World!")
next = "X"
def f(e):
    global next
    next = "X" if next == "O" else "O"
    e.target.clear()
    e.target <= next 
    e.target.classList.add(next)
D <= H.TABLE(H.TR(
    H.TD().bind("click", f)
        for i in range(10)
) for j in range(5))