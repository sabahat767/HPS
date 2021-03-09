import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import MaterialTable from 'material-table'

import {
  TextField,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  FormControl,
 Button,
  FormControlLabel,
} from '@material-ui/core';
import GlobalHeader from '../ForwardBackHeader/GlobalHeader'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Register({next,back}) {
  const classes = useStyles();
  const { useState } = React;
  const [columns, setColumns] = useState([
    { title: 'Test Code', field: 'TestCode' },
    { title: 'Test Description', field: 'TestDescription', initialEditValue: 'initial edit value' },
    { title: 'Test Date', field: 'TestDate', type: 'date' },
    
  ]);

  const [data, setData] = useState([
    { TestCode: 'Mehmet', TestDescription: 'Baran', TestDate:'2021-03-09'},
   
  ]);
  const [Header, setHeader] = useState({
    TokenNo: "",
    ServiceDate: new Date(),
    MRNo: 'recID',
    Ward: "",
    Amount: "",
    TotalAmount: "",
    PatientContribution: "",
    Remarks: "",
    CreatedUser: "Admin",
    ModifyUser: "Admin"
});
const handleSubmitt=(e)=>{
  e.preventDefault();
  // setHeader(e.target.value)
  console.log(Header)
  next();
}
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: '80%', justifyContent:'center' }}>
       {/* <GlobalHeader forward={next} back={back} title="Service"/> */}
       <GlobalHeader  back={back} title="Service"/>
       <Form
        onSubmit={handleSubmitt}
        initialValues={{ employed: true, stooge: 'larry' }}
        // validate={validate}
        
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form  noValidate >
      <Grid container>
        <Grid sm={12}>
          <Grid container spacing={4}>
            <Grid item lg={7} sm={12}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField value={Header.MRNo} id="MRNo" fullWidth variant="outlined"
                    type="text" disabled={true}
                    label="M.R. #"/>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth variant="outlined"
                    onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
                    label="Token No"/>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField id="ServiceDate" label="Service Date" type="date" variant="outlined"
                    value={Header.ServiceDate} fullWidth
                    onChange={(e) => setHeader({ ...Header, ServiceDate: e.target.value })}
                    InputLabelProps={{
                      shrink: true,
                    }}/>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <FormControl fullWidth>
                    <InputLabel  id="demo-simple-select-helper-label">Gender</InputLabel>
                    <Select 
                      labelId="demo-simple-select-helper-label"
                      id="Gender"
                      value={Header.Gender}
                      onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <FormControl fullWidth>
                    <InputLabel  id="demo-simple-select-helper-label">Ward</InputLabel>
                    <Select 
                      labelId="demo-simple-select-helper-label"
                      id="Ward"
                      value={Header.Ward}
                      onChange={(e) => setHeader({ ...Header, Ward: e.target.value })}
                    >
                      <MenuItem value="Ward #1">Ward #1</MenuItem>
                      <MenuItem value=" Ward #2">Ward #2</MenuItem>
                      <MenuItem value="Ward #3">Ward #3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField value={Header.Amount} id="Amount" type="number" fullWidth
                    onChange={(e) => setHeader({ ...Header, Amount: e.target.value })}
                    label="Amount"/>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField value={Header.TotalAmount} id="TotalAmount" type="number" fullWidth
                    onChange={(e) => setHeader({ ...Header, TotalAmount: e.target.value })}
                    label="Total Amount"/>
                </Grid>
                <Grid item md={4} sm={12} lg={3}>
                  <TextField value={Header.PatientContribution} id="PatientContribution" type="text" fullWidth
                    onChange={(e) => setHeader({ ...Header, PatientContribution: e.target.value })}
                    label="Patient Contribution"/>
                </Grid>
                <Grid item md={8} sm={12} lg={6}>
                  <TextField value={Header.Remarks} id="Remarks" type="text" fullWidth
                    onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                    label="Remarks"/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={1}/>
            <Grid item lg={4} sm={12}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} lg={6}>
                  <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth
                    // onChange={(e) => setHeader({ ...Header, MaleKids: e.target.value })}
                    label="Token No" disabled={true}/>
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
                </Grid> 
              </Grid>
            </Grid> 
          </Grid>
          <Grid item lg={6} sm={6}>
          <MaterialTable
      title="Service Info"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
          </Grid>
        </Grid>
      </Grid>
        </form>
        )}/>
    </div>
  );
}