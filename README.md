# Dental Clinic project

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#prerequitis">Prerequsitis</a></li>
    <li><a href="#instalation">Instalation</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#webgraphy">Webgraphy</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About

In order to do so, the customer must be able to register in the application, login & logout and access his customer area, all visually from within the application.
login & logout and access their customer area, all visually from the browser.
browser. In their customer area they should be able to see a list of future appointments, create, modify and cancel them.
appointments, create, modify and cancel them.
There will also be a user area with your personal data, which only you will be able to see.
only he will be able to see himself.
In addition, dentists must be able to register as professionals,
login and logout and see all appointments and registered patients.

## Prerequitis

Taking into account the requirements, we concluded that this would be
the minimum number of suitable endpoints:
User registration.
User login.
User logout.
User profile.
Modification of profile data.
Appointment creation.
Modification of appointments.
Cancellation of appointments.

## Diagrama BD

!['imagen-db'](./_img/db.png)

## Instalation 

Instalation on local

1. Start the repository
2. `$ npm install`
3. `$ npm nodemon `
4. `$ Sequelize: db:migration`
5. ` $ Sequelize: de:seed`
6. `$ npm run dev`
7. `$ npm run db-reset`

## Endpoints

<details>
<summary>Endpoints</summary>

User Register
!['imagen-db'](./_img/user_register.JPG)

Login
!['imagen-db'](./_img/login.JPG)

User Profile
!['imagen-db'](./_img/user_profile.JPG)

Modify User
!['imagen-db'](./_img/modify_user.JPG)

Appointment creation
!['imagen-db'](./_img/create_appoinment.JPG)

Appointment modify
!['imagen-db'](./_img/modify_appointment.JPG)

Appointment delete
!['imagen-db'](./_img/delete_appointment.JPG)

Doctor register
!['imagen-db'](./_img/doctor_register.JPG)

See all Doctors
!['imagen-db'](./_img/see_all_doctors.JPG)

See all Patients
!['imagen-db'](./_img/see_all_patients.JPG)

See all appointment patients
!['imagen-db'](./_img/see_appointment_patients.JPG)

See all appointment doctors
!['imagen-db'](./_img/see_appointment_doctors.JPG)

</details>

## Stack

Technology used:

<div align="center">
<a href="https://sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>

 </div>

## License

This project is under licence of "Antonio Toscano".

## Webgraphy:

To achieve my goal I have collected information from:

link to repositories
link to documentation of external libraries

## Development:

```js
 const developer = "Backend";

 console.log("Desarrollado por: " Antonio Toscano, Luis Guerrero Roquett);
```

## Contact

<a href="https://github.com/A-Toscan" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a>
<a href = "mailto:eltoscan@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/antonio-toscano-hd/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>
