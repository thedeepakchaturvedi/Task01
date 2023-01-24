const employeeArr = [
  {
    id: "1",
    name: "Vibhuti Bajaj",
    profileImage: "assets/images/Vibhuti.jpg",
    introduction:
      "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
    profileLink: "https://vibhi24.github.io/Personal-Website/",
  },
  {
    id: "2",
    name: "Varun Athreya",
    profileImage: "assets/images/varun.jpg",
    introduction:
      "I am a passionate coder who loves capturing memories and exploring new places.",
    profileLink: "https://varunsathreya.github.io/contentstack-training/",
  },
  {
    id: "3",
    name: "Priya NB",
    profileImage: "assets/images/Priya.jpeg",
    introduction:
      "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
    profileLink: "https://priya-nb.github.io/personalweb/index.html",
  },
  {
    id: "4",
    name: "Rangaswamy Vikas",
    profileImage: "assets/images/vikas.jpg",
    introduction:
      "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
    profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
  },
  {
    id: "5",
    name: "Deepak Chaturvedi",
    profileImage: "assets/images/deepak.png",
    introduction:
      "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
    profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
  },
  {
    id: "6",
    name: "Rakshitha S",
    profileImage: "assets/images/Rakshitha.jpg",
    introduction:
      "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
    profileLink: "#",
  },
  {
    id: "7",
    name: "Kashmeera Raychoty",
    profileImage: "assets/images/Kashmeera.jpg",
    introduction: "I am a creative person and like to explore new things.",
    profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
  },
  {
    id: "8",
    name: "Harshitha D",
    profileImage: "assets/images/Harshitha D.png",
    introduction: "I'm a partical person and like to travel and listen K-pop.",
    profileLink: "https://harshithad0703.github.io/individual_website/",
  },
  {
    id: "9",
    name: "Sanika Pareek",
    profileImage: "assets/images/sanika.jpeg",
    introduction:
      "I'm curious to learn and explore new things and like to paint.",
    profileLink:
      "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
  },
  {
    id: "10",
    name: "Raj Pandey",
    profileImage: "assets/images/Raj.png",
    introduction: "Computer Engineer, Painter, Poet, Reader",
    profileLink: "https://cs-raj.github.io/pw-2/",
  },
  {
    id: "11",
    name: "Viraj Yadav",
    profileImage: "assets/images/Viraj.jpg",
    introduction:
      "I'm a sincere lunatic curious about technology and like playing cricket.",
    profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
  },
  {
    id: "12",
    name: "Faraaz Biyabani",
    profileImage: "assets/images/faraaz.webp",
    introduction:
      "I am always curious about technology and I love writing code to create purposeful things.",
    profileLink: "https://faraazb.github.io/cs-personal-website/",
  },
  {
    id: "13",
    name: "Vaibhav Patil",
    profileImage: "assets/images/Vaibhav.png",
    introduction:
      "I'm a true technophile. I love to talk about Physics and Spirituality.",
    profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
  },
  {
    id: "14",
    name: "Soumik Paul",
    profileImage: "assets/images/Soumik.png",
    introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
    profileLink: "https://soumik43.github.io/Portfolio/",
  },
];

const Employee = function (id, name, profileImage, introduction, profileLink) {
  this.id = id;
  this.name = name;
  this.profileImage = profileImage;
  this.introduction = introduction;
  this.profileLink = profileLink;

  return this;
};

const employeeData = employeeArr.map((el) => {
  return new Employee(
    el.id,
    el.name,
    el.profileImage,
    el.introduction,
    el.profileLink
  );
});


// employeeData now contains our source data

// task - 01

function findEmployeeById(id) {
  let ans = null;
  if (id <= 0) {
    return "ID must be > 0";
  }

  employeeData.forEach((el) => {
    if (el.id == id) {
      ans = el;
    }
  });

  if (ans !== null) return ans;

  return "Sorry! No employee with " + id + " found";
}

const ans1 = findEmployeeById(5);
console.log(ans1);

// task - 02

function findEmployee(obj) {
  let ans = null;
  const keys = Object.keys(obj);

  // for now only one key allowed
  if (keys.length > 1) {
    return "Please enter only one key";
  }

  keys.forEach((key) => {
    employeeData.forEach((el) => {
      if (el[key] === obj[key]) {
        ans = el;
      }
    });
  });

  if (ans !== null) return ans;

  return "Sorry no employee having input properties found !";
}

const ans2 = findEmployee({ name: "Deepak Chaturvedi" });
console.log(ans2);

// task - 03

function updateEmployee(id, obj) {
  const emp = findEmployeeById(id);

  const keys = Object.keys(obj);

  keys.forEach((key) => {
    //if object has multiple properties to update
    if (key == "id") {
      console.log("Cannot update id as it is primary key");
    } else {
      emp[key] = obj[key];
      console.log("UPDATED");
    }
  });
}

updateEmployee(7, { name: "1", company: "xyz" });
console.log(employeeData); //updated employeeData

// task - 04

function deleteEmployee(id) {
  let index = -1;

  employeeData.forEach((ele, i) => {
    if (ele.id == id) {
      index = i;
    }
  });

  if (index !== -1) {
    console.log("DELETED");
    employeeData.splice(index, 1);
  }
}

deleteEmployee(3);
deleteEmployee(9);
console.log(employeeData);
