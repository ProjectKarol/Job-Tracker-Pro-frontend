import { useForm } from "react-hook-form";
import { FormInputText } from "../components/form-components/FormInputText";
import { Button, Paper, Typography } from "@mui/material";
import { FormInputSwitch } from "../components/form-components/FormInputSwitch";

interface IFormInput {
  url: string,
  description: string,
  experience: string,
  company: string,
  doIApplied: boolean,
  JobAdditionalInfo: string,
}

const defaultValues = {
  url: "",
  description: "",
  experience: "",
  company: "",
  doIApplied: false,
  JobAdditionalInfo: "",
};
export const AddJobPage = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Add job</Typography>

      <FormInputText name="url" control={control} label="Job Url" />
      <FormInputText name="description" control={control} label="Description" />
      <FormInputText name="experience" control={control} label="Experience" />
      <FormInputText name="company" control={control} label="Company" />
      <FormInputSwitch name="doIApplied" control={control} label="Do I applied" />
      <FormInputText name="JobAdditionalInfo" control={control} label="Additional info" />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </Paper>
  );
};




// AddJobPage