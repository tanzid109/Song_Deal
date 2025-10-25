"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Upload } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
    socialPlatform: z.string(),
    socialUrl: z.string().url('Please enter a valid URL').or(z.literal('')),
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    companyBio: z.string().min(10, 'Company bio must be at least 10 characters'),
    investmentInterests: z.array(z.string()).min(1, 'Select at least one interest'),
    investmentRange: z.string().min(1, 'Please select an investment range'),
});

type FormData = z.infer<typeof formSchema>;

const musicGenres = ['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Jazz', 'Classical', 'Country', 'R&B'];

export default function InvestorProfileForm() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [selectedGenres, setSelectedGenres] = useState(['Pop', 'Rock', 'Hip-Hop', 'Electronic']);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            socialPlatform: 'LinkedIn',
            investmentInterests: ['Pop', 'Rock', 'Hip-Hop', 'Electronic'],
            investmentRange: '$50k - $100k',
        },
    });

    const formValues = watch();

    const calculateProgress = () => {
        const fields = ['fullName', 'phoneNumber', 'companyName', 'companyBio', 'investmentRange'] as const;
        const filledFields = fields.filter((field) => {
            return field in formValues && typeof formValues[field] === 'string' && formValues[field].length > 0;
        }).length;
        return Math.round((filledFields / fields.length) * 100);
    };

    const toggleGenre = (genre: string) => {
        const newGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre];
        setSelectedGenres(newGenres);
        setValue('investmentInterests', newGenres, { shouldValidate: true });
    };

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', { ...data, profileImage, coverImage });
        alert('Profile saved successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Set Up Your Investor Profile</h1>
                    <p className="text-gray-600">Tell us a bit about yourself to get started.</p>
                </div>

                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Profile Setup Progress</span>
                        <span className="text-sm font-bold text-purple-600">{calculateProgress()}%</span>
                    </div>
                    <Progress value={calculateProgress()} className="h-2" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        placeholder="Enter your full name"
                                        {...register('fullName')}
                                        className="mt-2"
                                    />
                                    {errors.fullName && (
                                        <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                    <Input
                                        id="phoneNumber"
                                        placeholder="Enter your Phone Number"
                                        {...register('phoneNumber')}
                                        className="mt-2"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
                                    )}
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-32">
                                        <Select
                                            defaultValue="LinkedIn"
                                            onValueChange={(value) => setValue('socialPlatform', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                                <SelectItem value="Twitter">Twitter</SelectItem>
                                                <SelectItem value="Instagram">Instagram</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex-1">
                                        <Input
                                            placeholder="https://..."
                                            {...register('socialUrl')}
                                        />
                                        {errors.socialUrl && (
                                            <p className="text-sm text-red-500 mt-1">{errors.socialUrl.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="companyName">Company Name</Label>
                                    <Input
                                        id="companyName"
                                        placeholder="Enter your Company Name"
                                        {...register('companyName')}
                                        className="mt-2"
                                    />
                                    {errors.companyName && (
                                        <p className="text-sm text-red-500 mt-1">{errors.companyName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="companyBio">Company Name bio</Label>
                                    <Textarea
                                        id="companyBio"
                                        placeholder="Tell us about your Company"
                                        {...register('companyBio')}
                                        className="mt-2 min-h-[120px]"
                                    />
                                    {errors.companyBio && (
                                        <p className="text-sm text-red-500 mt-1">{errors.companyBio.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <Label>Profile Picture</Label>
                                    <div className="mt-2 flex flex-col items-center">
                                        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
                                            {profileImage ? (
                                                <Image src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600" />
                                            )}
                                            <button
                                                type="button"
                                                className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                                                onClick={() => document.getElementById('profileUpload')?.click()}
                                            >
                                                <Upload size={16} />
                                            </button>
                                            <input
                                                id="profileUpload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            if (typeof reader.result === 'string') {
                                                                setProfileImage(reader.result);
                                                            }
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label>Cover Image</Label>
                                    <div className="mt-2">
                                        <div className="relative w-full h-40 rounded-xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center overflow-hidden">
                                            {coverImage ? (
                                                <Image src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600" />
                                            )}
                                            <button
                                                type="button"
                                                className="absolute bottom-3 right-3 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                                                onClick={() => document.getElementById('coverUpload')?.click()}
                                            >
                                                <Upload size={16} />
                                            </button>
                                            <input
                                                id="coverUpload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            if (typeof reader.result === 'string') {
                                                                setCoverImage(reader.result);
                                                            }
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Investment Preferences</h2>

                        <div>
                            <Label>Investment Interests</Label>
                            <div className="mt-3 p-4 border rounded-lg">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {selectedGenres.map(genre => (
                                        <span
                                            key={genre}
                                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {musicGenres.map(genre => (
                                        <button
                                            key={genre}
                                            type="button"
                                            onClick={() => toggleGenre(genre)}
                                            className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedGenres.includes(genre)
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {genre}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-3">
                                    Select one or more genres. e.g., Pop, Rock, Hip-Hop.
                                </p>
                            </div>
                            {errors.investmentInterests && (
                                <p className="text-sm text-red-500 mt-1">{errors.investmentInterests.message}</p>
                            )}
                        </div>

                        <div className="mt-6">
                            <Label>Investment Range</Label>
                            <RadioGroup
                                defaultValue="$50k - $100k"
                                onValueChange={(value) => setValue('investmentRange', value, { shouldValidate: true })}
                                className="mt-3 space-y-3"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="$1k - $10k" id="range1" />
                                    <Label htmlFor="range1" className="cursor-pointer font-normal">$1k - $10k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="$10k - $50k" id="range2" />
                                    <Label htmlFor="range2" className="cursor-pointer font-normal">$10k - $50k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="$50k - $100k" id="range3" />
                                    <Label htmlFor="range3" className="cursor-pointer font-normal">$50k - $100k</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="$100k+" id="range4" />
                                    <Label htmlFor="range4" className="cursor-pointer font-normal">$100k+</Label>
                                </div>
                            </RadioGroup>
                            {errors.investmentRange && (
                                <p className="text-sm text-red-500 mt-1">{errors.investmentRange.message}</p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
                    >
                        Save Profile
                    </Button>
                </form>
            </div>
        </div>
    );
}