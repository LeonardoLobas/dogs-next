import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const { data } = await photoGet(id);

    if (!data) return { title: "Fotos" };
    return {
        title: data.photo.title,
    };
}

export default async function FotoIdPage({ params }: Props) {
    const { id } = await params;
    const { data } = await photoGet(id);

    if (!data) return notFound();
    return <FeedModal photo={data} />;
}
