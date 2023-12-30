import React, { useState } from 'react';
import "./services.css";
import { Grid } from "@mui/material";
import { insuranceList } from './serviceData';
import Dialog from "@mui/material/Dialog";
import YouTube from 'react-youtube';
import PdfView from './pdfView';
import {BrowserView, MobileView} from 'react-device-detect';

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
                        <PdfView pdf={selectedItem?.details}/>
                    </div>
                    <BrowserView>
                        <div className='dialogContentVideo'>
                        <YouTube opts={{height: '400',width:'300'}}  videoId={selectedItem?.video}/>
                        </div>
                    </BrowserView>
                    <MobileView>
                    <div className='dialogContentVideo'>
                        <YouTube opts={{height: '400',width:'300'}}  videoId={selectedItem?.video}/>
                    </div>
                    </MobileView>
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