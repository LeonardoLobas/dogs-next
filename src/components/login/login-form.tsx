"use client";

import login from "@/actions/login";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import Link from "next/link";
import styles from "@/components/login/login-form.module.css";

function FormButton() {
    const { pending } = useFormStatus();

    return <Button disabled={pending}>Entrar</Button>;
}

export default function LoginForm() {
    const [state, action] = useFormState(login, {
        ok: false,
        error: "",
        data: null,
    });

    React.useEffect(() => {
        if (state.ok) window.location.href = "/conta";
    }, [state.ok]);

    return (
        <>
            <form action={action} className={styles.fprm}>
                <Input type="text" label="Usuário" name="username" />
                <Input type="text" label="Senha" name="password" />
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
            <Link href="login/perdeu" className={styles.perdeu}>
                Perdeu a senha ?{" "}
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta ? Cadastre-se no site.</p>
                <Link className="button" href="login/criar">
                    Cadastrar
                </Link>
            </div>
        </>
    );
}
