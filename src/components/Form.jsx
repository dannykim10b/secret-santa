import React, {useState} from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export default function Form() {

    const [participants, setParticipants] = useState([{Name: "", Email: "", Exclusions: []}, {Name: "", Email: "", Exclusions: []}, {Name: "", Email: "", Exclusions: []}])
    const [step, setStep] = useState(0)
    const [groupInfo, setGroupInfo] = useState({GroupName: "", PriceLimit: "", DateOfEvent: "", AdditionalMessage: ""})
    const [errorMessage, setErrorMessage] = useState({})

    const steps = ['Add Participants', 'Set Exclusions', 'Finalize Group Information']


    const handleNext = () => {
        let isError = false
        // for( const participant of participants) {
        //     if(participant.Name === "") {
        //         isError = true
        //         setErrorMessage({invalidName: "Name Required"})
        //     }
        //     if(participant.Email === "") {
        //         isError = true
        //         setErrorMessage({...errorMessage, invalidEmail: "Valid Email Required"})
        //     }
        // }
        if(!isError) {
            setStep(step + 1)
            setErrorMessage({})
        }
    }

    const handleBack = () => {
        setStep(step-1)
    }

    const handleUpdateParticipant = (e, index) => {
        const updatedParticipants = [...participants]
        if (e.target.name === "name") {
            updatedParticipants[index].Name = e.target.value
        }
        else {
            updatedParticipants[index].Email = e.target.value
        }
        setParticipants(updatedParticipants)
    }
    
    const addParticipant = () => {
        const newParticipants = [...participants]
        newParticipants.push({Name: "", Email: "", Exclusions: []})
        setParticipants(newParticipants)
        console.log(participants)
    }

    const removeParticipant = (index) => {
        const newParticipants = [...participants]
        newParticipants.splice(index, 1)
        setParticipants(newParticipants)
    }

    const handleUpdateGroupInfo = (e) => {
        const updatedGroupInfo = {...groupInfo}
        if (e.target.name === "groupname") {
            updatedGroupInfo.GroupName = e.target.value
        } if (e.target.name === "pricelimit") {
            updatedGroupInfo.PriceLimit = e.target.value
        } if (e.target.name === "date") {
            updatedGroupInfo.DateOfEvent = e.target.value
        } if (e.target.name === "additionalmessage") {
            updatedGroupInfo.AdditionalMessage = e.target.value
        }
        setGroupInfo(updatedGroupInfo)
    }

    const handleSubmit = () => {
        console.log(participants)
        console.log(groupInfo)
    }

  return (
    <>
    <div>

            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => {
                    return (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                    )
                })}
            </Stepper>

        <Link to="/">
            Home
        </Link>
        <form>

            <div index="participants">
                {step === 0 && (
                    <>

         {participants.map((person, i) => {
             if( i === 0 ) return (
                 <>
                    <div key={`${person}-${i+1}`}>
                        Host Name
                        <TextField 
                            required
                            label="Required" 
                            name="name" 
                            error={!!errorMessage.invalidName} 
                            helperText={
                                errorMessage.invalidName &&
                                errorMessage.invalidName
                            }
                            variant="outlined" 
                            value={person.Name} 
                            onChange={e => handleUpdateParticipant(e, i)}>
                        </TextField>
                        Email
                        <TextField 
                            required 
                            label="Required" 
                            name="email" 
                            error={!!errorMessage.invalidEmail} 
                            helperText={
                                errorMessage.invalidEmail &&
                                errorMessage.invalidEmail
                            }
                            variant="outlined" 
                            value={person.Email} 
                            onChange={e => handleUpdateParticipant(e, i)}>
                        </TextField>
                    </div>
                    <h3>PARTICIPANTS</h3>
                 </>
             )
             if( i > 2 ) return (
                <div>
                Participant {i+1}
                <div key={`${person}-${i+1}`}>
                    Name
                    <TextField 
                        required id="name" 
                        label="Required" 
                        name="name" 
                        error={!!errorMessage.invalidName} 
                        helperText={
                            errorMessage.invalidName &&
                            errorMessage.invalidName
                        }
                        variant="outlined" 
                        value={person.Name} 
                        onChange={e => handleUpdateParticipant(e, i)}>
                    </TextField>                
                    Email
                    <TextField 
                        required 
                        label="Required" 
                        name="email" 
                        error={!!errorMessage.invalidEmail} 
                        helperText={
                            errorMessage.invalidEmail &&
                            errorMessage.invalidEmail
                        }
                        variant="outlined" 
                        value={person.Email} 
                        onChange={e => handleUpdateParticipant(e, i)}>
                    </TextField>             
                    <Button onClick={() => removeParticipant(i)}>Remove</Button>
                </div>
                </div>
             )
             return (
                 <div>
                     Participant {i+1}
                 <div key={`${person}-${i+1}`}>
                 Name
                    <TextField 
                        required id="name" 
                        label="Required" 
                        name="name" 
                        error={!!errorMessage.invalidName} 
                        helperText={
                            errorMessage.invalidName &&
                            errorMessage.invalidName
                        }
                        variant="outlined" 
                        value={person.Name} 
                        onChange={e => handleUpdateParticipant(e, i)}>
                    </TextField>                
                    Email
                    <TextField 
                        required 
                        label="Required" 
                        name="email" 
                        error={!!errorMessage.invalidEmail} 
                        helperText={
                            errorMessage.invalidEmail &&
                            errorMessage.invalidEmail
                        }
                        variant="outlined" 
                        value={person.Email} 
                        onChange={e => handleUpdateParticipant(e, i)}>
                    </TextField>   
                </div>
                </div>
             )
         }
         )}
         <div>
             <Button onClick={addParticipant}>Add</Button>
             <Button onClick={handleNext}>Next</Button>
         </div>
         </>
                )}
   

            </div>

            <div index="exclusions">
                {step === 1 && (
                    <>
                    Exclusions
                    { participants.length === 3 
                    ? <h1>Minimum 4 participants required to have exclusions</h1> 
                    : participants.map((person, i) => {
                        return (
                            <div>{person.Name}
                            <Select variant="outlined">
                            {participants.map((exclusions, i) => {
                                if (exclusions.Name === person.Name) return
                                return (
                                    <MenuItem>{exclusions.Name}</MenuItem>
                                )
                            })}
                            </Select>
                            </div>
                        )
                    })
                }
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
                    </>
                )}

            </div>

            <div index="finalize">
            {step === 2 && (
            <>
            <div>
                Group Name
                <TextField 
                required 
                name="groupname"
                variant="outlined" 
                label="Required" 
                onChange={e => handleUpdateGroupInfo(e)}
                value={groupInfo.GroupName}
                ></TextField>
            </div>
            <div>
                Price Limit
                <TextField 
                name="pricelimit"
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="outlined"
                label="Optional"
                onChange={e => handleUpdateGroupInfo(e)}
                value={groupInfo.PriceLimit}
                ></TextField>
            </div>
            <div>
                Date of event
                <TextField 
                required 
                name="date"
                variant="outlined" 
                label="Required"
                onChange={e => handleUpdateGroupInfo(e)}
                value={groupInfo.DateOfEvent}
                ></TextField>
            </div>
            <div>
                Additional Message
                <TextField
                name="additionalmessage"
                multiline 
                rows={4} 
                label="Optional" 
                variant="outlined"
                onChange={e => handleUpdateGroupInfo(e)}
                value={groupInfo.AdditionalMessage}
                ></TextField>
            </div>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
            </>
            )}

            </div>
        </form>

    </div>
    </>
  );
}