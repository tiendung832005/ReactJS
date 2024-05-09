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
// class hướng dẫn
class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    createCourse(id: number, title: string): Course {
        return new Course(1,title, this);
    }

    createLesson(id: number, title: string): Lesson {
        return new Lesson(10, title);
    }

    createAssignment(id: number,title: string): Assignment {
        return new Assignment(3,title);
    }

    createAssessment(id: number, title: string): Assessment {
        return new Assessment(1,title);
    }
}
// tạo class khóa học
class Course {
    id:number;
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];

    constructor(id:number,title: string, instructor: Instructor, ) {
        this.id=id;
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
// tạo class tiết học
class Lesson {
    id: number
    title: string;
    assignments: Assignment[];

    constructor(id: number, title: string,) {
        this.id=id;
        this.title = title;
        this.assignments = [];
    }
}
// tạo class bài tập
class Assignment {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id=id
        this.title = title;

    }
}
// tạo class bài ktra
class Assessment {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id=id;
        this.title = title;
    }
}

const instructor = new Instructor(1, "Dũng");
const course = instructor.createCourse(1,"ReactJS");
const lesson1 = instructor.createLesson(2,"Abstract Class");
const lesson2 = instructor.createLesson(2,"Interface");
const assignment = instructor.createAssignment(10,"Bài tập session 1");
const assessment = instructor.createAssessment(1,"Hackathon 1" );

course.lessons.push(lesson1, lesson2);
lesson1.assignments.push(assignment);
course.assessments.push(assessment);

const student5 = new Student5 (101, "DŨng");
student5.enroll(course);
