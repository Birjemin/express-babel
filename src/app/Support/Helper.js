class Helper {

    renderJson(data, code = 0, message = '') {
      return {
        code: code || 0,
        message: message || '',
        data: data
      }
    }

    time() {
      return Date.parse(new Date()) / 1000
    }
}

export default Helper