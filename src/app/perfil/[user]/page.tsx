import React from "react";

export default async function PerfilUserPage({
    params,
}: {
    params: {
        user: string;
    };
}) {
    return (
        <div>
            <h1>Usuário: {params.user}</h1>
        </div>
    );
}
