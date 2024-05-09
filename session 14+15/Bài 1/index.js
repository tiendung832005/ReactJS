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
// class hướng dẫn
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(id, title) {
        return new Course(1, title, this);
    }
    createLesson(id, title) {
        return new Lesson(10, title);
    }
    createAssignment(id, title) {
        return new Assignment(3, title);
    }
    createAssessment(id, title) {
        return new Assessment(1, title);
    }
}
// tạo class khóa học
class Course {
    constructor(id, title, instructor) {
        this.id = id;
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
// tạo class tiết học
class Lesson {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.assignments = [];
    }
}
// tạo class bài tập
class Assignment {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
// tạo class bài ktra
class Assessment {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
const instructor = new Instructor(1, "Dũng");
const course = instructor.createCourse(1, "ReactJS");
const lesson1 = instructor.createLesson(2, "Abstract Class");
const lesson2 = instructor.createLesson(2, "Interface");
const assignment = instructor.createAssignment(10, "Bài tập session 1");
const assessment = instructor.createAssessment(1, "Hackathon 1");
course.lessons.push(lesson1, lesson2);
lesson1.assignments.push(assignment);
course.assessments.push(assessment);
const student5 = new Student5(101, "DŨng");
student5.enroll(course);
