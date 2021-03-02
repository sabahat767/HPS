import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  
} from '@material-ui/core';

// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  // if (!values.TokenNo && values.TokenNo!="[0-9]*") {
    if (!values.TokenNo){
    errors.TokenNo = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};


export default function Register() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-01T21:11:24'));
  const [disableHelpType,setdisableHelpType]=React.useState(false)
 
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handlereligion=(val)=>{
    if(val!="Islam"){
      setdisableHelpType(true)
      

    }
    else{
      setdisableHelpType(false)
    }
console.log(disableHelpType)
//console.log(e.target.value)
  }
  return (
    <div style={{ padding: 16, margin: 'auto', width: '100%' }}>
      <CssBaseline />
      <Typography align="center" gutterBottom>
        🏁 Registeration
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate >
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    disabled
                    variant="outlined"
                    name="MRno"
                    component={TextField}
                    type="text"
                    label="MR Number"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="TokenNo"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    pattern="[0-9]*"
                    label="Token No"
                  />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={3}>
                  <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Registration Date "
          value={selectedDate}
          variant="outlined"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                  </Grid>
                  {/* <Grid item xs={6}>
                    <Field
                      name="alarm"
                      component={TimePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Alarm"
                    />
                  </Grid> */}
                </MuiPickersUtilsProvider>
                <Grid item xs={3}>
                  <Field
                     fullWidth
                     required
                     name="name"
                     variant="outlined"
                     component={TextField}
                     type="text"
                    
                     label="Name"
                  />
                </Grid>
                <Grid item xs={3}>
                
                  <Field
                    fullWidth
                    required
                    name="fatherorhusband"
                    variant="outlined"
                    component={TextField}
                    type="text"
                   
                    label="Father/Husband Name"
                  />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={3}>
                  <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date of Birth"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                  </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid item xs={3}>
                  <Field
                    name="age"
                    fullWidth
                    required
                    component={TextField}
                    variant="outlined"
                    type="text"
                    label="Age"
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Male"
                        
                        control={
                          <Field
                            name="gender"
                            component={Radio}
                            type="radio"
                            value="male"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Female"
                        control={
                          <Field
                            name="gender"
                            component={Radio}
                            type="radio"
                            value="female"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    name="gender"
                    component={Select}
                    label="Gender"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    name="religion"
                    id="religion"
                    component={Select}
                    value={disableHelpType}
                    label="Religion"
                    formControlProps={{ fullWidth: true }}
                    onClick={(e)=>handlereligion(e.target.value)}
                  >
                    <MenuItem value="Islam" >Islam</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Field>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Help Type</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Zakat"
                        control={
                          <Field
                            name="helptype"
                            component={Radio}
                            type="radio"
                            value="Zakat"
                            disabled={disableHelpType}
                          />
                        }
                      />
                      <FormControlLabel
                        label="Welfare"
                        control={
                          <Field
                            name="helptype"
                            component={Radio}
                            type="radio"
                            value="Welfare"
                            

                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="cnic"
                    variant="outlined"
                    component={TextField}
                    type="text"
                   
                    label="CNIC"
                  />
                </Grid>
                </Grid>  
               
       <Typography align="center" gutterBottom>
        Contact
      </Typography>
      <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="house#"
                    variant="outlined"
                    component={TextField}
                    type="text"
                   
                    label="House#"
                  />
                </Grid>
                </Grid>
                
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    label="Employed"
                    control={
                      <Field
                        name="employed"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Best Stooge</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Larry"
                        control={
                          <Field
                            name="stooge"
                            component={Radio}
                            type="radio"
                            value="larry"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Moe"
                        control={
                          <Field
                            name="stooge"
                            component={Radio}
                            type="radio"
                            value="moe"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Curly"
                        control={
                          <Field
                            name="stooge"
                            component={Radio}
                            type="radio"
                            value="curly"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sauces</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Ketchup"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="ketchup"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Mustard"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="mustard"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Salsa"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="salsa"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Guacamole 🥑"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="guacamole"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notes"
                    component={TextField}
                    multiline
                    label="Notes"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Budapest">
                      A city with a very long Name
                    </MenuItem>
                  </Field>
                </Grid>
              
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid> */}
              
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}

