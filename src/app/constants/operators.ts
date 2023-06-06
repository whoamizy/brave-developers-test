import { IOperator } from "@/app/types/OperatorType";
import MTC from "@/app/assets/images/mtc.svg";
import BILAIN from "@/app/assets/images/bilain.svg";
import MEGAFON from "@/app/assets/images/megafon.svg";

export const operators: IOperator[] = [
  {
    id: "0",
    name: "МТС",
    imageUrl: MTC,
  },
  {
    id: "1",
    name: "Билайн",
    imageUrl: BILAIN,
  },
  {
    id: "2",
    name: "Мегафон",
    imageUrl: MEGAFON,
  },
];
