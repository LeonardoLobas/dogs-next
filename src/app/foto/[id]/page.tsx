import React from "react";

export default async function PageIdFoto({ params }: { params: { id: number } }) {
    return (
        <div>
            <h1>PageIdFoto: {params.id} </h1>
        </div>
    );
}
