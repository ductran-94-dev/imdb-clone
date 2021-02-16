import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faImdb } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faCalendarPlus,
  faBars,
  faUserNinja,
  faStar,
  faImages,
  faPlayCircle,
  faChartLine,
  faQuestionCircle,
  faBell,
  faBookmark,
  faCaretDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

export default {
  init() {
    library.add(
      fab,
      faChevronRight,
      faCalendarPlus,
      faBars,
      faUserNinja,
      faStar,
      faImages,
      faPlayCircle,
      faChartLine,
      faImdb,
      faQuestionCircle,
      faBell,
      faBookmark,
      faCaretDown,
      faPlus,
    );
  },
};
