import { useFormContext, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Step4() {
    const { register, formState: { errors } } = useFormContext();

    const catalogTitle = useWatch({ name: "catalogTitle" });
    const primaryArtist = useWatch({ name: "primaryArtist" });
    const tracks = useWatch({ name: "tracks" });
    const royaltySplits = useWatch({ name: "royaltySplits" });

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Preview & Submit</h2>
            </div>

            <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex gap-2 mb-4">
                                <Badge variant="secondary">New Release</Badge>
                                <Badge>{tracks?.length || 0} Tracks</Badge>
                            </div>
                            <h1 className="text-4xl font-bold mb-2">{catalogTitle}</h1>
                            <p className="text-xl opacity-90">{primaryArtist}</p>
                        </div>
                        <div className="relative h-48 w-48 mx-auto lg:mx-0">
                            <Image
                                src="/placeholder.svg"
                                alt="Album cover"
                                fill
                                className="rounded-xl object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                <CardContent className="p-8 pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Tracks */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Tracks</h3>
                            <div className="space-y-2">
                                {tracks?.slice(0, 4).map((track: any, index: number) => (
                                    <div key={index} className="flex justify-between items-center py-2">
                                        <span className="font-medium">{index + 1}. {track.title}</span>
                                        <span>{track.duration}</span>
                                    </div>
                                ))}
                                {tracks?.length > 4 && (
                                    <p className="text-sm text-muted-foreground mt-2">+{tracks.length - 4} more tracks</p>
                                )}
                            </div>
                        </div>

                        {/* Rights & Listing */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Rights Information</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Master Rights</p>
                                        <p className="font-semibold">50% Rights</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Publishing Rights</p>
                                        <p className="font-semibold">25% Rights</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Listing Details</h3>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Asking Price</p>
                                        <p className="font-semibold">$10,000</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Investment Goal</p>
                                        <p className="font-semibold">$5,000</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Listing Duration</p>
                                        <p className="font-semibold">30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Listing Settings */}
            <Card>
                <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label>Asking Price</Label>
                            <Input type="number" {...register("askingPrice", { valueAsNumber: true })} />
                        </div>
                        <div className="space-y-2">
                            <Label>Investment Goal</Label>
                            <Input type="number" {...register("investmentGoal", { valueAsNumber: true })} />
                        </div>
                        <div className="space-y-2">
                            <Label>Listing Duration</Label>
                            <Select {...register("listingDuration")}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="7 days">7 days</SelectItem>
                                    <SelectItem value="14 days">14 days</SelectItem>
                                    <SelectItem value="30 days">30 days</SelectItem>
                                    <SelectItem value="60 days">60 days</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}