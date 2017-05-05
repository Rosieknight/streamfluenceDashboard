//Exports the brand model to the pages that need the tables.
module.exports = function(sequelize, DataTypes){
	//For the Brands table.
	var Brand = sequelize.define("brand",{
		brand_name: {
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		//Is this brand active? Default is true.
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		email: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		},
		company_logo: {
			type: DataTypes.STRING
		},
			{
				classMethods: {
					associate: function(models){
						Brand.belongsToMany(models.User,{
							as: "Employer", 
							through: "brand_influencers",
							foreignKey: "influencerId"
						});
						Brand.hasMany(models.Employee,{
							onDelete: "cascade"
						});
					}
				}
			} 
		}
	);
	//Again, need to link this table and the users table to show which users
	//"belong" to which brands.
	return Brand;
};