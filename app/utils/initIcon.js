import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faCalendarPlus,
  faBars,
  faUserNinja,
  faStar,
  faImages,
  faPlayCircle,
  faChartLine,
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
    );
  },
};
