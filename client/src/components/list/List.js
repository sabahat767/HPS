import React from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { Dialog } from '@material-ui/core';
import FormDialog from '../Dialog';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import HorizontalLinearStepper from '../Stepper';
const List = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    const [columns, setColumns] = React.useState([
        { title: 'Name', field: 'name' },
        { title: 'Sur Name', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        { title: 'Birth City', field: 'birthCity', lookup: { 34: 'Karachi', 63: 'Lahore' } }
    ]);
    const [data, setData] = React.useState([
        { name: 'Sabahat', surname: 'Sabir Khan', birthYear: 1999, birthCity: 34 },
        { name: 'Hira', surname: 'Sufyan', birthYear: 1996, birthCity: 63 }
    ])
    return (
        <div style={{ maxWidth: '90%', margin : 'auto' }}>
            {/* <FormDialog open={open} onClose={handleClose}/> */}
            {open==true?<HorizontalLinearStepper/>:(
                
            <MaterialTable
                title = "Dummy Data"
                columns = {columns}
                data = {data}
                actions={[
                    {
                        icon: AddIcon,
                        tooltip: 'Add',
                        isFreeAction: true,
                        onClick: handleClickOpen,
                    },
                  //   {
                  //     icon: EditIcon,
                  //     tooltip: 'Add',
                  //     isFreeAction: true,
                  //     // onClick: handleClickOpen,
                  // },
                  
                   
                  ]}
          
                
                  editable={{
                    onBulkUpdate: changes =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve();
                        }, 1000);
                      }),     
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve();
                        }, 1000);
                      }),     
                  }}
            />  )}
        </div>
    )
}

export default List
