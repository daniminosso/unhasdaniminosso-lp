"use client";

import React from "react";
import { SlideShow } from "@/components/SlideShow";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import * as Icons from "lucide-react";
import { ServiceData } from "./[slug]/utils";
import { Badge } from "@/components/ui/badge";
import { AgendarButtonFinal } from "@/components/AgendarButtonFinal";

interface ServicePageProps {
    data: ServiceData
}

export const ServicePage: React.FC<ServicePageProps> = ({
  data
}) => {
    const { title, description, benefits, images, price } = data;
    return (
        <main className="mx-auto py-12 space-y-8">
            {/* 1) Slideshow */}
            <SlideShow images={images} />
        
            {/* 2) Descrição */}
            <section id="sobre" className="py-20 bg-white/30">
                <div className="container px-4 md:px-6 text-center space-y-8 mb-16">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-light playfair"
                        style={{ color: "#4A2F1A" }}
                    >
                        {title}
                    </h2>
                    <p
                        className="mx-auto max-w-2xl montserrat text-base md:text-lg"
                        style={{ color: "#333333" }}
                    >
                        {description}
                    </p>
                </div>
        
                {/* 3) Cards dinâmicos */}
                <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                {benefits.map((b) => {
                    const Icon = (Icons as any)[b.icon];
                    return (
                        <Card className="border-0 shadow-lg bg-white/80" key={b.title}>
                            <CardHeader className="text-center">
                            <div
                                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: "#B48E69" }}
                            >
                                <Icon className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="montserrat" style={{ color: "#4A2F1A" }}>
                                {b.title}
                            </CardTitle>
                            <CardDescription className="montserrat" style={{ color: "#333333" }}>
                                {b.description}
                            </CardDescription>
                            </CardHeader>
                        </Card>
                    );
                })}
                </div>
            </section>
        
            {/* 4) Valor */}
            <section id="valores" className="py-12 bg-[#F4E9DE]">
                <div className="container px-4 md:px-6 max-w-full md:max-w-4xl mx-auto text-center">
                    {/* Heading em Playfair */}
                    <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-light playfair"
                    style={{ color: "#4A2F1A" }}
                    >
                    Valores
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {price.map(({ description, price: valor }, idx) => (
                        <div
                        key={description}
                        className={`
                            bg-white rounded-lg
                            ${idx === 0 ? "border-2 border-[#B48E69] shadow-lg p-8 md:col-span-3" 
                                        : "border border-gray-200 shadow-sm p-6"}
                            flex flex-col justify-between
                        `}
                        >
                        <p
                            className="text-lg font-medium montserrat"
                            style={{ color: "#4A2F1A" }}
                        >
                            {description}
                        </p>

                        <Badge
                            className={`
                            montserrat inline-block self-center rounded
                            ${idx === 0 
                                ? "text-2xl font-bold px-6 py-3" 
                                : "text-base font-semibold px-4 py-2"}
                            `}
                            style={{ backgroundColor: "#B48E69", color: "#FFF" }}
                        >
                            R$ {valor},00
                        </Badge>
                        </div>
                    ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <AgendarButtonFinal message={data.message ?? undefined} />
                    </div>
                </div>
            </section>
        </main>
    )
}