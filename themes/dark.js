const colors = require('tailwindcss/colors')

module.exports = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  'base-100': colors.stone['900'],
  'base-200': colors.stone['800'],
  'base-300': colors.stone['600'],
  'base-content': colors.stone['300'],

  primary: colors.violet['800'],
  'primary-focus': colors.violet['700'],
  'primary-content': colors.violet['50'],

  secondary: colors.teal['700'],
  'secondary-focus': colors.teal['600'],
  'secondary-content': colors.teal['50'],

  accent: colors.fuchsia['700'],
  'accent-focus': colors.fuchsia['600'],
  'accent-content': colors.fuchsia['50'],

  neutral: colors.stone['900'],
  'neutral-focus': colors.stone['800'],
  'neutral-content': colors.stone['50'],

  info: colors.indigo['700'],
  success: colors.green['700'],
  warning: colors.orange['500'],
  error: colors.red['700'],

  '--btn-info-content': colors.stone[50],
  '--btn-success-content': colors.stone[50],
  '--btn-warning-content': colors.stone[50],
  '--btn-error-content': colors.stone[50],

  '--theme-gradient': `repeating-linear-gradient(
    90deg,
    ${colors.red[600]} 0,
    ${colors.orange[600]} 11%,
    ${colors.yellow[600]} 22%,
    ${colors.lime[600]} 33%,
    ${colors.green[600]} 44%,
    ${colors.cyan[600]} 55%,
    ${colors.blue[600]} 66%,
    ${colors.indigo[600]} 77%,
    ${colors.violet[600]} 88%,
    ${colors.purple[600]} 100%
  )`,

  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '1.9rem',
  '--animation-btn': '0.25s',
  '--animation-input': '.4s',
  '--padding-card': '2rem',
  '--btn-text-case': 'uppercase',
  '--navbar-padding': '.5rem',
  '--border-btn': '1px',
  '--focus-ring': '2px',
  '--focus-ring-offset': '2px',
}
