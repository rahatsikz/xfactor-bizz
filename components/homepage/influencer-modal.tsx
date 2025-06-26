"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sparkles,
  Instagram,
  Youtube,
  MapPin,
  Users,
  Phone,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactNumber: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  instagramProfile: z.string().url({
    message: "Please enter a valid Instagram URL.",
  }),
  numberOfFollowers: z.string().min(1, {
    message: "Number of followers is required.",
  }),
  influencerCategory: z.string({
    required_error: "Please select an influencer category.",
  }),
  youtubeChannel: z.string().optional(),
  youtubeSubscribers: z.string().optional(),
  city: z.string().optional(),
});

const influencerCategories = [
  "Fashion & Beauty",
  "Fitness & Health",
  "Food & Cooking",
  "Travel & Lifestyle",
  "Technology",
  "Gaming",
  "Education",
  "Entertainment",
  "Business & Finance",
  "Art & Design",
];

export default function InfluencerModal() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNumber: "",
      instagramProfile: "",
      numberOfFollowers: "",
      influencerCategory: "",
      youtubeChannel: "",
      youtubeSubscribers: "",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-primary text-white font-semibold !px-8 py-3  shadow-lg hover:shadow-xl transition-all duration-300'>
          <Sparkles className='h-5 w-5' />
          Start Your Journey
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] bg-gradient-to-tl dark:from-slate-900 to-background border-0 shadow-2xl p-0'>
        <ScrollArea className='max-h-[90vh]'>
          <DialogHeader className='text-center px-6 2xl:px-7 pt-11 pb-6'>
            <DialogTitle className='text-2xl xl:leading-0 font-bold text-foreground'>
              Let&#39;s Influence Together!
            </DialogTitle>
            <DialogDescription className='text-sm text-foreground/70 xl:mt-2.5'>
              Start your journey today and connect with brands that matter
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-5 px-6 2xl:px-7'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                        <Users className='h-4 w-4' />
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your full name'
                          className='!bg-background border-border rounded-sm'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='contactNumber'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                        <Phone className='h-4 w-4' />
                        Contact Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your phone number'
                          className='!bg-background border-border rounded-sm'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='instagramProfile'
                render={({ field }) => (
                  <FormItem className='gap-3'>
                    <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                      <Instagram className='h-4 w-4' />
                      Instagram Profile Link
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://instagram.com/yourusername'
                        className='!bg-background border-border rounded-sm'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
                <FormField
                  control={form.control}
                  name='numberOfFollowers'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium'>
                        Number of Followers
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='e.g. 10000'
                          type='number'
                          className='!bg-background border-border rounded-sm'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='influencerCategory'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium'>
                        Influencer Category
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='border-border rounded-sm w-full !bg-background'>
                            <SelectValue placeholder='Select your category' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {influencerCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='border-t pt-6 flex flex-col gap-1.5'>
                <h3 className='text-base font-semibold text-foreground/80 mb-4 flex items-center gap-2.5'>
                  <Youtube className='h-5 w-5 text-red-500' />
                  YouTube Details (Optional)
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
                  <FormField
                    control={form.control}
                    name='youtubeChannel'
                    render={({ field }) => (
                      <FormItem className='gap-3'>
                        <FormLabel className='pl-1 text-foreground/80 font-medium'>
                          YouTube Channel Link
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='https://youtube.com/@yourchannel'
                            className='!bg-background border-border rounded-sm'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='youtubeSubscribers'
                    render={({ field }) => (
                      <FormItem className='gap-3'>
                        <FormLabel className='pl-1 text-foreground/80 font-medium'>
                          Number of Subscribers
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='e.g., 5000'
                            type='number'
                            className='!bg-background border-border rounded-sm'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem className='gap-3'>
                    <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                      <MapPin className='h-4 w-4' />
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your city'
                        className='!bg-background border-border rounded-sm'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex gap-5 mt-1 pb-6'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setOpen(false)}
                  className='flex-1 border-slate-300 text-foreground/80 hover:bg-slate-50'
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='flex-1 bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <Sparkles className='mr-2 h-4 w-4' />
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
