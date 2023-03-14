input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2 && sprite.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
        Number2 = randint(1, 4)
        if (Number2 == 1) {
            sprite.turn(Direction.Right, 90)
        } else {
            if (Number2 == 2) {
                sprite.turn(Direction.Right, 180)
            } else {
                if (Number2 == 3) {
                    sprite.turn(Direction.Right, 270)
                } else {
                    if (Number2 == 4) {
                        sprite.turn(Direction.Right, 360)
                    }
                }
            }
        }
    } else {
        game.removeLife(1)
        if (game.isGameOver()) {
            game.gameOver()
            basic.showNumber(game.score())
        }
    }
})
let Number2 = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(5)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    if (game.score() == 30) {
        game.gameOver()
        basic.showNumber(game.score())
    } else {
        if (game.score() == 25 || (game.score() == 26 || (game.score() == 27 || (game.score() == 28 || game.score() == 29)))) {
            basic.pause(100)
        } else {
            if (game.score() == 24 || (game.score() == 23 || (game.score() == 22 || (game.score() == 21 || game.score() == 20)))) {
                basic.pause(200)
            } else {
                if (game.score() == 15 || (game.score() == 16 || (game.score() == 17 || (game.score() == 18 || game.score() == 19)))) {
                    basic.pause(300)
                } else {
                    if (game.score() == 14 || (game.score() == 13 || (game.score() == 12 || (game.score() == 11 || game.score() == 10)))) {
                        basic.pause(400)
                    } else {
                        if (game.score() == 5 || (game.score() == 6 || (game.score() == 7 || (game.score() == 8 || game.score() == 9)))) {
                            basic.pause(500)
                        } else {
                            if (game.score() == 4 || (game.score() == 3 || (game.score() == 2 || (game.score() == 1 || game.score() == 0)))) {
                                basic.pause(600)
                            }
                        }
                    }
                }
            }
        }
    }
})
control.inBackground(function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
