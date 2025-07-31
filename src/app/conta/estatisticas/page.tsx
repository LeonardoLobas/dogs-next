import statsGet from "@/actions/stats-get";
import ContaEstatisticasLoader from "@/components/conta/conta-estatisticas-loader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
    const { data } = await statsGet();

    if (!data) return null;

    return (
        <section>
            <ContaEstatisticasLoader data={data} />
        </section>
    );
}
