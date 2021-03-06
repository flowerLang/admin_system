import axios from '../assets/js/axios'
import path from '../assets/js/path'

export function getCompanyRank (limit, page, time) {
  let data = {
    limit,
    page
  }
  const t = Object.prototype.toString.call(time)
  if (t === '[object Array]') {
    Object.assign(data, {
      startDate: `${time[0]}-01-01`,
      endDate: `${time[1]}-12-31`
    })
  } else if (t === '[object String]') {
    Object.assign(data, {
      orderBy: time
    })
  }
  return axios.post(path.threadInfo.rank, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCountryCount (limit, page, time) {
  let data = {
    limit,
    page
  }
  const t = Object.prototype.toString.call(time)
  if (t === '[object Array]') {
    Object.assign(data, {
      startDate: `${time[0]}-01-01`,
      endDate: `${time[1]}-12-31`
    })
  } else if (t === '[object String]') {
    Object.assign(data, {
      orderBy: time
    })
  }
  return axios.post(path.threadInfo.counts, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getAptRank (limit, page, time) {
  let data = {
    limit,
    page
  }
  const t = Object.prototype.toString.call(time)
  if (t === '[object Array]') {
    Object.assign(data, {
      startDate: `${time[0]}-01-01`,
      endDate: `${time[1]}-12-31`
    })
  } else if (t === '[object String]') {
    Object.assign(data, {
      orderBy: time
    })
  }
  return axios.post(path.threadInfo.apt, data).then((res) => {
    return Promise.resolve(res.data)
  })
}
