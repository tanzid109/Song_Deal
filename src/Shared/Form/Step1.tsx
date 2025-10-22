import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Step1() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
                <p className="text-muted-foreground">Provide the essential details for your catalog</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="catalogTitle">Catalog Title</Label>
                    <Input id="catalogTitle" {...register("catalogTitle")} />
                    {errors.catalogTitle && <p className="text-sm text-destructive">{errors.catalogTitle.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="primaryArtist">Primary Artist</Label>
                    <Input id="primaryArtist" {...register("primaryArtist")} />
                    {errors.primaryArtist && <p className="text-sm text-destructive">{errors.primaryArtist.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="releaseYear">Release Year</Label>
                    <Input id="releaseYear" type="number" min="1900" max="2025" {...register("releaseYear")} />
                    {errors.releaseYear && <p className="text-sm text-destructive">{errors.releaseYear.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="genre">Genre</Label>
                    <Select {...register("genre")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Pop">Pop</SelectItem>
                            <SelectItem value="Rock">Rock</SelectItem>
                            <SelectItem value="Hip Hop">Hip Hop</SelectItem>
                            <SelectItem value="Electronic">Electronic</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.genre && <p className="text-sm text-destructive">{errors.genre.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select {...register("language")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.language && <p className="text-sm text-destructive">{errors.language.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                    id="shortDescription"
                    placeholder="Provide a brief description of your catalog."
                    {...register("shortDescription")}
                    rows={4}
                />
                {errors.shortDescription && <p className="text-sm text-destructive">{errors.shortDescription.message}</p>}
            </div>
        </div>
    );
}