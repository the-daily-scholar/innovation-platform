'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@thedailyscholar.com', 'editorial@thedailyscholar.com'],
      description: 'For general inquiries and editorial submissions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567'],
      description: 'Monday - Friday, 9:00 AM - 6:00 PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Scholar Street', 'Academic City, AC 12345'],
      description: 'Our main editorial office'
    }
  ];

  const teamContacts = [
    {
      name: 'Sarah Johnson',
      role: 'Editor-in-Chief',
      email: 'sarah.johnson@thedailyscholar.com',
      department: 'Editorial'
    },
    {
      name: 'Michael Chen',
      role: 'Outreach Coordinator',
      email: 'michael.chen@thedailyscholar.com',
      department: 'Partnerships'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Technical Lead',
      email: 'emily.rodriguez@thedailyscholar.com',
      department: 'Development'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-paper-white">
      {/* Hero Section */}
      <div className="bg-brand-primary text-pure-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-brand-tertiary mb-8">
              Get in touch with The Daily Scholar team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-primary flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Have a question, suggestion, or want to contribute? We'd love to hear from you!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="article-submission">Article Submission</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Please provide as much detail as possible so we can best assist you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-pure-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <info.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-deep-charcoal mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Contacts */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-brand-primary flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Team Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamContacts.map((member, index) => (
                    <div key={index} className="border-l-4 border-brand-secondary pl-4">
                      <h4 className="font-semibold text-deep-charcoal">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-brand-primary">{member.email}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {member.department}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-accent-primary/10 border-accent-primary">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent-primary" />
                  <div>
                    <p className="font-semibold text-deep-charcoal">Response Time</p>
                    <p className="text-sm text-gray-600">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}