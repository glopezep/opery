module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })
}