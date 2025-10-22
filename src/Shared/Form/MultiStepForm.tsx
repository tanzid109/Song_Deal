/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const schema = yup.object({
    // Step 1
    catalogTitle: yup.string().required("Catalog title is required"),
    primaryArtist: yup.string().required("Primary artist is required"),
    releaseYear: yup.string().required("Release year is required"),
    genre: yup.string().required("Genre is required"),
    language: yup.string().required("Language is required"),
    shortDescription: yup.string().required("Description is required").max(500),

    // Step 2 - Tracks
    tracks: yup.array().of(
        yup.object({
            title: yup.string().required("Track title is required"),
            duration: yup.string().required("Duration is required"),
            isrc: yup.string(),
            audioFile: yup.mixed(),
        })
    ).min(1, "At least one track is required"),

    // Step 3 - Rights
    rightsOwner: yup.string().required("Rights owner is required"),
    royaltySplits: yup.array().of(
        yup.object({
            name: yup.string().required("Name is required"),
            split: yup.number().required("Split is required").min(0).max(100),
        })
    ).test("total-split", "Total royalty split cannot exceed 100%", function (value) {
        if (!value) return true;
        const total = value.reduce((sum: number, split: any) => sum + (split.split || 0), 0);
        return total <= 100;
    }),

    // Step 4
    askingPrice: yup.number().required().min(0),
    investmentGoal: yup.number().required().min(0),
    listingDuration: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

export default function MultiStepForm() {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            catalogTitle: "",
            primaryArtist: "",
            releaseYear: "",
            genre: "Pop",
            language: "English",
            shortDescription: "",
            tracks: [{ title: "", duration: "", isrc: "", audioFile: null }],
            rightsOwner: "",
            royaltySplits: [{ name: "", split: 0 }],
            askingPrice: 10000,
            investmentGoal: 5000,
            listingDuration: "30 days",
        },
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const progress = (currentStep / totalSteps) * 100;

    const handleNext = async () => {
        const isValid = await methods.trigger(); // Trigger validation for all fields
        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps)); // Ensure it doesn't exceed totalSteps
        } else {
            console.log("Validation errors:", methods.formState.errors); // Debug validation errors
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1)); // Ensure it doesn't go below 1
    };

    const handleSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        // Handle form submission
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold tracking-tight">Upload New Catalog</h1>
                            <Badge variant="secondary">Step {currentStep}/{totalSteps}</Badge>
                        </div>

                        <Progress value={progress} className="h-2" />

                        <div className="flex gap-2">
                            {Array.from({ length: totalSteps }, (_, i) => (
                                <Button
                                    key={i + 1}
                                    type="button"
                                    variant={currentStep === i + 1 ? "default" : "outline"}
                                    size="sm"
                                    className="flex-1"
                                    onClick={() => setCurrentStep(i + 1)}
                                >
                                    Step {i + 1}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Card>
                        <CardContent className="p-0 pt-6">
                            {currentStep === 1 && <Step1 />}
                            {currentStep === 2 && <Step2 />}
                            {currentStep === 3 && <Step3 />}
                            {currentStep === 4 && <Step4 />}
                        </CardContent>
                    </Card>

                    <div className="flex justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                        >
                            Back
                        </Button>

                        {currentStep === totalSteps ? (
                            <Button type="submit">Submit for Review</Button>
                        ) : (
                            <Button type="button" onClick={handleNext}>
                                Next
                            </Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}