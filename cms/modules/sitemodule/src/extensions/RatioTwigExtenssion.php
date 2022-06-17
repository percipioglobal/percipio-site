<?php

namespace modules\sitemodule\extensions;

use Craft;

class RatioTwigExtenssion extends \Twig\Extension\AbstractExtension
{
    private $ratios = [
        100 => 'aspect-[1/1] aspect-[square] aspect-square',
        50 => 'aspect-[1/2]',
        33 => 'aspect-[3/1]',
        75 => 'aspect-[4/3]',
        133 => 'aspect-[3/4]',
        74 => 'aspect-[7/5]',
        62 => 'aspect-[8/5]',
        56 => 'aspect-[16/9]',
        42 => 'aspect-[21/9]'
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
