import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Trash2 } from "lucide-react";

export default function Step3() {
    const { control, register, formState: { errors } } = useFormContext();
    const { fields: splitFields, append: appendSplit, remove: removeSplit } = useFieldArray({
        control,
        name: "royaltySplits"
    });

    const royaltySplits = useWatch({ control, name: "royaltySplits" });
    const totalSplit = royaltySplits?.reduce((sum, split) => sum + (split?.split || 0), 0) || 0;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Rights & Documents</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Rights Owner */}
                <Card>
                    <CardContent className="p-6 pt-6 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">Rights Owner</h3>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="rightsOwner">Enter the name of the rights owner</Label>
                            <Input id="rightsOwner" {...register("rightsOwner")} />
                            {errors.rightsOwner && <p className="text-sm text-destructive">{errors.rightsOwner.message}</p>}
                        </div>
                    </CardContent>
                </Card>

                {/* Royalty Split */}
                <Card>
                    <CardContent className="p-6 pt-6 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">Royalty Split</h3>
                            <p className="text-sm text-muted-foreground">
                                Royalty holders and their respective percentage splits. The total must not exceed 100%.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {splitFields.map((field, index) => (
                                <div key={field.id} className="flex gap-3 items-end p-3 border rounded-lg">
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-xs">Name</Label>
                                        <Input
                                            {...register(`royaltySplits.${index}.name`)}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="w-24 space-y-1">
                                        <Label className="text-xs">Royalty Split (%)</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            max="100"
                                            {...register(`royaltySplits.${index}.split`, { valueAsNumber: true })}
                                            className="w-full"
                                        />
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeSplit(index)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}

                            {totalSplit > 100 && (
                                <Alert variant="destructive">
                                    <AlertDescription>Total royalty split cannot exceed 100%.</AlertDescription>
                                </Alert>
                            )}
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => appendSplit({ name: "", split: 0 })}
                            className="w-full"
                        >
                            + Add Another
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Legal Documents */}
            <Card>
                <CardContent className="p-6 pt-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Legal Documents</h3>
                        <p className="text-sm text-muted-foreground">
                            Upload contracts, proof of ownership, or other relevant legal documents (PDF format)
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                            <div className="space-y-2">
                                <p className="text-lg font-medium">Drag & drop PDF files here, or browse</p>
                                <p className="text-sm text-muted-foreground">PDF files only, up to 100MB</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}