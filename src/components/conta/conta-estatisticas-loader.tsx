"use client";

import dynamic from "next/dynamic";
import React from "react";

const ContaEstatisticas = dynamic(() => import("./conta-estatisticas"), {
    loading: () => <p>Carregando...</p>,
    ssr: false,
});

export default function ContaEstatisticasLoader({ data }: { data: [] }) {
    return <ContaEstatisticas data={data} />;
}
