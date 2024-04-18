import model from "./model.js";
export const createCourse = (course) => {
    delete course._id;
    model.create(course);
};
export const findAllCourses = () => model.find();
export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ id: courseId });
export const findCourseById = (courseId) => model.findOne({ id: courseId });