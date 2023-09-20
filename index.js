class User {
  constructor(user) {
      this.user = user;
  }

  render() {
      const userContainer = document.getElementById('user-container');
      const userBlock = document.createElement('div');
      userBlock.classList.add('user-block');

      userBlock.innerHTML = `
          <img src="${this.user.img}" alt="User Image">
          <p>Name: ${this.user.name}</p>
          <p>Age: ${this.user.age}</p>
          <p>Role: ${this.user.role}</p>
      `;

      if (this.user.hasOwnProperty('courses')) {
          const coursesList = document.createElement('ul');
          coursesList.classList.add('courses-list');

          coursesList.innerHTML = this.renderCourses();

          userBlock.appendChild(coursesList);
      }

      userContainer.appendChild(userBlock);
  }

  renderCourses() {
  }
}

class Student extends User {
  renderCourses() {
      const courses = this.user.courses;
      return courses.map(course => `<li>${course}</li>`).join('');
  }
}

class Lector extends User {
  renderCourses() {
      const courses = this.user.courses;
      return courses.join(', ');
  }
}

class Admin extends User {
  renderCourses() {
      const courses = this.user.courses;
      return courses.map(course => `<li>${course}</li>`).join('');
  }
}

const users = [
  {
      img: 'user1.jpg',
      name: 'John Doe',
      age: 25,
      role: 'Student',
      courses: ['Math', 'History'],
  },
  {
      img: 'user2.jpg',
      name: 'Jane Smith',
      age: 30,
      role: 'Lector',
      courses: ['Physics', 'Chemistry'],
  },
  {
      img: 'user3.jpg',
      name: 'Admin Adminson',
      age: 35,
      role: 'Admin',
      courses: ['English', 'Computer Science'],
  },
];

users.forEach(user => {
  let userInstance;

  switch (user.role) {
      case 'Student':
          userInstance = new Student(user);
          break;
      case 'Lector':
          userInstance = new Lector(user);
          break;
      case 'Admin':
          userInstance = new Admin(user);
          break;
      default:
          userInstance = new User(user);
  }

  userInstance.render();
});
