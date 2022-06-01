<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace modules\sitemodule;

use Craft;

use modules\sitemodule\extensions\ColorTwigExtension;

use yii\base\Module;

/**
 * Class SiteModule
 *
 * @author    percipio.london
 * @package   SiteModule
 * @since     1.0.0
 *
 */
class SiteModule extends Module
{
    // Static Properties
    // =========================================================================

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        parent::__construct($id, $parent, $config);
    }

    /**
     * @inheritdoc
     */
    public function init()
    {
        //Register Twig extensions for fetching colours
        if (Craft::$app->request->getIsSiteRequest()) {
            $coloursTwigExtension = new ColorTwigExtension();
            Craft::$app->view->registerTwigExtension($coloursTwigExtension);
        }

        parent::init();
    }

    // Protected Methods
    // =========================================================================
}
