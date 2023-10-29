import { style } from '@vanilla-extract/css'
import { fontSizeVars, fontWeightVars, lineHeightVars, spaceVars } from '../../styles/vars.css.js'
import { root as H4 } from './H4.css.js'

export const root = style({
  fontSize: fontSizeVars.h5,
  fontWeight: fontWeightVars.semibold,
  lineHeight: lineHeightVars.heading,
  selectors: {
    '&:not(:first-child)': {
      marginTop: spaceVars['16'],
      paddingTop: spaceVars['16'],
    },
    '&:not(:last-child)': {
      marginBottom: spaceVars['16'],
    },
    [`${H4}+&`]: {
      paddingTop: spaceVars['0'],
    },
  },
})