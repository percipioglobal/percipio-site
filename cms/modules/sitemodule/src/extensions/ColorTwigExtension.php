<?php

namespace modules\sitemodule\extensions;

use Craft;

class ColorTwigExtension extends \Twig\Extension\AbstractExtension
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
            'label' => 'unset',
            'primary' => null,
            'secondary' => null,
            'text' => null,
        ];

        if(empty($swatch)){
            return $swatches;
        }

        if(property_exists($swatch, "label")){
            $swatches["label"] = $swatch->label;
        }

        if(property_exists($swatch, "color") && gettype($swatch->color) !== 'string' ){
            $i = 0;
            foreach ($swatch->color as $color) {
                $key = 0 === $i ? 'primary' : 'secondary';
                $swatches[$key] = $color['class'] ?? null;
                $swatches['text'] = $color['text'] ?? null;

                $i++;
            }
        }

        return $swatches;
    }
}
