<?php

namespace modules\sitemodule\helpers;

use Craft;

class RatioTwigExtenssion extends \Twig\Extension\AbstractExtension
{
    private $ratios = [
        100 => 'is1by1',
        50 => 'is2by1',
        33 => 'is3by1',
        75 => 'is4by3',
        133 => 'is3by4',
        74 => 'is7by5',
        62 => 'is8by5',
        56 => 'is16by9',
        42 => 'is21by9'
    ];

    public function getFilters()
    {
        return [];
    }

    public function getFunctions()
    {
        return [
            new \Twig\TwigFunction('getRatioClass', array($this, 'getRadioClass')),
        ];
    }

    public function getRadioClass($obj){
        $ratio = round( ($obj['height'] / $obj['width']) * 100);
        $sorted = [];

        foreach(array_keys($this->ratios) as $i){
            $sorted[$i] = abs($i - $ratio);
        }
        asort($sorted);

        $key = key(array_slice($sorted, 0, 1, true));

        return $this->ratios[$key];
    }
}
