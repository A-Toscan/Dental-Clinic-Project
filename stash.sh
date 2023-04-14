###########################################################

# crear base de datos
sequelize db:create

# crear modelo Roles
sequelize model:generate --name roles --attributes 'role_name:string'

# crear modelo Usuario
sequelize model:generate --name Usuario --attributes 'nombre:string,apellidos:string,id_roles:integer,email:string,telefono:integer,password:string'

# crear modelo Doctors
sequelize model:generate --name Doctors --attributes 'id_users:integer'

# crear modelo Patience
sequelize model:generate --name Patients --attributes 'id_users:integer'

# crear modelo Paciente
sequelize model:generate --name Alumno --attributes 'nombre:string,apellidos:string,edad:integer,fecha_nacimiento:date,activo:enum:{si,no},id_nacionalidad:integer,id_direccion:integer'

# crear modelo Curso
sequelize model:generate --name Appointments --attributes 'id_patients:integer,id_doctors:integer,time:time,date:date'

###########################################################

# ejecutar migracion
sequelize db:migrate 
sequelize db:migrate  --to 03-create-alumno.js

# revertir la migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all
sequelize db:migrate:undo:all --to 03-create-alumno.js

# crear seed
sequelize seed:generate --name seed-nacionalidad
sequelize seed:generate --name seed-direccion
sequelize seed:generate --name seed-alumno

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 02-seed-alumno.js

# revertir seed
sequelize db:seed:undo
sequelize db:seed:undo:all
sequelize db:seed:undo --seed 03-seed-alumno.js