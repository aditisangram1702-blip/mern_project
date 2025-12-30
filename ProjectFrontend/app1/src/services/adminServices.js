import axios from "axios"

//add course
export async function AddNewCourse(course_name,description,fees,start_date,end_date,video_expire_days,token){
    const URL = "http://localhost:5000/course/add"
    const body = {course_name,description,fees,start_date,end_date,video_expire_days}
    const response = await axios.post(URL,body,{headers : {token}})
    return response.data
}

export async function getAllCourses(token){
    const URL = "http://localhost:5000/course/getCourses"
    const response = await axios.get(URL,{headers : {token}})
    return response.data
}

//delete course
export async function delCourse(cid,token) {
    const URL = `http://localhost:5000/course/delete/${cid}`
    const response = await axios.delete(URL,{headers :{token}})
    return response.data
}

//view details
 export async function showDetails(cid,token){
    const URL = `http://localhost:5000/course/showDetails/${cid}`
    const response = await axios.get(URL,{headers :{token}})
    return response.data
 }