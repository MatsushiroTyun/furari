"use client";
import { Button, Dialog, DialogActions, Modal, TextField } from "@mui/material";
import style from "./detailComponent.module.css"
import DetailTable from "./table";
import { useState } from "react";
export default function Detail() {
    const [moneyList, setMoneyList] = useState<money[]>([]);
    const [open,setOpen] = useState<boolean>(false);
    const [state,setState] = useState<money>();


    const openModal = async () => {
        setOpen(true);
        console.log(
            "お金を記録する"
        )
    }
    return( 
        <>
            <Dialog open={open} onClose={()=>setOpen(false)} >
                <div className={style.dialog}>
                    <div className={style.dialogTitle}>お金を記録する</div>
                    <TextField
                        required
                        label="日付"
                    />
                    <TextField
                        required
                        label="用途"
                    />
                    <TextField
                        required
                        label="金額"
                    />
                    <TextField
                        required
                        label="説明"
                    />
                    <TextField
                        required
                        label="払った人"
                    />
                </div>
                <DialogActions>
                <Button onClick={()=>setOpen(false)}>キャンセル</Button>
                 <Button onClick={()=>setOpen(false)} autoFocus>記録する</Button>
                </DialogActions>
            </Dialog>
            <div className={style.rootLayout}>
                <div className={style.title}>お金管理</div>
                <Button variant="contained" onClick={openModal}>お金をきろくする</Button>
                <DetailTable moneyList={moneyList}/>
            </div>
        </>
    )
}