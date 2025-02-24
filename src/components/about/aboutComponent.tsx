"use client";
import { Button, Card } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "./aboutComponent.module.css";
import { useEffect, useState } from "react";


export default function AboutComponent() {
    const [monthMoney, setMonthMoney] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setMonthMoney(1000);
    }, [])

    const handleClick = () => {
        router.push('/detail')}
    return( 
        <div className={style.rootLayout}>
            <Card variant="outlined" className={style.card}>
                <div className={style.title}>今月の使用料金</div>
                <div className={style.fontRight}>{monthMoney}円</div>
            </Card>
            <div className={style.button}>
            <Button variant="contained" onClick={handleClick}>清算/詳細を確認する</Button>
            </div>
        </div>
    )
  }