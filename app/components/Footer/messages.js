/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  getTheImdbApp: {
    id: `${scope}.nav.get_the_imdb_app`,
    defaultMessage: 'Get the IMDb App',
  },
  help: {
    id: `${scope}.nav.help`,
    defaultMessage: 'Help',
  },
  siteIndex: {
    id: `${scope}.nav.site_index`,
    defaultMessage: 'Site Index',
  },
  imdbPro: {
    id: `${scope}.nav.imdb_pro`,
    defaultMessage: 'IMDbPro',
  },
  boxOfficeMojo: {
    id: `${scope}.nav.box_office_mojo`,
    defaultMessage: 'Box Office Mojo',
  },
  imdbDeveloper: {
    id: `${scope}.nav.imdb_developer`,
    defaultMessage: 'IMDb Developer',
  },
  pressRoom: {
    id: `${scope}.nav.press_room`,
    defaultMessage: 'Press Room',
  },
  advertising: {
    id: `${scope}.nav.advertising`,
    defaultMessage: 'Advertising',
  },
  jobs: {
    id: `${scope}.nav.jobs`,
    defaultMessage: 'Jobs',
  },
  conditionsOfUse: {
    id: `${scope}.nav.conditions_of_use`,
    defaultMessage: 'Conditions of Use',
  },
  privacyPolicy: {
    id: `${scope}.nav.privacy_policy`,
    defaultMessage: 'Privacy Policy',
  },
  interestBasedAds: {
    id: `${scope}.nav.interest_based_ads`,
    defaultMessage: 'Interest-Based Ads',
  },
});
