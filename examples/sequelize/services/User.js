module.exports = function (Model) {
  return {
    async getUserByEmail (email, options) {
      try {
        const instance = await Model.findOne({
          where: { email },
          ...options
        })
        return Promise.resolve(instance)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}