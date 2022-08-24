const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const data = [
    {
        "ID": "ASP ID 003659 - Power Delivery Transmi...",
        "Assigned_Employee_ID": 4,
        "Owner_ID": 1,
        "Name": "ASP ID 003659 - Power Delivery Transmi...",
        "Description": "Site ID BC6754 - Site long description, Location Canada",
        "Required_by": "08/11/2023, 13:54",
        "Planned_to": "20/11/2023, 13:54",
        "Status": "Planning",
        "Priority": 2,
        "User_status": "En route",
        "Parent_ID": "",
        "level": 0,
        "hasItems": true
    }
];
    
const app = express();

app.use(bodyParser.json());

const corsOption = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
    credentials: true,
}

app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING')
})

app.get('/myapi', (req, res) => {
    const {parentIds} = req.query
    console.log(parentIds)
    switch (parentIds) {
        case "ASP ID 003659 - Power Delivery Transmi...":
            return res.json([
                {
                    "ID": "ASP ID 003659 Power Delivery-TLINE",
                    "Assigned_Employee_ID": 1,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Site ID BC6754 - Site long description, Location Canada",
                    "Required_by": "09/11/2023, 14:00",
                    "Planned_to": "22/11/2023, 14:00",
                    "Status": "Triage",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003659 Power Delivery-TLINE1",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Location ID-Location Description, BC",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Approval",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003659 Power Delivery-TLINE2",
                    "Assigned_Employee_ID": 1,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Location ID-Location Description, BC",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Approval",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003659 Power Delivery-TLINE3",
                    "Assigned_Employee_ID": 4,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Location ID-Clear River Generation Station, Ameren Fleet, 32409...",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Completed",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003659 Power Delivery-TLINE4",
                    "Assigned_Employee_ID": 1,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Location ID-Clear River Generation Station",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Schedule",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003659 Power Delivery-TLINE5",
                    "Assigned_Employee_ID": 2,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003659 Power Delivery-TLINE",
                    "Description": "Location ID-Clear River Generation Station, Fleet-ABC",
                    "Required_by": "08/11/2023, 11:55",
                    "Planned_to": "20/11/2023, 11:55",
                    "Status": "Schedule",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 - Power Delivery Transmi...",
                    "level": 1,
                    "hasItems": true
                },
            ])
            break;
        case "ASP ID 003664 Description System":
            return res.json([
                {
                    "ID": "ASP ID 003627 Description",
                    "Assigned_Employee_ID": 2,
                    "Owner_ID": 4,
                    "Name": "ASP ID 003627 Description",
                    "Description": "System Description Substation",
                    "Required_by": "10/11/2023, 11:00",
                    "Planned_to": "23/11/2023, 11:00",
                    "Status": "Completed",
                    "Priority": 2,
                    "Completion": 100,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 Description System",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 4,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "XFM.GLD1629568, Description Circuit Breaker",
                    "Required_by": "10/11/2023, 13:55",
                    "Planned_to": "23/11/2023, 13:55",
                    "Status": "Completed",
                    "Priority": 3,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 Description System",
                    "level": 3,
                    "hasItems": false
                }
            ])
            break;
        case "ASP ID 003664 162 kV Power Line":
            return res.json([
                {
                    "ID": "ASP ID 003665 Description System5",
                    "Assigned_Employee_ID": 4,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Long Long long description. Long Long long description",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System2",
                    "Assigned_Employee_ID": 4,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Long Long long description. Long Long long description",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 162 kV Power Line",
                    "level": 3,
                    "hasItems": false
                }
            ])
            break;
        case "ASP ID 003664 Description System2":
            return res.json([
                {
                    "ID": "ASP ID 003627 Description2",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003627 Description",
                    "Description": "System Description Substation",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Planning",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 Description System2",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System3",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "XFM.GLD1629568, Description Circuit Breaker",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Triage",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 Description System2",
                    "level": 3,
                    "hasItems": false
                },
            ])
            break;
        case "ASP ID 003664 kV Power Line4":
            return res.json([
                {
                    "ID": "ASP ID 003665 Description System6",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Long Long long description. Long Long long description",
                    "Required_by": "15/11/2023, 13:54",
                    "Planned_to": "29/11/2023, 13:54",
                    "Status": "Triage",
                    "Priority": 3,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line4",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003627 Description3",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003627 Description",
                    "Description": "Quis autem vel eum iure reprehenderit",
                    "Required_by": "16/11/2023, 14:54",
                    "Planned_to": "30/11/2023, 14:54",
                    "Status": "Approval",
                    "Priority": 4,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line4",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System7",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Ut enim ad minima veniam, quis nostrum...",
                    "Required_by": "15/11/2023, 10:55",
                    "Planned_to": "29/11/2023, 10:55",
                    "Status": "Planning",
                    "Priority": 3,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line4",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System8",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Expecteur sint occaecat cupidata aute in...",
                    "Required_by": "16/11/2023, 14:00",
                    "Planned_to": "30/11/2023, 14:00",
                    "Status": "Pending",
                    "Priority": 3,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line4",
                    "level": 3,
                    "hasItems": false
                }, {
                    "ID": "ASP ID 003665 Description System9",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003665 Description System",
                    "Description": "Long Long long description. Long Long long description",
                    "Required_by": "17/11/2023, 16:00",
                    "Planned_to": "31/11/2023, 16:00",
                    "Status": "Pending",
                    "Priority": 4,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003664 kV Power Line4",
                    "level": 3,
                    "hasItems": false
                }
            ])
            break;
        case "ASP ID 003659 Power Delivery-TLINE":
            return res.json([
                {
                    "ID": "ASP ID 003664 Description System",
                    "Assigned_Employee_ID": 1,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 Description System",
                    "Description": "Location ID - Clear River Generation Station Ameren Fleet, 32409...",
                    "Required_by": "09/11/2023, 10:00",
                    "Planned_to": "22/11/2023, 10:00",
                    "Status": "Pending",
                    "Priority": 3,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE",
                    "level": 2,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003664 162 kV Power Line",
                    "Assigned_Employee_ID": 1,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 162 kV Power Line",
                    "Description": "XFM.GLD16215123, Description Power Transformer",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Triage",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE",
                    "level": 2,
                    "hasItems": true
                }, {
                    "ID": "ASP ID 003664 kV Power Line",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 kV Power Line",
                    "Description": "XFM.GLD1629123, Description Power Transformer",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE",
                    "level": 2,
                    "hasItems": true
                }, 
            ])
            break;
        case "ASP ID 003659 Power Delivery-TLINE1":
            return res.json([
                {
                    "ID": "ASP ID 003664 Description System2",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 Description System",
                    "Description": "Location ID-Clear River Generation Station Ameren Fleet, 32409...",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE1",
                    "level": 2,
                    "hasItems": true
                }, 
            ])
            break;
        case "ASP ID 003659 Power Delivery-TLINE2":
            return res.json([
                {
                    "ID": "ASP ID 003664 kV Power Line1",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 kV Power Line",
                    "Description": "XFM.GLD1629123, Description Power Transformer",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE2",
                    "level": 2,
                    "hasItems": false
                },
            ])
            break
        case "ASP ID 003659 Power Delivery-TLINE3":
            return res.json([
                {
                    "ID": "ASP ID 003664 kV Power Line2",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 kV Power Line",
                    "Description": "XFM.GLD1629123, Description Power Transformer",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE3",
                    "level": 2,
                    "hasItems": false
                },
            ])
            break
        case "ASP ID 003659 Power Delivery-TLINE4":
            return res.json([
                {
                    "ID": "ASP ID 003664 kV Power Line3",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 kV Power Line",
                    "Description": "XFM.GLD1629123, Description Power Transformer",
                    "Required_by": "08/11/2023, 13:54",
                    "Planned_to": "20/11/2023, 13:54",
                    "Status": "Pending",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE4",
                    "level": 2,
                    "hasItems": false
                },
            ])
            break;
        case "ASP ID 003659 Power Delivery-TLINE5":
            return res.json([
                {
                    "ID": "ASP ID 003664 kV Power Line4",
                    "Assigned_Employee_ID": 3,
                    "Owner_ID": 1,
                    "Name": "ASP ID 003664 kV Power Line",
                    "Description": "Location ID-Clear River Generation Station, Ameren Fleet, 32409...",
                    "Required_by": "08/11/2023, 10:54",
                    "Planned_to": "20/11/2023, 10:54",
                    "Status": "Triage",
                    "Priority": 2,
                    "User_status": "En route",
                    "Parent_ID": "ASP ID 003659 Power Delivery-TLINE5",
                    "level": 2,
                    "hasItems": true
                },
            ])
            break;
        default:
            res.json(data);
    }
})

const server = app.listen('3333', () => {
    console.log('Server is running');
})