"use client";

import { StatsData } from "@/actions/stats-get";
import dynamic from "next/dynamic";
import React from "react";

const ContaEstatisticas = dynamic(() => import("./conta-estatisticas"), {
    loading: () => <p>Carregando...</p>,
    ssr: false,
});

export default function ContaEstatisticasLoader({ data }: { data: StatsData[] }) {
    return <ContaEstatisticas data={data} />;
}
