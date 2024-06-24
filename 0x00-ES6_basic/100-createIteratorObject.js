// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [];

  for (const dept of departments) {
    employees.push(...dept);
  }

  const index = 0;
  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index + 1], done: false };
      }

      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
