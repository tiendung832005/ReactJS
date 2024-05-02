class Student5 {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} đã đăng ký học`);
    }
}

class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string): Course {
        return new Course(title, this);
    }

    createLesson(title: string): Lesson {
        return new Lesson(title);
    }

    createAssignment(title: string): Assignment {
        return new Assignment(title);
    }

    createAssessment(title: string): Assessment {
        return new Assessment(title);
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];

    constructor(title: string, instructor: Instructor, ) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}

class Lesson {
    title: string;
    assignments: Assignment[];

    constructor(title: string,) {
        this.title = title;
        this.assignments = [];
    }
}

class Assignment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class Assessment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const instructor = new Instructor(1, "Dũng");
const course = instructor.createCourse("ReactJS");
const lesson1 = instructor.createLesson("Abstract Class");
const lesson2 = instructor.createLesson("Interface");
const assignment = instructor.createAssignment("Bài tập session 1");
const assessment = instructor.createAssessment("Hackathon 1" );

course.lessons.push(lesson1, lesson2);
lesson1.assignments.push(assignment);
course.assessments.push(assessment);

const student5 = new Student5 (101, "Alice");
student5.enroll(course);
