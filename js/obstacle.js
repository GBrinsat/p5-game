class Obstacle {

    constructor(image) {
        this.image = image
        this.x = 500
        this.y = random(400)
        this.width = 50
        this.height = 50
        this.velocity = 1
    }

    draw() {
        this.x -= this.velocity
        image(this.image, this.x, this.y, this.width, this.height)

    }

    collision(playerInfo) {
        let obstacleX = (this.width / 2) + this.x
        let obstacleY = (this.height / 2) + this.y

        let playerX = playerInfo.width / 2 + playerInfo.x
        let playerY = playerInfo.height / 2 + playerInfo.y

        if(dist(obstacleX, obstacleY, playerX, playerY) > 75) {
            return false
        }
        else {
            return true
        }

    }
}