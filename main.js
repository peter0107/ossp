#!/usr/bin/env node
const https=require("https");
const parser=require("node-html-parser");
const url="https://www.skku.edu/skku/campus/skk_comm/notice01.do";
const header={
    headers:{
        "User-Agent":"..."
    }
}

https.get(
    url,header,(res)=>{
        let data="";
        res.on("data",(chunk)=>{
            data+=chunk;
        });
        res.on("end",()=>{
            const root=parser.parse(data);
            const list=root.querySelectorAll(".board-list-content-title > a");
            list.forEach((item)=>{
                console.log(item.innerText.trim());
            })
            
        });
    }
)