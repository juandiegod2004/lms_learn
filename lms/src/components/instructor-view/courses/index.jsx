import {
    Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
  
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InstructorCourses() {

  const navigate = useNavigate()
    return (

        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
                <Button onClick={()=> navigate("/instructor/create-new-course")} className="p-4">Create New Course</Button>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Course</TableHead>
      <TableHead>Students</TableHead>
      <TableHead>Revenue</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Technology in Analisys and Development of Software Course</TableCell>
      <TableCell>100</TableCell>
      <TableCell>$2.000 USD</TableCell>
      <TableCell className="text-right">
        <Button variant ="ghost" size ="sm" className="mr-1">
            <Edit className="h-6 w-6"/>
        </Button>
        <Button variant ="ghost" size ="sm" >
            <Delete className="h-6 w-6"/>
        </Button>
        
      </TableCell>
    </TableRow>
  </TableBody>
</Table>


                </div>
            </CardContent>
        </Card>
    );
}

export default InstructorCourses;
