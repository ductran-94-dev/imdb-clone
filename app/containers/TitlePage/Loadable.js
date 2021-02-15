/**
 *
 * Asynchronously loads the component for TitlePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
