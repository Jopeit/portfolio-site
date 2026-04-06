import { donutSettings } from "./chart-settings.js";

const langmassinve = {
    title:["English","Polish","Ukrainian","Russian"],
    value:[45,70,95,95]
};
const itlangmassive = {
    title:["HTML","CSS","JS","C#","Php","Mysql"],
    value:[90,80,60,30,20,20]
}

donutSettings("langChart",langmassinve);
donutSettings("itlangChart",itlangmassive);