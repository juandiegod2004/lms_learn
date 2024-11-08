import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";


function CourseCurriculum() {

    const {courseCurriculumFormData,  setCourseCurriculumFormData} = useContext(InstructorContext);
       

    return( <Card>
        <CardHeader>
            <CardTitle>Create Course Curriculum</CardTitle>
        </CardHeader>
    </Card>);
        
     
}

export default CourseCurriculum;