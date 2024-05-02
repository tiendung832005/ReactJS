"use strict";
class Student5 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} đã đăng ký học`);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
const instructor = new Instructor(1, "Dũng");
const course = instructor.createCourse("ReactJS");
const lesson1 = instructor.createLesson("Abstract Class");
const lesson2 = instructor.createLesson("Interface");
const assignment = instructor.createAssignment("Bài tập session 1");
const assessment = instructor.createAssessment("Hackathon 1");
course.lessons.push(lesson1, lesson2);
lesson1.assignments.push(assignment);
course.assessments.push(assessment);
const student5 = new Student5(101, "Alice");
student5.enroll(course);
