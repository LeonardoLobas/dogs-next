import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crie sua conta",
    description: "Crie sua conta no site Dogs.",
};

export default async function PageCriarSenha() {
    return (
        <div className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
        </div>
    );
}
