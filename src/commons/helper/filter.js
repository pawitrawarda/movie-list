import Accounting from 'accounting'
import Moment from 'moment'
import 'moment/locale/id'

export function textCapitalize (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
export function currency (value, symbol = '') {
  if (!value) return ' - '
  return Accounting.formatMoney(value, symbol, 0, '.', ',')
}

export function currencyWithNa (value, symbol = '') {
  if (!value || value === 0) return ' N/A '
  return Accounting.formatMoney(value, symbol, 0, '.', ',')
}

export function currencyWithK (value, symbol = '') {
  if (!value) return ' - '
  return Accounting.formatMoney((value / 1000), symbol, 0, '.', ',')
}

export function date (date, format = 'DD MMMM YYYY hh:mm', suffix = '', dataFormat = null) {
  if (!date) return ' - '
  if (dataFormat) {
    return Moment(date, dataFormat).format(format, 'id') + suffix
  } else {
    return Moment(date).format(format, 'id') + suffix
  }
}

export function ago (date) {
  if (!date) return ' - '
  return Moment(date).locale('id').fromNow()
}

export function substring (text, length = '50') {
  if (text) {
    const ellipsis = (text.length >= length) ? '...' : ''
    return text.substring(0, length) + ' ' + ellipsis
  }

  return '-'
}

export function convertKB (value) {
  let result = 0
  if (value !== '') {
    result = value / 1024
  }

  return parseFloat(Math.round(result * 100) / 100).toFixed(2) + ' KB'
}

export function unit (val, suffix = '', prefix = '') {
  if (!val) {
    return ' - '
  }

  return prefix + val + suffix
}

export function reverseLoop (value) {
  return value.slice().reverse()
}

export function unMaskVMask (value) {
  return value.toString().replace('.', '')
}
