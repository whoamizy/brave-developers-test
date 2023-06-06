import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: IProps) {
  return <main>{params.id}</main>;
}
