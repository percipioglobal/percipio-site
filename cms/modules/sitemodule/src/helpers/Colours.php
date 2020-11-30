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

        if(property_exists($swatch, "colour") && gettype($swatch->colour) !== 'string' ){
            $i = 0;
            foreach ($swatch->colour as $colour) {
                $key = 0 === $i ? 'primary' : 'secondary';
                $swatches[$key] = $colour->class;

                $i++;
            }
        }

        return $swatches;
    }
}
