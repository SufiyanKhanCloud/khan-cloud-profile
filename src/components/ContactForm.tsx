import { useState } from "react";
import { Mail, Send, CheckCircle, User, AtSign, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto bg-gradient-card border-border/50 shadow-medium">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline" 
            className="mt-4"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto bg-gradient-card border-border/50 shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Get In Touch
        </CardTitle>
        <CardDescription>
          Let's discuss DevOps, cloud technologies, or potential collaborations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Name
              </Label>
              <Input id="name" placeholder="Your name" required className="transition-all duration-300 focus:shadow-medium" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <AtSign className="h-4 w-4" />
                Email
              </Label>
              <Input id="email" type="email" placeholder="your@email.com" required className="transition-all duration-300 focus:shadow-medium" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Subject
            </Label>
            <Input id="subject" placeholder="What's this about?" required className="transition-all duration-300 focus:shadow-medium" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </Label>
            <Textarea 
              id="message" 
              placeholder="Tell me about your project or just say hi!" 
              rows={4}
              required 
              className="transition-all duration-300 focus:shadow-medium resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full transition-all duration-300 hover:shadow-glow" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}