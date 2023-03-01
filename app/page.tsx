"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { Children } from "react";
import "../styles/globals.css";
import { ChildProp } from "next/dist/server/app-render";
import StoryCard from "./components/StoryCard";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Test",
};

const PlaceHolderStories = [
  {
    title: "Sample Story Title 1",
    story:
      "As a xxx i want xxxx so that i can xxxx nt xxxx so that i canxx xxnt xxxx so that i can xxxx nt xxxx so that i can xxxxnt xxxx so that i can xxxx",
    criterias: [
      "The thing which has to be done to validate the thing being done",
      "the other thing which must be done",
    ],
  },

  {
    title: "Sample Story Title 2",
    story:
      "Different Stuff than the first one xxxx nt xxxx so that i canxx xxnt xxxx so that i can xxxx nt xxxx so that i can xxxxnt xxxx so that i can xxxx",
    criterias: [
      "different critereas also",
      "The thing which has to be done to validate the thing being done",
      "the other thing which must be done",
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="flex h-1/3 items-top  py-2">
        <div className="w-full  px-20 text-center">
          <div className="">
            <h1 className=" text-3xl">Backlog</h1>
            {PlaceHolderStories.map((story) => (
              <StoryCard
                title={story.title}
                story={story.story}
                criterias={story.criterias}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex  h-1/3 items-top  py-2">
        <div className="w-full  px-20 text-center">
          <h1 className=" text-3xl">In Progress</h1>
          {PlaceHolderStories.map((story) => (
            <StoryCard
              title={story.title}
              story={story.story}
              criterias={story.criterias}
            />
          ))}
        </div>
      </div>
      <div className="flex  h-1/3 items-top  py-2">
        <div className="w-full  px-20 text-center">
          <h1 className=" text-3xl">Complete</h1>
          {PlaceHolderStories.map((story) => (
            <StoryCard
              title={story.title}
              story={story.story}
              criterias={story.criterias}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
