export const getEmployees = () => {
  return new Promise((resolve, reject) => {
    const emps = [];

    for(let i = 1; i< 11; i++) {
      emps.push({
        id: i,
        name: 'Employee '+ i,
        salary: Math.ceil(Math.random() * 100000),
      })
    }

    setTimeout(() => {
      resolve(emps);
    }, 200);

  });
};

