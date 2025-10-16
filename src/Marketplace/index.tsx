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
import Revolution from "@/Homepage/Revolution";
import Pagination from "@/Shared/Pagination";

export default function SongFilters() {
    const [priceRange, setPriceRange] = useState([100, 700]);

    return (
        <main className=" mt-10">
            <h2 className="text-4xl w-6/12  mx-auto font-semibold">Discover Song Assets</h2>
            {/* filters */}

            <div className=" flex flex-col justify-center items-center mt-10 space-y-6">
                {/* Search & Dropdown Filters */}
                <div className="w-6/12 flex gap-3">
                    <Input
                        type="text"
                        placeholder="Search.."
                        className="rounded-full w-full bg-white border-none shadow-md"
                    />

                    <Select>
                        <SelectTrigger className="rounded-full bg-white border-none shadow-md">
                            <SelectValue placeholder="Genre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pop">Pop</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="hiphop">Hip-hop</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="ROI" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="Trending" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="rounded-full bg-white border-none shadow-md font-medium">
                            <SelectValue placeholder="Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="us">US</SelectItem>
                            <SelectItem value="eu">EU</SelectItem>
                            <SelectItem value="asia">Asia</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Price Range */}
                <div className="w-1/2 space-y-3">
                    <p className="font-medium text-sm">Price Range</p>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            min={0}
                            max={1000}
                            step={10}
                            className="flex-1"
                        />
                        <Button >
                            Apply Filters
                        </Button>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* songs */}
            <div className="w-11/12 mx-auto flex flex-col gap-4 my-10">
                <FeaturedSongs />
                <FeaturedSongs />
                <FeaturedSongs />
                <FeaturedSongs />
                <Pagination/>
            </div>
            <div>
                <Revolution/>
            </div>
        </main>
    );
}
