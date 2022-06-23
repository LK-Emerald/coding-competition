namespace SpriteKind {
    export const Melee = SpriteKind.create()
    export const RANGED = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(2000)
    RANGED_ATK = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.RANGED)
    tiles.placeOnTile(RANGED_ATK, USER.tilemapLocation())
    if (RightFacing == 1) {
        animation.runImageAnimation(
        RANGED_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . . e e e e e e e e d d d . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . . e e e e e e e e d d d . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . . e e e e e e e e d d d . . 
            . . 1 1 1 . 1 . . . . d d . . . 
            . . 1 . 1 . 1 . . . . d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            RANGED_ATK.x += 1
            pause(20)
        }
    }
    if (LeftFacing == 1) {
        animation.runImageAnimation(
        RANGED_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . d d . . . . . 
            . . . . . . . . d d . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d d . . . . . . . . 
            . . . . . . . d d d . . . . . . 
            . . . . . . . . . d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            RANGED_ATK.x += -1
            pause(20)
        }
    }
    if (UpFacing == 1) {
        animation.runImageAnimation(
        RANGED_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d . . . . . d . . . . 
            . . . . d . . . . . . d d . . . 
            . . . d d . . . . . . . d d . . 
            . . . d . . . . . . . . . d . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            RANGED_ATK.y += -1
            pause(20)
        }
    }
    if (DownFacing == 1) {
        animation.runImageAnimation(
        RANGED_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d . . . . . . . . . d . . . 
            . . d d . . . . . . . d d . . . 
            . . . d d . . . . . . d . . . . 
            . . . . d . . . . . d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            RANGED_ATK.y += 1
            pause(20)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(100)
    MELEE_ATK = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Melee)
    tiles.placeOnTile(MELEE_ATK, USER.tilemapLocation())
    if (RightFacing == 1) {
        animation.runImageAnimation(
        MELEE_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d . . . . . . . . . 
            . . . . . . d d . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . d . . . . . . 
            . . . . . . . . d d . . . . . . 
            . . . . . . . . . d . . . . . . 
            . . . . . . . . . d . . . . . . 
            . . . . . . . . . d . . . . . . 
            . . . . . . . . d d . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . d d . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            MELEE_ATK.x += 1
            pause(20)
        }
    }
    if (LeftFacing == 1) {
        animation.runImageAnimation(
        MELEE_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . d d . . . . . 
            . . . . . . . . d d . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . d d . . . . . . . . 
            . . . . . . . d d d . . . . . . 
            . . . . . . . . . d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            MELEE_ATK.x += -1
            pause(20)
        }
    }
    if (UpFacing == 1) {
        animation.runImageAnimation(
        MELEE_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 . . 1 1 1 1 . . . . 
            . . . . 1 . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . . 1 1 . . 
            . . . 1 . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d . . . . . d . . . . 
            . . . . d . . . . . . d d . . . 
            . . . d d . . . . . . . d d . . 
            . . . d . . . . . . . . . d . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            MELEE_ATK.y += -1
            pause(20)
        }
    }
    if (DownFacing == 1) {
        animation.runImageAnimation(
        MELEE_ATK,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . 1 . . . 
            . . 1 1 . . . . . . . 1 1 . . . 
            . . . 1 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d . . . . . . . . . d . . . 
            . . d d . . . . . . . d d . . . 
            . . . d d . . . . . . d . . . . 
            . . . . d . . . . . d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        for (let index = 0; index < 32; index++) {
            MELEE_ATK.y += 1
            pause(20)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.showLongText("", DialogLayout.Bottom)
    }
})
let MELEE_ATK: Sprite = null
let DownFacing = 0
let LeftFacing = 0
let RightFacing = 0
let RANGED_ATK: Sprite = null
let UpFacing = 0
let USER: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
USER = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 1 1 f f f f . . . 
    . . f f e 1 e 1 1 e 1 e f f . . 
    . . f e f 1 f f f 1 f 1 e f . . 
    . . f f f 1 1 e e f 1 f f f . . 
    . . f e e f 1 e e f f 1 e f . . 
    . f f e e e f e e e f f e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f e . . . 
    . . 4 d d e 1 1 1 1 1 f 4 . . . 
    . . . 4 e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(USER)
UpFacing = 1
controller.moveSprite(USER, 100, 100)
forever(function () {
	
})
