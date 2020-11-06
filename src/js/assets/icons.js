// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCloudDownloadAlt as falCloudDownloadAlt,
    faExternalLinkAlt as falExternalLinkAlt,
    faFilePdf as falFilePdf,
    faFileSpreadsheet as falFileSpreadsheet,
    faFileWord as falFileWord,
    faFilePowerpoint as falFilePowerPoint,
    faFileArchive as falFileArchive,
    faEnvelope as falEnvelope,
    faPrint as falPrint,
} from '@fortawesome/pro-light-svg-icons';

import {
    faFacebookF as fabFacebookF,
    faTwitter as fabTwitter,
} from '@fortawesome/free-brands-svg-icons';

// load font-awesome libraries
library.add(falCloudDownloadAlt, falExternalLinkAlt, falFilePdf, falFileSpreadsheet, falFileWord, falFilePowerPoint, falFileArchive, falEnvelope, falPrint, fabFacebookF, fabTwitter);

// convert i tags to SVG
dom.watch({
    autoReplaceSvgRoot: document,
    observeMutationsRoot: document.body
});