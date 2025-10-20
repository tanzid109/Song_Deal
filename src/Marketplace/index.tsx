"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import FeaturedSongs from "@/Homepage/Featured/Songs";
import Revolution from "@/Shared/Revolution";
import Pagination from "@/Shared/Pagination";

export default function SongFilters() {
    const [priceRange, setPriceRange] = useState([100, 700]);

    return (
        <main className=" mt-10">
            <h2 className="text-2xl text-center md:text-left lg:w-6/12  mx-auto font-semibold">Discover Song Assets</h2>
            {/* filters */}
            <div className=" flex flex-col justify-center items-center mt-10 space-y-6">
                {/* Search & Dropdown Filters */}
                <div className="lg:w-6/12 lg:flex lg:gap-3 grid grid-cols-2 gap-4">
                    <Input
                        type="text"
                        placeholder="Search.."
                        className="rounded-full w-full bg-white border-none shadow-md hidden lg:flex"
                    />

                    <Select>
                        <SelectTrigger className="w-full md:w-1/3  rounded-full bg-white border-none shadow-md">
                            <SelectValue placeholder="Genre"/>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="pop">Hip-Hop/Rap</SelectItem>
                            <SelectItem value="rock">Pop</SelectItem>
                            <SelectItem value="Rock">Rock</SelectItem>
                            <SelectItem value="Country">Country</SelectItem>
                            <SelectItem value="R&B and Soul">R&B and Soul</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full md:w-1/3 rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="ROI" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full md:w-1/3 rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="Trending" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full md:w-1/3 rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="Sorting" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="us">Newest</SelectItem>
                            <SelectItem value="eu">Most popular</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Price Range */}
                <div className="lg:w-1/2 w-10/12 flex flex-col space-y-3">
                    <p className="font-medium text-sm">Price Range</p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            min={0}
                            max={1000}
                            step={10}
                            className="flex-1"
                        />

                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
                <Button size="lg">
                    Apply Filters
                </Button>
            </div>

            {/* songs */}
            <div className="w-11/12 mx-auto flex flex-col gap-4 my-10">
                <FeaturedSongs />
                <FeaturedSongs />
                <FeaturedSongs />
                <FeaturedSongs />
                <Pagination />
            </div>
            <div>
                <Revolution />
            </div>
        </main>
    );
}
