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
//import Checkbox from '@material-ui/core/Checkbox';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GlobalHeader from '../ForwardBackHeader/GlobalHeader'

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


export default function Register({next,back}) {
console.log(next,".......");
const [Header, setHeader] = React.useState({
  MRNo: "",
  TokenNo: "",
  RegistrationDate: new Date(),
  Name: "",
  FatherOrHusband: "",
  DOB: new Date(),
  Age: "",
  Gender: "",
  Religion: "",
  District: "",
  City: "",
  Area: "",
  HousNo: "",
  Address: "",
  CNIC: "",
  Phone: "",
  OffPhone: "",
  Mobile: "",
  RefBy: "",
  Remarks: "",
  IsRejected: false,
  IsZakat: false,
  IsPAFEmp: false,
  MonthlyConsLimit: 0,
  ThumbImage: "",
  NOY: "",
  EmpID: "",
  IsStaff: false,
  CreateUser: "",
  ModifyUser: "",
  CreateDate: "",
  ModifyDate: ""
});
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
  const handleSubmitt=()=>{
    next(Header);
  }
  return (
    <div style={{ padding: 16, margin: 'auto', width: '100%' }}>
      <CssBaseline />
   <GlobalHeader forward={next} back={back} title="Registeration"/>
      
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
                    name="MRNo"
                    value={Header.MRNo}
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
                    value={Header.TokenNo}
                    onChange={e=>setHeader({...Header,TokenNo:e.target.value})}
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
          value={Header.RegistrationDate}
          variant="outlined"
           onChange={(e) => setHeader({ ...Header, RegistrationDate: e.target.value })}
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
                     name="Name"
                     variant="outlined"
                     component={TextField}
                     type="text"
                     value={Header.Name}
                     onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
                     label="Name"
                  />
                </Grid>
                <Grid item xs={3}>
                
                  <Field
                    fullWidth
                    required
                    name="FatherOrHusband"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.FatherOrHusband}
                    onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
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
          value={Header.DOB}
          // onChange={handleDateChange}
          onChange={(e) => setHeader({ ...Header, DOB: e.target.value })}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                  </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid item xs={3}>
                  <Field
                    name="Age"
                    fullWidth
                    required
                    component={TextField}
                    variant="outlined"
                    type="text"
                    value={Header.Age}
                    onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
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
                    id="Gender"
                    value={Header.Gender}
                    onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
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
                    id="Religion"
              value={Header.Religion}
                    onClick={(e)=>handlereligion(e.target.value)}
                    onChange={ (e) => setHeader({ ...Header, Religion: e.target.value }) }
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
                            onChange={e=>setHeader({...Header,IsZakat:!Header.IsZakat})}
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
                    value={Header.CNIC}
                    onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
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
                    value={Header.HousNo} id="HousNo" 
                    onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                    label="House#"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Address"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.Address}
                    onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                    label="Address"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Area"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.Area}
                    onChange={(e) => setHeader({ ...Header, Area: e.target.value })}
                    label="Area"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="District"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.District} id="District" 
                    onChange={(e) => setHeader({ ...Header, District: e.target.value })}
                    label="District"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="City"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.City} id="City" 
                    onChange={(e) => setHeader({ ...Header, City: e.target.value })}
                    label="City"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Phone"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.Phone} id="Phone" 
                    onChange={(e) => setHeader({ ...Header, Phone: e.target.value })}
                    label="Phone"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="OffPhone"
                    variant="outlined"
                    component={TextField}
                    type="number"
                    value={Header.OffPhone} id="OffPhone" 
                    onChange={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                    label="OffPhone"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Mobile"
                    variant="outlined"
                    component={TextField}
                    value={Header.Mobile} id="Mobile" type="number" 
                onChange={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                   
                    label="Mobile"
                  />
                </Grid> <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="MonthlyConsLimit:"
                    variant="outlined"
                    component={TextField}
                    type="number"
                    value={Header.MonthlyConsLimit} id="MonthlyConsLimit" 
                    onChange={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                    label="MonthlyConsLimit:"
                  />
                </Grid>
                </Grid>
                <Typography align="center" gutterBottom>
      Reffer Info
      </Typography>
      <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="RefBy"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.RefBy} id="RefBy" 
                    onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                    label="Refer By"
                  />
                </Grid><Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="EmpID"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.EmpID} id="EmpID" 
                    onChange={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                    label="Employee ID"
                  />
                </Grid><Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="NOY"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.NOY} id="NOY" 
                    onChange={(e) => setHeader({ ...Header, NOY: e.target.value })}
                    label="NOY"
                  />
                </Grid><Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name=" Remarks"
                    variant="outlined"
                    component={TextField}
                    type="text"
                    value={Header.Remarks} id="Remarks" 
                    onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                    label=" Remarks"
                  />
                </Grid>
        </Grid>
        <Typography align="center" gutterBottom>
     Staff
      </Typography> 
      <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={3}>
    
                {/* <Checkbox
          checked={Header.IsPAFEmp}
          onChange={e=>setHeader({...Header,IsPAFEmp:!Header.IsPAFEmp})}
          value="Is PAF Emp"
        /> */}
        {/* <FormControlLabel color="primary"
                  // control={
                  // <Checkbox checked={Header.IsPAFEmp} name="Is Maried" fullWidth
                  // onChange={e => setHeader({ ...Header, IsPAFEmp: !Header.IsPAFEmp })} />}
                  label="IsPAFEmp"
                /> */}
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