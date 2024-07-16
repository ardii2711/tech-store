import { useForm } from "@formspree/react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ThankYou from "@/components/thank-you";
import Layout from "@/components/layout";

function Contact() {
  const [state, handleSubmit] = useForm("mvgpgwjk");
  if (state.succeeded) {
    return <ThankYou />;
  }

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
              Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Enter the subject" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Enter your message" required />
              </div>
              <Button type="submit" className="w-full" disabled={state.submitting}>
                {state.submitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-4">Store Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-muted-foreground">
                  123 Main Street
                  <br />
                  Anytown, USA 12345
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">info@techstore.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
