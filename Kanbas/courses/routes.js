import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    });
    app.post("/api/courses", async (req, res) => {
        console.log("HELLLLLOOO4")
        await dao.createCourse(req.body);
        console.log("HELLLLLOOO2")
        console.log(req.body["id"])
        const course = await dao.findCourseById(req.body["id"])
        console.log("HELLLLLOOO")
        console.log(course)
        res.json(course);
    });
    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    });
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.json(status);
    });
    app.get("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = await dao.findCourseById(id);
        res.json(course);
    });
}