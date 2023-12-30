import React, { useState } from 'react';
import "./services.css";
import { Grid } from "@mui/material";
import { insuranceList } from './serviceData';
import Dialog from "@mui/material/Dialog";
import YouTube from 'react-youtube';
import {Viewer, Worker} from '@react-pdf-viewer/core';

const Services = () =>{
    const [dialogOpen, setDialogOpen]=useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const handleDialogClose =() =>{
        setDialogOpen(false);
    }
    const handleDialogOpen =(e, item) =>{
        setSelectedItem(item)
        setDialogOpen(true);
    }

    return <div>
        <Dialog fullWidth maxWidth="lg" open={dialogOpen} onClose={()=>handleDialogClose()} PaperProps={{sx: { backgroundColor: "#343434", color: "white",},}}>
        <div style={{ padding: "1%" }}>
            <div style={{ backgroundColor: "white", overflow:"hidden" }}>
                <div style={{ fontSize: "18px", color:"#42A5F5",padding:"1%",paddingBottom:"0px"}}>{selectedItem?.itemName}</div>
                <div className='dialogContentParent'>
                    <div className='dialogContentPdf'>
                        {/* <div style={{color:"black"}}>LIC’s Dhan Sanchay is a Non-Linked, Non-Participating, Individual, Savings,
                            Life Insurance Plan which offers a combination of protection and savings. This
                            plan provides financial support to the family in case of unfortunate death of
                            the life assured during the policy term. It also provides guaranteed income
                            stream during the Payout Period from the date of maturity.
                            This plan can be purchased Offline through agents/other intermediaries
                            including Point of Sales Persons-Life Insurance (POSP-LI)/Common Public
                            Service Centers (CPSC-SPV) as well as Online directly through we
                        </div> */}
                       {/* <Worker>
                        <Viewer fileUrl={selectedItem?.details}/>
                        </Worker> */}
                    </div>
                    <div className='dialogContentVideo'>
                        <YouTube opts={((window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) ? {height: '350',width:'450'}: {height: '350',width:'300'}}  videoId={selectedItem?.video}/>
                    </div>
                </div>
                <div className='dialogButtonRapper'>
                    <button className="dialogButton" onClick={()=>handleDialogClose()}>Close</button>
                </div> 
            </div>
        </div>
       </Dialog>


        <div style={{border: "4px solid white", margin:"5%"}}>
            <div className='title'>Insurance List</div>
            <div>
            <Grid container className='gridcontainerstyle'>
                {  
                    insuranceList.map((item, key)=>{
                        return <Grid item xs={3} md={3} style={{ marginBottom: "3%", marginRight:"1%"}}>
                        <button className='tile' onClick={(e)=>handleDialogOpen(e, item)}>{item.itemName}</button>
                        </Grid>
                    })
                }
            </Grid>
            </div>
        </div>
    </div>
}

export default Services;