import * as React from "react";
import {
  Select,
  InputLabel,
  FormControl,
  Input,
  Button
} from "@material-ui/core";

// Todo, add POST Method from Fetch component
// Add Form fields needed to submit form
// Post to form, add error handling
// reset on submit, display toast.
class CampaignForm extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <FormControl>
          <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
          <Select
            native
            value={10}
            onChange={() => {}}
            input={<Input name="age" id="filled-age-native-simple" />}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("buton clicked with new value.")}
          >
            Primary
          </Button>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default CampaignForm;
