import axios from 'axios'

const baseurl = `${process.env.VUE_APP_API_URL}`
const url = `${baseurl}/api/v1`
class MemoService {
  static getMemobySlug (slug) {
    return axios.get(`${url}/memo/${slug}`)
  }
}

export default MemoService
