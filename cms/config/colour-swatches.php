<?php
/**
 * color-swatches plugin for Craft CMS 3.x.
 *
 * Let clients choose from a predefined set of colours.
 *
 * @link      https://percipio.london
 *
 * @copyright Copyright (c) 2020 Percipio Global Ltd.
 */

/**
 * colour-swatches config.php.
 *
 * This file exists only as a template for the color-swatches settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'colour-swatches.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [

    // Predefined colours
    'colors' => [
        [
            'label'   => 'red',
            'color'   => '#e02424',
            'class'   => 'red',     // custom attribute
            'default' => true,
        ],
        [
            'label'   => 'orange',
            'color'   => '#d03801',
            'class'   => 'orange',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'purple',
            'color'   => '#7e3af2',
            'class'   => 'purple',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'teal',
            'color'   => '#047481',
            'class'   => 'teal',     // falsecustom attribute
            'default' => false,
        ],
        [
            'label'   => 'blue',
            'color'   => '#1c64f2',
            'class'   => 'blue',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'gray',
            'color'   => '#4b5563',
            'class'   => 'gray',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'yellow',
            'color'   => '#9f580a',
            'class'   => 'yellow',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'green',
            'color'   => '#057a55',
            'class'   => 'green',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'indigo',
            'color'   => '#5850ec',
            'class'   => 'indigo',     // custom attribute
            'default' => false,
        ],
        [
            'label'   => 'pink',
            'color'   => '#d61f69',
            'class'   => 'pink',     // custom attribute
            'default' => false,
        ],
    ],
];
