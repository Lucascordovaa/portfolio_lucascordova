"use client";

import { formSchema } from "@/lib/schemas";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

import { z } from "zod";

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong.",
                })
            }
            toast({
                variant: "default",
                title: "Success",
                description: "Your message has been sent.",
            })


        }
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong." + error,
            })
        } finally {
            form.reset();
        }
    }

    return (
        <div  data-aos="fade-left" className="mr-[10%] ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white text-2xl">First Name</FormLabel>
                                        <FormControl >
                                            <Input placeholder="Your first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white text-2xl">Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-2xl">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white text-2xl">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="message"
                                            placeholder="Type in your message here"
                                            className="min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="ml-auto rounded-full  text-black font-bold bg-gradient-to-r from-teal-300 to-blue-500 transition-colors duration-300 ease-in-out hover:text-white ">
                        Submit
                    </Button>
                </form>
            </Form></div>



    );
}