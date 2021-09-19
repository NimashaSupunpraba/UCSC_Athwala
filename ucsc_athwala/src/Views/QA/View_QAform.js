import React, {useEffect,useState} from 'react';
import SearchBar from './SearchBar'
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FQAList from './FQA_List';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ({
    title:{
        color:"#546e7a",
        marginTop:20,
        marginBottom:20,
        fontSize:40,
      }
})


const students = [  
    
    {  
        'title' : 'vission of the UCSC' , 
        'answer': 'Be a global leader in computing, advancing the frontiers of new knowledge through learning and research.',   
    },  
    {  
        'title' : 'Mission of the UCSC' , 
        'answer': 'To advance and enhan computing knowledge,fostering global strategic alliances,promoting crossdisciplinary research,producing socially responsibleprofessionalswith entrepreneurial skills,leadership qualities and integrity contributing to position the country  as a knowledge hub in the region.',   
    },  
    {  
        'title' : 'Internal Undergraduate Degree Programmes' , 
        'answer': 'Bachelor of Science in Computer Science (BSc. in CS) , Bachelor of Science Honours in Computer Science (BSc. (Hons) in CS) , Bachelor of Science Honours in Software Engineering (BSc. (Hons) in SE) , Bachelor of Science in Information Systems (BSc. in IS) , Bachelor of Science Honours in Information Systems (BSc. (Hons) in IS)',   
    },  
    {  
        'title' : 'Postgraduate Degree Programmes' , 
        'answer': 'Master of Computer Science (MCS) , Master of Science in Computer Science (MSc. in CS) , Master of Information Technology (MIT) , Master of Information Security (MIS) , Master of Business Analytics (MBAnalytics) , Master of Cybersecurity (MC)',   
    },  
    {  
        'title' : 'Postgraduate Research Degrees' , 
        'answer': 'Doctor of Philosophy (PhD) , Master of Philosophy (MPhil)',   
    },  
];




export default function QAform(){
    const classes = useStyles();

    

        function FormRow (props){

           const  title = props.title;
           const  answer = props.answer;
             
            return (
                <React.Fragment>
                        <FQAList title={title} answer={answer}/>
                </React.Fragment>
               // <div></div>
            );
          }
        
        return(
            <Container>
                <div><SearchBar /></div>
                <div><Typography variant="h5" className={classes.title}>FAQ</Typography></div>
               
                <div>
                <Grid container spacing={6}>
                {students.map(student => (  
                      <FormRow title={student.title} answer={student.answer}/> 
                ))}
                
          </Grid>
          </div>
            </Container>
        );
}
