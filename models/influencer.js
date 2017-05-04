module.exports = function(sequelize, DataTypes) {
  var InfluencerTable = sequelize.define("InfluencerTable", {
     name: {
      type: DataTypes.STRING,
      allowNull: false
     },
     followers: {
      type: DataTypes.INTEGER,
      allowNull: false
     }
  });

  return InfluencerTable;
};