import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../front/layouts/AppLayout'
import { MainImage } from '../front/components/MainImage'
import { MainHeading } from '../Front/components/MainHeading'
import { BenefitsSection } from '../front/components/BenefitsSection'
import { FeatureCardsSection } from '../Front/components/FeatureCardsSection'
import { PathCardsSection } from '../Front/components/PathCardsSection'
import { VisionSection } from '../Front/components/VisionSection'
import { CommunitySection } from '../Front/components/CommunitySection'
import { NewFeaturesSection } from '../Front/components/NewFeaturesSection'
import { useState } from 'react'
import { Footer } from "../front/components/Footer"
import { Box, useColorModeValue } from '@chakra-ui/react'


export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>Home - XRPL.org</title>
      </Head>
      <Box h="2vh" bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')} borderColor="transparent" />
      <MainImage image="https://xrpl.org/assets/img/home-hero.svg" leftImage="https://xrpl.org/img/backgrounds/home-purple.svg" />
      <MainHeading image="https://xrpl.org/img/backgrounds/home-green.svg" />
      <BenefitsSection title="Discover Benefits" subTitle="Why developers choose the XRP Ledger" />
      <FeatureCardsSection title="Explore Advanced Features" subTitle="Activate the power of the XRP Ledger and find the building blocks for your next innovation" />
      <PathCardsSection title="Get Started" subTitle="Choose a path to start building on the XRPL" />
      <VisionSection title="Our Shared Vision for XRPL’s Future" subTitle="Together, we're building the greenest infrastructure to drive blockchain innovation that doesn't sacrifice utility or performance, to bring the developer community's vision to life." />
      <NewFeaturesSection title="Preview New Features" subTitle="Explore what the community is building to enable new features and use cases on XRPL" />
      <Box h="50px" bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')} borderColor="transparent" />
      <CommunitySection title="Get Involved" subTitle="XRPL.org: by the community, for the community" description="XRPL.org: is a community-driven resource by and for developers who build on the XRP Ledger (XRPL)." />  
      <Box h="200px" bg={useColorModeValue('rgba(255,255,255,0.7)', 'rgba(17,17,18,255.7)')} borderColor="transparent" />
      <Footer logo="https://xrpl.org/assets/img/XRPLedger_DevPortal-white.svg" /> 
    </AppLayout>
  )
}
