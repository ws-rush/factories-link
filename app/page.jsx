"use client";

import Head from "next/head";
import { CallToAction } from "@/components/about/CallToAction";
import { Hero } from "@/components/about/Hero";
import { Breadcrumb } from "@/components/about/Breadcrumb";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Factories Link</title>
        <meta name="description" content="Connect World" />
      </Head>
      <main>
        <Breadcrumb />
        <Hero />
        <Values />
        <Team />
        <CallToAction />
      </main>
    </>
  );
}
