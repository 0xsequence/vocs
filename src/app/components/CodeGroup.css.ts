import { globalStyle, style } from '@vanilla-extract/css'
import {
  borderRadiusVars,
  fontSizeVars,
  fontWeightVars,
  primitiveColorVars,
  semanticColorVars,
  spaceVars,
  viewportVars,
} from '../styles/vars.css.js'

export const root = style({
  backgroundColor: semanticColorVars.codeBlockBackground,
  borderRadius: borderRadiusVars['4'],
  '@media': {
    [viewportVars['max-720px']]: {
      borderRadius: 0,
      marginLeft: `calc(-1 * ${spaceVars['16']})`,
      marginRight: `calc(-1 * ${spaceVars['16']})`,
    },
  },
})

export const tabsList = style(
  {
    backgroundColor: semanticColorVars.codeBlockBackground,
    borderBottom: `1px solid ${primitiveColorVars.border}`,
    borderTopLeftRadius: borderRadiusVars['4'],
    borderTopRightRadius: borderRadiusVars['4'],
    display: 'flex',
    padding: `${spaceVars['0']} ${spaceVars['14']}`,
    '@media': {
      [viewportVars['max-720px']]: {
        padding: `${spaceVars['0']} ${spaceVars['8']}`,
      },
    },
  },
  'tabsList',
)

export const tabsTrigger = style(
  {
    borderBottom: '2px solid transparent',
    color: primitiveColorVars.text3,
    fontSize: fontSizeVars['14'],
    fontWeight: fontWeightVars.medium,
    padding: `${spaceVars['8']} ${spaceVars['8']} ${spaceVars['6']} ${spaceVars['8']}`,
    selectors: {
      '&[data-state="active"]': {
        borderBottom: `2px solid ${primitiveColorVars.border}`,
        color: primitiveColorVars.text,
      },
    },
  },
  'tabsTrigger',
)

export const tabsContent = style(
  {
    selectors: {
      '&:not([data-pretty-code="true"])': {
        padding: `${spaceVars['20']} ${spaceVars['22']}`,
        '@media': {
          [viewportVars['max-720px']]: {
            padding: `${spaceVars['20']} ${spaceVars['16']}`,
          },
        },
      },
    },
  },
  'tabsContent',
)

globalStyle(`${root} [data-rehype-pretty-code-fragment], ${root} pre`, {
  marginBottom: spaceVars['0'],
})

globalStyle(`${root} pre`, {
  '@media': {
    [viewportVars['max-720px']]: {
      margin: 'unset',
    },
  },
})
