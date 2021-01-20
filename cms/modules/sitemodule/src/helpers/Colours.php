<?php

namespace modules\sitemodule\helpers;

use Craft;


class Colours extends \Twig\Extension\AbstractExtension
{
    public function getFilters()
    {
        return [];
    }

    public function getFunctions()
    {
        return [
            new \Twig\TwigFunction('swatch', array($this, 'swatch')),
        ];
    }

    public function swatch($swatch)
    {
        $swatches = [
            'primary' => null,
            'secondary' => null,
        ];

        if(property_exists($swatch, "color") && gettype($swatch->color) !== 'string' ){
            $i = 0;
            foreach ($swatch->color as $color) {
                $key = 0 === $i ? 'primary' : 'secondary';
                $swatches[$key] = $color->class;

                $i++;
            }
        }

        return $swatches;
    }
}
