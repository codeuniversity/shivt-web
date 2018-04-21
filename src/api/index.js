import axios from 'axios'
import config from '../config/index'

export default {
  request (method, uri, data = null, header = {}) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = config.serverURI + uri
    var req = axios({ method, url, data, headers: header })
    var response = req.data
    return req
  }
}
