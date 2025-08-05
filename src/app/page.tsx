'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Lightbulb, 
  TrendingUp, 
  Award,
  ArrowRight,
  Calendar,
  MessageSquare,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Newspaper',
      description: 'Student stories, research highlights, and opinion pieces from around the globe.',
      color: 'bg-brand-primary'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by students, for students, fostering collaboration and growth.',
      color: 'bg-brand-secondary'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting students from every continent with opportunities and resources.',
      color: 'bg-brand-tertiary'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Showcasing student-led projects and groundbreaking research initiatives.',
      color: 'bg-accent-primary'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Student Readers' },
    { number: '100+', label: 'Countries' },
    { number: '500+', label: 'Articles Published' },
    { number: '200+', label: 'Contributors' }
  ];

  const recentArticles = [
    {
      title: 'Breaking Barriers: Student-Led Climate Research',
      excerpt: 'International students develop innovative solutions to combat climate change.',
      category: 'Research',
      author: 'Sarah Johnson',
      date: '2 days ago'
    },
    {
      title: 'From Campus to Capitol: Student Advocacy Success',
      excerpt: 'How student organizations are making real policy changes worldwide.',
      category: 'News',
      author: 'Michael Chen',
      date: '4 days ago'
    },
    {
      title: 'The Future of Remote Learning: Student Perspectives',
      excerpt: 'Students share experiences and propose improvements for hybrid education.',
      category: 'Opinion',
      author: 'Emily Rodriguez',
      date: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-paper-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary text-pure-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Daily Scholar
            </h1>
            <p className="text-xl md:text-2xl text-brand-tertiary mb-8 max-w-3xl mx-auto">
              A global student-driven platform combining digital journalism with opportunity sharing, 
              research collaboration, and community empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-primary hover:bg-accent-secondary text-pure-white">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Articles
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pure-white text-pure-white hover:bg-pure-white hover:text-brand-primary">
                <Link href="/join">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-paper-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
              Why Choose The Daily Scholar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a newspaper—we're a movement dedicated to amplifying student voices 
              and creating opportunities for the next generation of leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-8 w-8 text-pure-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                Latest from Our Community
              </h2>
              <p className="text-xl text-gray-600">
                Discover the most recent stories and insights from student contributors worldwide.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-brand-secondary text-pure-white">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-accent-primary mr-1" />
                      Featured
                    </div>
                  </div>
                  <CardTitle className="text-xl text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-r from-accent-primary to-accent-secondary text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Global Community
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a writer, researcher, or passionate about making a difference—there's a place for you at The Daily Scholar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Contribute Articles</h3>
                <p>Share your stories, research, and insights with our global audience.</p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Campaigns</h3>
                <p>Participate in meaningful initiatives and make a real impact.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Find Opportunities</h3>
                <p>Discover scholarships, events, and career opportunities worldwide.</p>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-pure-white text-accent-primary hover:bg-gray-100">
              <Link href="/join">
                <Users className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-deep-charcoal text-paper-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter and never miss important updates, opportunities, or inspiring stories from our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-pure-white placeholder-gray-400 focus:outline-none focus:border-brand-tertiary"
            />
            <Button className="bg-brand-primary hover:bg-brand-secondary text-pure-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}