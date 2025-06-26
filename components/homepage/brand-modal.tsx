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
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "Brand/Company name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  marketingBudget: z.string({
    required_error: "Please select your marketing budget range.",
  }),
  requirements: z.string().optional(),
});

const budgetRanges = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Let's discuss",
];

export default function BrandModal() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: "",
      phone: "",
      email: "",
      city: "",
      marketingBudget: "",
      requirements: "",
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
        <Button
          variant={"outline"}
          className='bg-primary text-white font-semibold !px-8 py-3  shadow-lg hover:shadow-xl transition-all duration-300'
        >
          <Rocket className='h-5 w-5' />
          Partner With Us
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] bg-gradient-to-tl dark:from-slate-900 to-background border-0 shadow-2xl p-0'>
        <ScrollArea className='max-h-[90vh]'>
          <DialogHeader className='text-center px-6 2xl:px-7 pt-11 pb-6'>
            <DialogTitle className='text-2xl xl:leading-0 font-bold text-foreground'>
              Let&#39;s Grow Your Brand Together!
            </DialogTitle>
            <DialogDescription className='text-sm text-foreground/70 mt-0 xl:mt-2.5'>
              Connect with top influencers and amplify your brand&#39;s reach
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-5 md:gap-4 px-6 2xl:px-7'
            >
              <FormField
                control={form.control}
                name='brandName'
                render={({ field }) => (
                  <FormItem className='gap-3'>
                    <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                      <Building2 className='h-4 w-4' />
                      Brand/Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your brand or company name'
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
                  name='phone'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                        <Phone className='h-4 w-4' />
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your contact number'
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
                  name='email'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                        <Mail className='h-4 w-4' />
                        Email ID
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email address'
                          type='email'
                          className='!bg-background border-border rounded-sm'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4'>
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

                <FormField
                  control={form.control}
                  name='marketingBudget'
                  render={({ field }) => (
                    <FormItem className='gap-3'>
                      <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                        <DollarSign className='h-4 w-4' />
                        Your Marketing Budget
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='!bg-background border-border rounded-sm w-full'>
                            <SelectValue placeholder='Select your budget range' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='requirements'
                render={({ field }) => (
                  <FormItem className='gap-3'>
                    <FormLabel className='pl-1 text-foreground/80 font-medium flex items-center gap-2'>
                      <MessageSquare className='h-4 w-4' />
                      Tell Us More About Your Requirements
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Describe your business, target audience, campaign goals, or any specific requirements...'
                        className='!bg-background border-border rounded-sm min-h-[100px] resize-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='bg-muted/40 py-4 px-6 rounded-lg border border-border'>
                <p className='text-sm text-foreground/80 font-medium mb-2'>
                  What happens next?
                </p>
                <ul className='text-sm text-foreground/70 space-y-1'>
                  <li>
                    • Our team will review your requirements within 24 hours
                  </li>
                  <li>
                    • We&apos;ll match you with relevant influencers in your
                    niche
                  </li>
                  <li>• You&apos;ll receive a customized campaign proposal</li>
                </ul>
              </div>

              <div className='flex gap-3 mt-1 pb-6'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setOpen(false)}
                  className='flex-1 '
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='flex-1 bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <Rocket className='mr-2 h-4 w-4' />
                  Submit Request
                </Button>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
