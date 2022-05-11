// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';

import {
    faLongArrowLeft as farLongArrowLight,
    faLongArrowRight as farLongArrowRight,
    faCode as farCode,
} from '@fortawesome/pro-regular-svg-icons';

import {
    faFacebookF as fabFacebookF,
    faGithub as fabGithub,
    faInstagram as fabInstagram,
    faLinkedinIn as fabLinkedinIn,
    faTwitter as fabTwitter,
    faVimeoV as fabVimeoV,
    faYoutube as fabYoutube,
} from '@fortawesome/free-brands-svg-icons';

// load font-awesome libraries
library.add(
    fabFacebookF,
    fabGithub,
    fabInstagram,
    fabLinkedinIn,
    fabTwitter,
    fabVimeoV,
    fabYoutube,
    farLongArrowLight,
    farLongArrowRight,
    farCode,
);

// convert i tags to SVG
dom.watch({
    autoReplaceSvgRoot: document,
    observeMutationsRoot: document.body
});
