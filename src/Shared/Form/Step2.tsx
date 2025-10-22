import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Step2() {
    const { control, register, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "tracks"
    });

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Add Your Tracks</h2>
                <p className="text-muted-foreground">Provide the essential metadata for your catalog</p>
            </div>

            <div className="space-y-4">
                {fields.map((field, index) => (
                    <Card key={field.id} className="p-6">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                                <div className="space-y-2">
                                    <Label>Track Title</Label>
                                    <Input
                                        {...register(`tracks.${index}.title`)}
                                        placeholder="Enter track title"
                                    />
                                    {errors.tracks?.[index]?.title && (
                                        <p className="text-sm text-destructive">{errors.tracks[index]?.title?.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label>Duration</Label>
                                    <Input
                                        {...register(`tracks.${index}.duration`)}
                                        placeholder="MM:SS"
                                    />
                                    {errors.tracks?.[index]?.duration && (
                                        <p className="text-sm text-destructive">{errors.tracks[index]?.duration?.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2 lg:col-span-1">
                                    <Label>ISRC (Optional)</Label>
                                    <Input
                                        {...register(`tracks.${index}.isrc`)}
                                        placeholder="XX-XXX-00-00000"
                                    />
                                </div>
                            </div>

                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="mt-4 text-destructive hover:text-destructive/80"
                                onClick={() => remove(index)}
                            >
                                Remove Track
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                <Button
                    type="button"
                    variant="outline"
                    onClick={() => append({ title: "", duration: "", isrc: "", audioFile: null })}
                    className="w-full"
                >
                    + Add Another Track
                </Button>
            </div>
        </div>
    );
}