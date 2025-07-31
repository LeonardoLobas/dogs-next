import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type FotoIdParams = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: FotoIdParams): Promise<Metadata> {
    const { id } = await params;
    const { data } = await photoGet(id);

    if (!data) return { title: "Fotos" }; // Corrigi o typo "titlte"
    return {
        title: data.photo.title,
    };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
    const { id } = await params;
    const { data } = await photoGet(id);

    if (!data) return notFound();
    return (
        <section className="container mainContainer">
            <PhotoContent data={data} single={true} />
        </section>
    );
}
