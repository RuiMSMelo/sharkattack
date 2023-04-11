window.onload = () => {
    const canvas = document.querySelector('#canvas')
    canvas.style.display = "none"

    const backgroundImg = new Image()
    backgroundImg.src = 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/afb30b6d-853b-4ff6-8b8d-73e451d47789_scaled.jpg'
    const sharkImg = new Image()
    sharkImg.src = 'https://www.shutterstock.com/image-vector/shark-pixel-art-marine-predator-260nw-1300110574.jpg'

    const ctx = canvas.getContext('2d')


    let isMovingUp = false
    let isMovingDown = false
    let sharkSpeed = 2;
    let gameOver = false;
    let animateId;
    let sharkX = 0;
    let sharkY = 250;
    let score = 0;
    const startScreen = document.querySelector('.game-intro')
    const restartScreen = document.querySelector('.game-outro')
    document.getElementById("startButton").onclick = () => {
        startGame()
    }

    function startGame () {
        console.log("start game")
        startScreen.style.display = "none"
        restartScreen.style.display = "none"
        canvas.style.display = "block"
        animate()
    }

    drawShark = () => {
        ctx.drawImage(sharkImg, sharkX, sharkY, --, --)
    }

    const animate () => {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
        drawShark()
    }

    if (gameOver) {
        cancelAnimationFrame(animateId)
        restartScreen.style.display = "block"
    }
    else {
        animateId = requestAnimationFrame(animate)
    }
    if (isMovingUp === true && sharkY > 0) {
        sharkY -= sharkSpeed
    }
    else if (isMovingDown === true && sharkY < 500) {
        sharkY += sharkSpeed
    }

    //movement
    document.addEventListener('keydown', event => {
        console.log(event)
        if (event === 'ArrowLeft' || event === 'ArrowUp'){
            isMovingUp = true
        } 
        else if (event === 'ArrowRight' || event === 'ArrowDown'){
            isMovingDown = true
        }
    })
    document.addEventListener('keyup', event => {
        console.log(event)
        if (event === 'ArrowLeft' || event === 'ArrowUp'){
            isMovingUp = false
        } 
        else if (event === 'ArrowRight' || event === 'ArrowDown'){
            isMovingDown = false
        }
    })
}
