/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
    Cameras: { Scene2D: require('cameras/2d') },
    Events: require('events/index'),
    Game: require('core/Game'),
    Input: {
        Touch: require('input/touch'),
        Events: require('input/events'),
        InputManager: require('input/InputManager'),
        InputPlugin: require('input/InputPlugin'),
        Pointer: require('input/Pointer'),
    },
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),
        Layer: require('gameobjects/layer/Layer'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/Text'),
        Factories: {
            Image: require('gameobjects/image/ImageFactory'),
            Layer: require('gameobjects/layer/LayerFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/TextFactory')
        },
        Creators: {
            Image: require('gameobjects/image/ImageCreator'),
            Layer: require('gameobjects/layer/LayerCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/TextCreator')
        },
    },
    Loader: {
        AnimationJSONFile: require('loader/filetypes/AnimationJSONFile'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MultiFile: require('loader/MultiFile'),
        AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
        ImageFile: require('loader/filetypes/ImageFile'),
        TilemapJSONFile: require('loader/filetypes/TilemapJSONFile'),
    },
    Scale: require('scale'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Tweens: require('tweens'),
    Tilemaps: require('tilemaps'),
    Physics: require('physics'),
};

//   Merge in the consts//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND)
{
    Phaser.Sound = require('sound');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
