import { Button } from "../ui/button";
import FormControls from "./form-controls";
import PropTypes from 'prop-types';

CommonForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
    formControls: PropTypes.array.isRequired,
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
};

function CommonForm({handleSubmit, buttonText, formControls = [], formData, setFormData}) {
    return (
        <form onSubmit={handleSubmit}>  
        {/* Render form controls here*/}
        <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
        <Button type="submit" className="mt-5 w-full ">{buttonText || 'Submit'}</Button>
        </form>
    );
} 

export default CommonForm;