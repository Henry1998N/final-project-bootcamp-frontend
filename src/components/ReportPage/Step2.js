
import './Step2.css'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';


const Step2 = ({apartementResidents}) => {

    /* apartementResidents = [{
        residentId: 'RES001',
        firstName: 'David',
        lastName: 'Cohen',
        dateOfBirth: '1979-06-15',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C5603AQHBRGTKfjlZdg/profile-displayphoto-shrink_800_800/0/1621533275711?e=2147483647&v=beta&t=F0HxYugSexf7IvPbHEuJWRscBjWiAS6caoM4UP9zN-Q',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 5000,
        allergies: ['Peanuts', 'Shellfish'],
        medicalAppointments: [
            {
                attended: false,
                time: '09:15',
                typeOfInspection: 'Throat Infection Examination',
                date: '2023-04-20',
            },
            {
                attended: false,
                time: '11:30',
                typeOfInspection: 'Hearing Loss Evaluation',
                date: '2023-04-22',
            },
        ],
        familyConnections: [
            {
                name: 'Rina Levi',
                contactNumber: '054-1234567',
            },
            {
                name: 'Avi Cohen',
                contactNumber: '052-9876543',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antihistamine',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Nasal Spray',
                    dosage: '2 sprays',
                    status: false,
                },
                {
                    medicationName: 'Pain Reliever',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Decongestant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES002',
        firstName: 'Sarah',
        lastName: 'Levy',
        dateOfBirth: '1985-04-18',
        gender: 'Female',
        image: 'https://cdn2-sr-application.sportsrecruits.com/images/lacrosserecruits/2020/11/f61520752a0d4325cc877425ca0b0ba1.jpg',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 3500,
        allergies: ['Eggs', 'Fish'],
        medicalAppointments: [
            {
                attended: false,
                time: '14:45',
                typeOfInspection: 'Sinusitis Assessment',
                date: '2023-04-25',
            },
        ],
        familyConnections: [
            {
                name: 'Rachel Green',
                contactNumber: '052-1234567',
            },
            {
                name: 'Monica Geller',
                contactNumber: '058-7654321',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Cough Syrup',
                    dosage: '2 teaspoons',
                    status: false,
                },
            ],
            afternoon: [
                {
                    medicationName: 'Inhaler',
                    dosage: '1 puff',
                    status: false,
                },
            ],
            evening: [
                {
                    medicationName: 'Expectorant',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
        },
    },
    {
        residentId: 'RES003',
        firstName: 'Ethan',
        lastName: 'Cohen',
        dateOfBirth: '1993-11-07',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4D03AQGkBk7PbsXI5w/profile-displayphoto-shrink_800_800/0/1634674720491?e=2147483647&v=beta&t=xp-opkIF4wGDd7Cw8qOpf6zsGz1U3FepZhJKKY0LMD8',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4000,
        allergies: ['Milk', 'Tree Nuts'],
        medicalAppointments: [
            {
                attended: false,
                time: '16:30',
                typeOfInspection: 'Tonsillitis Diagnosis',
                date: '2023-04-27',
            },
            {
                attended: false,
                time: '10:00',
                typeOfInspection: 'Sleep Apnea Screening',
                date: '2023-04-30',
            },
        ],
        familyConnections: [
            {
                name: 'Daniel Levin',
                contactNumber: '053-9876543',
            },
            {
                name: 'Natalie Cohen',
                contactNumber: '056-3456789',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    }]*/
   // let step2Fields = ['Laundry', 'Shopping', 'Families', 'Exceptional Event']

    const step2Fields=[
    {title: 'Laundry', icon: <LocalLaundryServiceIcon/>},
    {title:'Shopping', icon: <ShoppingCartIcon/> },
    {title:'Families', icon:<Diversity2Icon/>},
    {title: 'Exceptional Event', icon:<SmsFailedIcon/>},
]

    return (
        <div className='container'>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <h6>General Activities</h6>
                {step2Fields.map(field=> 
                 <TextField
                
                    id="outlined-multiline-flexible"
                    label={<div> {field.icon} {field.title}</div>}
                    multiline
                    maxRows={4}
                />)}
               
            </Box>

            <FormGroup>
                <h6>General Cleaning</h6>
                <FormControlLabel control={<Checkbox />} label="Refrigerator test" />
                <FormControlLabel control={<Checkbox />} label="Cleaning toilets and showers" />
                <FormControlLabel control={<Checkbox />} label="empty bin" />
                <FormControlLabel control={<Checkbox />} label="Arranging closets and rooms" />
            </FormGroup>

            <FormGroup>
                <h6>Daily Treatment</h6>
                <FormControlLabel control={<Checkbox />} label="drugs giving" />
                <FormControlLabel control={<Checkbox />} label="Applying foot cream" />
                <FormControlLabel control={<Checkbox />} label="teeth brushing" />
                <FormControlLabel control={<Checkbox />} label="Glasses cleaning (for glasses wearers)" />
            </FormGroup>

            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <h6>Counting Money</h6>
            <TextField
                    label={ 'Appartment Budget'}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                    }}
                />
                {apartementResidents.map(resident => 
                <TextField
                    label={resident.firstName + ' ' + resident.lastName + ' Budget'}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                    }}
                />)}

            </Box>





        </div>
    )
}

export default Step2