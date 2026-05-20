

"use client";
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';

const AddDestinationPage = () => {
   
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const destination = Object.fromEntries(formData.entries());

    try {
        const res = await fetch('http://localhost:5000/destinations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(destination)
        });

        if (!res.ok) {
            throw new Error("Failed to send data to server");
        }

        const data = await res.json();
        console.log("Success:", data);
        alert("Destination added successfully!");
    } catch (error) {
        console.error("Error connecting to server:", error);
        alert("Server is not ok");
    }
}
    return (
        <div className="max-w-4xl mx-auto my-10 p-6 md:p-10 shadow-2xl rounded-3xl border bg-white">
            <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Add New Destination</h1>
            
            <form onSubmit={onSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Destination Name */}
                    <div className="md:col-span-2 ">
                        <TextField name="destinationName" isRequired className="flex flex-col gap-2">
                            <Label className="text-sm font-bold text-gray-600 ml-1">Destination Name</Label>
                            <Input 
                                placeholder="e.g. Bali Paradise" 
                                variant="flat"
                                className="rounded-xl bg-gray-100 hover:bg-gray-200 focus:bg-white transition-all p-2" 
                            />
                            <FieldError className="text-xs text-red-500" />
                        </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" isRequired className="flex flex-col gap-2">
                        <Label className="text-sm font-bold text-gray-600 ml-1">Country</Label>
                        <Input 
                            placeholder="e.g. Indonesia" 
                            variant="flat"
                            className="rounded-xl bg-gray-100 p-2" 
                        />
                        <FieldError />
                    </TextField>

                    {/* Category */}
                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-bold text-gray-600 ml-1">Category</Label>
                        <Select
                            name="category"
                            isRequired
                            variant="flat"
                            placeholder="Select category"
                            className="w-full"
                        >
                            <Select.Trigger className="rounded-xl bg-gray-100 w-full p-2 text-left">
                                <Select.Value />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Beach">Beach</ListBox.Item>
                                    <ListBox.Item id="Mountain">Mountain</ListBox.Item>
                                    <ListBox.Item id="City">City</ListBox.Item>
                                    <ListBox.Item id="Adventure">Adventure</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="price" type="number" isRequired className="flex flex-col gap-2">
                        <Label className="text-sm font-bold text-gray-600 ml-1">Price (USD)</Label>
                        <Input 
                            type="number" 
                            variant="flat" 
                            placeholder="1299" 
                            className="rounded-xl bg-gray-100 p-2" 
                        />
                    </TextField>

                    {/* Duration */}
                    <TextField name="duration" isRequired className="flex flex-col gap-2">
                        <Label className="text-sm font-bold text-gray-600 ml-1">Duration</Label>
                        <Input 
                            placeholder="7 Days / 6 Nights" 
                            variant="flat" 
                            className="rounded-xl bg-gray-100 p-2" 
                        />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                        <TextField name="departureDate" type="date" isRequired className="flex flex-col gap-2">
                            <Label className="text-sm font-bold text-gray-600 ml-1">Departure Date</Label>
                            <Input 
                                type="date" 
                                variant="flat" 
                                className="rounded-xl bg-gray-100 p-2" 
                            />
                        </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired className="flex flex-col gap-2">
                            <Label className="text-sm font-bold text-gray-600 ml-1">Image URL</Label>
                            <Input 
                                type="url" 
                                variant="flat" 
                                placeholder="https://example.com/image.jpg" 
                                className="rounded-xl bg-gray-100 p-2" 
                            />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired className="flex flex-col gap-2">
                            <Label className="text-sm font-bold text-gray-600 ml-1">Description</Label>
                            <TextArea
                                variant="flat"
                                placeholder="Describe the travel experience..."
                                className="rounded-xl bg-gray-100 min-h-[120px] p-2"
                            />
                        </TextField>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-7 rounded-2xl shadow-lg transition-transform active:scale-95"
                    >
                        Add Travel Package
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddDestinationPage;