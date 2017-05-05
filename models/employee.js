module.exports = function(sequelize, DataTypes){
	var Employee = sequelize.define("employee"{
		employee_first_name: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		},
		employee_last_name: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false
			}
		},
		password: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false,
				len: [5]
			}
		},
			{
				classMethods: {
					associate: function(models){
						Employee.belongsTo(models.Brand, {
            				foreignKey: {
              				allowNull: false
           					}
           				}
          			)};
				}
			}
		}
	);
	return Employee;
};