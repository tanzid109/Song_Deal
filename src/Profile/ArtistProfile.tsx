"use client";
import React, { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platforms = ['Spotty', 'YouTube', 'AudioMack', 'SoundCloud'];
const socialMedia = ['Facebook', 'Instagram', 'TikTok', 'SoundCloud'];
const genres = [
    'Abstract',
    'Pop Art',
    'Street Art',
    'Contemporary',
    'Hip Hop',
    'Jazz',
    'Electronic',
    'Rock',
    'Classical',
    'R&B',
    'Country'
];

export default function ArtistProfileForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        artistBio: '',
        selectedGenres: [] as string[],
        profilePicture: null,
        coverImage: null,
        workLinks: platforms.map(p => ({ platform: p, url: '' })),
        socialLinks: socialMedia.map(s => ({ platform: s, url: '' })),
        customLinks: [] as { platform: string, url: string }[]
    });

    const totalSteps = 2;
    const progress = (currentStep / totalSteps) * 100;

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const updateLink = (type: 'workLinks' | 'socialLinks', index: number, value: string) => {
        setFormData(prev => ({
            ...prev,
            [type]: prev[type].map((item, i: number) =>
                i === index ? { ...item, url: value } : item
            )
        }));
    };

    const addCustomLink = () => {
        setFormData(prev => ({
            ...prev,
            customLinks: [...prev.customLinks, { platform: '', url: '' }]
        }));
    };

    const removeCustomLink = (index: number) => {
        setFormData(prev => ({
            ...prev,
            customLinks: prev.customLinks.filter((_, i) => i !== index)
        }));
    };

    const updateCustomLink = (index: number, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            customLinks: prev.customLinks.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        }));
    };

    const toggleGenre = (genre: string) => {
        setFormData(prev => {
            const selected = prev.selectedGenres.includes(genre)
                ? prev.selectedGenres.filter(g => g !== genre)
                : prev.selectedGenres.length < 3
                    ? [...prev.selectedGenres, genre]
                    : prev.selectedGenres;
            return { ...prev, selectedGenres: selected };
        });
    };

    const handleImageUpload = (field: string) => {
        // Simulate image upload
        updateField(field, 'uploaded');
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log('Form submitted:', formData);
            alert('Profile saved successfully!');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    {/* Header */}
                    {currentStep === 1 && (
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Create Your Artist Profile
                            </h1>
                            <p className="text-gray-600">
                                Complete your profile to get discovered by Investors.
                            </p>
                        </div>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-700">
                                Profile Setup Progress
                            </span>
                            <span className="text-sm font-semibold text-gray-700">
                                {Math.round(progress)}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Personal Information */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    Personal Information
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => updateField('fullName', e.target.value)}
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phoneNumber}
                                                onChange={(e) => updateField('phoneNumber', e.target.value)}
                                                placeholder="Enter your Phone Number"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                            />
                                        </div>

                                        {/* Artist Bio */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Artist Bio
                                            </label>
                                            <textarea
                                                value={formData.artistBio}
                                                onChange={(e) => updateField('artistBio', e.target.value)}
                                                placeholder="Tell us your story, your inspirations, and what makes your art unique n."
                                                rows={4}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                                            />
                                        </div>

                                        {/* Genres */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Genre (s)
                                            </label>
                                            <div className="border border-gray-300 rounded-lg p-3 max-h-32 overflow-y-auto">
                                                {formData.selectedGenres.map((genre, idx) => (
                                                    <div key={idx} className="flex  text-white mb-1 p-1 rounded-2xl bg-indigo-600">
                                                        {genre}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">
                                                Select up to 3 genres that best describe your work.
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {genres.map((genre) => (
                                                    <button
                                                        key={genre}
                                                        type="button"
                                                        onClick={() => toggleGenre(genre)}
                                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${formData.selectedGenres.includes(genre)
                                                                ? 'bg-indigo-600 text-white'
                                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        {genre}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Profile Picture */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Profile Picture
                                            </label>
                                            <div className="relative">
                                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center overflow-hidden">
                                                    {formData.profilePicture ? (
                                                        <div className="text-white text-center">
                                                            <Upload className="w-8 h-8 mx-auto mb-2" />
                                                            <p className="text-xs">Uploaded</p>
                                                        </div>
                                                    ) : (
                                                        <div className="text-white text-6xl">♪</div>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleImageUpload('profilePicture')}
                                                    className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Cover Image */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                                Cover Image
                                            </label>
                                            <div className="relative">
                                                <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden">
                                                    {formData.coverImage ? (
                                                        <div className="text-white text-center">
                                                            <Upload className="w-10 h-10 mx-auto mb-2" />
                                                            <p className="text-sm">Cover Uploaded</p>
                                                        </div>
                                                    ) : (
                                                        <div className="text-white text-center">
                                                            <div className="text-6xl mb-2">🎧</div>
                                                            <p className="text-sm">Upload Cover</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleImageUpload('coverImage')}
                                                    className="absolute bottom-3 right-3 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Save Button */}
                                <div className="flex justify-end pt-6">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
                                    >
                                        Save and Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Links */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                {/* Your Work */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">Your Work</h2>
                                    <p className="text-gray-600 mb-4">
                                        Add links to your work on other platforms.
                                    </p>
                                    <div className="space-y-3">
                                        {formData.workLinks.map((link, index) => (
                                            <div key={index} className="grid grid-cols-3 gap-3">
                                                <select
                                                    value={link.platform}
                                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                                    disabled
                                                >
                                                    <option>{link.platform}</option>
                                                </select>
                                                <input
                                                    type="url"
                                                    value={link.url}
                                                    onChange={(e) => updateLink('workLinks', index, e.target.value)}
                                                    placeholder="https://..."
                                                    className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                                        Add social media fields
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        Add links to your work on other platforms.
                                    </p>
                                    <div className="space-y-3">
                                        {formData.socialLinks.map((link, index) => (
                                            <div key={index} className="grid grid-cols-3 gap-3">
                                                <select
                                                    value={link.platform}
                                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                                    disabled
                                                >
                                                    <option>{link.platform}</option>
                                                </select>
                                                <input
                                                    type="url"
                                                    value={link.url}
                                                    onChange={(e) => updateLink('socialLinks', index, e.target.value)}
                                                    placeholder="https://..."
                                                    className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                />
                                            </div>
                                        ))}

                                        {/* Custom Links */}
                                        {formData.customLinks.map((link, index) => (
                                            <div key={index} className="grid grid-cols-3 gap-3">
                                                <input
                                                    type="text"
                                                    value={link.platform}
                                                    onChange={(e) => updateCustomLink(index, 'platform', e.target.value)}
                                                    placeholder="Platform name"
                                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                />
                                                <input
                                                    type="url"
                                                    value={link.url}
                                                    onChange={(e) => updateCustomLink(index, 'url', e.target.value)}
                                                    placeholder="https://..."
                                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                />
                                                <Button
                                                    type="button"
                                                    onClick={() => removeCustomLink(index)}
                                                    className="flex items-center justify-center text-red-600 hover:text-red-700 transition"
                                                >
                                                    <X className="w-5 h-5" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add Another Link */}
                                    <button
                                        type="button"
                                        onClick={addCustomLink}
                                        className="mt-4 flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition"
                                    >
                                        <Plus className="w-5 h-5 bg-indigo-600 text-white rounded" />
                                        Add Another Link
                                    </button>
                                </div>

                                {/* Navigation Buttons */}
                                <div className="flex justify-between pt-6 border-t">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
                                    >
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}