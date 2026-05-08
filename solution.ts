// Problem - 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => {
    return number % 2 === 0;
  });
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem - 2
const reverseString = (word: string): string => {
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
};

reverseString("typescript");

// Problem - 3
type StringOrNumber = string | number;

const checkType = (check: StringOrNumber): string => {
  if (typeof check === "string") {
    return "String";
  } else {
    return "Number";
  }
};

checkType("Hello");
checkType(42);

// Problem - 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Problem - 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
toggleReadStatus(myBook);

// Problem - 6
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem - 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((value) => arr2.includes(value));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
