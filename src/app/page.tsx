"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div className="">
          <Button variant="elevated">Button</Button>
        </div>
        <div className="">
          <Input placeholder="I am an input" />
        </div>
        <div className="">
          <Progress value={50} />
        </div>
        <div className="">
          <Textarea placeholder="Type your message here" />
        </div>
        <div className="">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
