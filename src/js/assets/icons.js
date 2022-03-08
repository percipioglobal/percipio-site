// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope as farEnvelope,
    faFileArchive as farFileArchive,
    faFileExcel as farFileExcel,
    faFilePdf as farFilePdf,
    faFilePowerpoint as farFilePowerPoint,
    faFileWord as farFileWord,
} from '@fortawesome/free-regular-svg-icons';

import {
    faLongArrowLeft as farLongArrowLight,
    faLongArrowRight as farLongArrowRight,
    faCode as farCode,
} from '@fortawesome/pro-regular-svg-icons';

import {
    faCircle as fasCircle,
    faChevronRight as fasChevronRight,
    faChevronLeft as fasChevronLeft,
    faCloudDownloadAlt as fasCloudDownloadAlt,
    faDownload as fasDownload,
    faExternalLinkAlt as fasExternalLinkAlt,
    faHashtag as fasHashtag,
    faLongArrowAltRight as fasLongArrowAltRight,
    faPrint as fasPrint,
    faSquareFull as fasSquareFull
} from '@fortawesome/free-solid-svg-icons';

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
    farEnvelope,
    farFileArchive,
    farFileExcel,
    farFilePdf,
    farFilePowerPoint,
    farFileWord,
    fasCircle,
    fasChevronRight,
    fasChevronLeft,
    fasCloudDownloadAlt,
    fasDownload,
    fasExternalLinkAlt,
    fasHashtag,
    fasLongArrowAltRight,
    fasPrint,
    fasSquareFull,
);

// convert i tags to SVG
dom.watch({
    autoReplaceSvgRoot: document,
    observeMutationsRoot: document.body
});
