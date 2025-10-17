import Revolution from "@/Shared/Revolution";
import SongDetailsCard from "@/Shared/Song_Card/SongDetailsCard";

const SongDetails = async ({ params }: { params: Promise<{ song: string }> }) => {
    return (
        <div>
            <h1>{(await params).song}</h1>
            <SongDetailsCard />
            <Revolution />
        </div>
    );
};

export default SongDetails;