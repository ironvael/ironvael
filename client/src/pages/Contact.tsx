import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type ContactMessageRequest } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const mutation = useCreateContactMessage();
  
  const form = useForm<ContactMessageRequest>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: ContactMessageRequest) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary text-white pt-32 pb-20">
        <div className="container-padding">
          <SectionHeader 
            label="Contact Us"
            title="Let's start the conversation."
            description="Whether you have a specific project in mind or just want to learn more about how we work, we'd love to hear from you."
            light
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="rounded-none h-12 border-border focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="rounded-none h-12 border-border focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Organization" {...field} value={field.value || ''} className="rounded-none h-12 border-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" {...field} className="rounded-none min-h-[150px] border-border focus:border-primary resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto rounded-none px-10 h-12 text-base font-semibold"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Office Info */}
            <div className="bg-secondary p-10 space-y-10">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Offices</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 h-10 w-10 flex items-center justify-center border border-border">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">New York (HQ)</h4>
                    <p className="text-muted-foreground">
                      10 Hudson Yards, Suite 3400<br/>
                      New York, NY 10001<br/>
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 h-10 w-10 flex items-center justify-center border border-border">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">London</h4>
                    <p className="text-muted-foreground">
                      25 Canada Square<br/>
                      Canary Wharf, London E14 5LQ<br/>
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-primary font-medium">+1 (212) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-primary font-medium">inquiries@ironvael.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
