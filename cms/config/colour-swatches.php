<?php
/**
 * color-swatches plugin for Craft CMS 3.x.
 *
 * Let clients choose from a predefined set of colours.
 *
 * @link      https://percipio.london
 *
 * @copyright Copyright (c) 2020 Percipio.London
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

    // Custom  palettes, fixed options [label, default (boolean), colour (array(colour, customOptions)) ]
    'palettes' => [
        'Percipio' => [  // custom label
            [
                'label'   => 'redblue',
                'default' => true,
                'color'   =>  [
                    [
                        'color'     => '#1c64f2',  // the colour shown in the fieldtype (required)
                        'class'     => 'blue-600', // custom attribute
                    ],
                    [
                        'color'     => '#D61F69',  // the colour shown in the fieldtype (required)
                        'class'     => 'pink-600', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'pink',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#D61F69',  // the colour shown in the fieldtype (required)
                        'class'     => 'pink-600', // custom attribute
                    ],
                    [
                        'color'     => '#99154B',  // the colour shown in the fieldtype (required)
                        'class'     => 'pink-800', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'red',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#E02424',  // the colour shown in the fieldtype (required)
                        'class'     => 'red-600', // custom attribute
                    ],
                    [
                        'color'     => '#9B1C1C',  // the colour shown in the fieldtype (required)
                        'class'     => 'red-800', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'orange',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#FF5A1F',  // the colour shown in the fieldtype (required)
                        'class'     => 'orange-500', // custom attribute
                    ],
                    [
                        'color'     => '#9B1C1C',  // the colour shown in the fieldtype (required)
                        'class'     => 'orange-700', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'yellow',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#e3a008',  // the colour shown in the fieldtype (required)
                        'class'     => 'yellow-400', // custom attribute
                    ],
                    [
                        'color'     => '#c27803',  // the colour shown in the fieldtype (required)
                        'class'     => 'yellow-500', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'green',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#31C48D',  // the colour shown in the fieldtype (required)
                        'class'     => 'green-400', // custom attribute
                    ],
                    [
                        'color'     => '#057A55',  // the colour shown in the fieldtype (required)
                        'class'     => 'green-600', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'teal',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#16BDCA',  // the colour shown in the fieldtype (required)
                        'class'     => 'teal-400', // custom attribute
                    ],
                    [
                        'color'     => '#047481',  // the colour shown in the fieldtype (required)
                        'class'     => 'teal-600', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'blue',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#1c64f2',  // the colour shown in the fieldtype (required)
                        'class'     => 'blue-600', // custom attribute
                    ],
                    [
                        'color'     => '#1e429f',  // the colour shown in the fieldtype (required)
                        'class'     => 'blue-800', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'purple',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#7e3af2',  // the colour shown in the fieldtype (required)
                        'class'     => 'purple-600', // custom attribute
                    ],
                    [
                        'color'     => '#5521b5',  // the colour shown in the fieldtype (required)
                        'class'     => 'purple-800', // custom attribute
                    ],
                ]
            ],
            [
                'label'   => 'white',
                'default' => false,
                'color'   =>  [
                    [
                        'color'     => '#FFFFFF',  // the colour shown in the fieldtype (required)
                        'class'     => 'white-100', // custom attribute
                    ],
                    [
                        'color'     => '#FFFFFF',  // the colour shown in the fieldtype (required)
                        'class'     => 'white-100', // custom attribute
                    ],
                ]
            ],
        ],
    ]

];
