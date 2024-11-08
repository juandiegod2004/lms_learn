import { courseLandingPageFormControls } from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
    const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingPageFormControls);

    return (
        <InstructorContext.Provider value={{ courseLandingFormData, setCourseLandingFormData }}>
            {children}
        </InstructorContext.Provider>
    );
}
