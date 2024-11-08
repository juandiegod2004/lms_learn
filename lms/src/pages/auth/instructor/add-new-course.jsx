import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


function AddNewCoursePage() {
    return <div className="container mx-auto p-4">
        <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold mb-5 ">Create a new course</h1>
            <Button className="text-sm tracking-wider font-bold px-8">SUBMIT</Button>
        </div>
        <Card>
            <CardContent>
                <div className="container mx-auto p-4">
                    <Tabs defaultValue="curriculum" className="space-y-4">
                        <TabsList>
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        <TabsTrigger value="curriculum">Course Landing Page</TabsTrigger>
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </CardContent>
        </Card>
    </div>
}

export default AddNewCoursePage;