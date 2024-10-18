-- CreateTable
CREATE TABLE "Website" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomepageSlider" (
    "id" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "smallImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "oneLiner" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomepageSlider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomepageVideo" (
    "id" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomepageVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "manageCommunityFacility" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "featuredProperty" BOOLEAN NOT NULL,
    "pointOfInterest" TEXT[],
    "apartmentFacility" TEXT[],
    "sliderImage" TEXT[],
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FloorPlan" (
    "id" SERIAL NOT NULL,
    "planType" TEXT NOT NULL,
    "areaSize" DOUBLE PRECISION NOT NULL,
    "rooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "balcony" BOOLEAN NOT NULL DEFAULT true,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT,
    "details" JSONB,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "FloorPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentPlan" (
    "id" SERIAL NOT NULL,
    "planType" TEXT NOT NULL,
    "downPayment" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "installment" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "interestRate" DOUBLE PRECISION,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "PaymentPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopularCommunity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "view" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PopularCommunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "thumbImage" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "SliderImage" TEXT[],
    "heading" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetaTags" (
    "id" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaKeyword" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetaTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GetCallback" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GetCallback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactUs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyEnquiry" (
    "id" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "PropertyEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogEnquiry" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "blogId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrochureEnquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BrochureEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentPlanEnquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentPlanEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FloorPlanEnquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FloorPlanEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsitePages" (
    "websiteId" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,

    CONSTRAINT "WebsitePages_pkey" PRIMARY KEY ("websiteId","pageId")
);

-- CreateTable
CREATE TABLE "WebsiteTeams" (
    "websiteId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "WebsiteTeams_pkey" PRIMARY KEY ("websiteId","teamId")
);

-- CreateTable
CREATE TABLE "WebsiteHomepageSliders" (
    "websiteId" TEXT NOT NULL,
    "homepageSliderId" TEXT NOT NULL,

    CONSTRAINT "WebsiteHomepageSliders_pkey" PRIMARY KEY ("websiteId","homepageSliderId")
);

-- CreateTable
CREATE TABLE "WebsiteHomepageVideos" (
    "websiteId" TEXT NOT NULL,
    "homepageVideoId" TEXT NOT NULL,

    CONSTRAINT "WebsiteHomepageVideos_pkey" PRIMARY KEY ("websiteId","homepageVideoId")
);

-- CreateTable
CREATE TABLE "WebsiteCommunities" (
    "websiteId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,

    CONSTRAINT "WebsiteCommunities_pkey" PRIMARY KEY ("websiteId","communityId")
);

-- CreateTable
CREATE TABLE "WebsitePopularCommunities" (
    "websiteId" TEXT NOT NULL,
    "popularCommunityId" TEXT NOT NULL,

    CONSTRAINT "WebsitePopularCommunities_pkey" PRIMARY KEY ("websiteId","popularCommunityId")
);

-- CreateTable
CREATE TABLE "WebsiteProperties" (
    "websiteId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "WebsiteProperties_pkey" PRIMARY KEY ("websiteId","propertyId")
);

-- CreateTable
CREATE TABLE "WebsitesGetCallback" (
    "websiteId" TEXT NOT NULL,
    "getCallbackId" TEXT NOT NULL,

    CONSTRAINT "WebsitesGetCallback_pkey" PRIMARY KEY ("websiteId","getCallbackId")
);

-- CreateTable
CREATE TABLE "WebsitesMetaTags" (
    "websiteId" TEXT NOT NULL,
    "metaTagsId" TEXT NOT NULL,

    CONSTRAINT "WebsitesMetaTags_pkey" PRIMARY KEY ("websiteId","metaTagsId")
);

-- CreateTable
CREATE TABLE "WebsiteBlogs" (
    "websiteId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "WebsiteBlogs_pkey" PRIMARY KEY ("websiteId","blogId")
);

-- CreateTable
CREATE TABLE "WebsiteDevelopers" (
    "websiteId" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,

    CONSTRAINT "WebsiteDevelopers_pkey" PRIMARY KEY ("websiteId","developerId")
);

-- CreateTable
CREATE TABLE "WebsiteServices" (
    "websiteId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "WebsiteServices_pkey" PRIMARY KEY ("websiteId","serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Website_url_key" ON "Website"("url");

-- CreateIndex
CREATE INDEX "Website_name_idx" ON "Website"("name");

-- CreateIndex
CREATE INDEX "Page_name_idx" ON "Page"("name");

-- CreateIndex
CREATE INDEX "PropertyEnquiry_countryCode_idx" ON "PropertyEnquiry"("countryCode");

-- CreateIndex
CREATE INDEX "WebsitePages_websiteId_idx" ON "WebsitePages"("websiteId");

-- CreateIndex
CREATE INDEX "WebsitePages_pageId_idx" ON "WebsitePages"("pageId");

-- CreateIndex
CREATE INDEX "WebsiteTeams_websiteId_idx" ON "WebsiteTeams"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteHomepageSliders_websiteId_idx" ON "WebsiteHomepageSliders"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteHomepageVideos_websiteId_idx" ON "WebsiteHomepageVideos"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteCommunities_websiteId_idx" ON "WebsiteCommunities"("websiteId");

-- CreateIndex
CREATE INDEX "WebsitePopularCommunities_websiteId_idx" ON "WebsitePopularCommunities"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteProperties_websiteId_idx" ON "WebsiteProperties"("websiteId");

-- CreateIndex
CREATE INDEX "WebsitesGetCallback_websiteId_idx" ON "WebsitesGetCallback"("websiteId");

-- CreateIndex
CREATE INDEX "WebsitesMetaTags_websiteId_idx" ON "WebsitesMetaTags"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteBlogs_websiteId_idx" ON "WebsiteBlogs"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteDevelopers_websiteId_idx" ON "WebsiteDevelopers"("websiteId");

-- CreateIndex
CREATE INDEX "WebsiteServices_websiteId_idx" ON "WebsiteServices"("websiteId");

-- AddForeignKey
ALTER TABLE "FloorPlan" ADD CONSTRAINT "FloorPlan_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentPlan" ADD CONSTRAINT "PaymentPlan_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyEnquiry" ADD CONSTRAINT "PropertyEnquiry_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogEnquiry" ADD CONSTRAINT "BlogEnquiry_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitePages" ADD CONSTRAINT "WebsitePages_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitePages" ADD CONSTRAINT "WebsitePages_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTeams" ADD CONSTRAINT "WebsiteTeams_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTeams" ADD CONSTRAINT "WebsiteTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteHomepageSliders" ADD CONSTRAINT "WebsiteHomepageSliders_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteHomepageSliders" ADD CONSTRAINT "WebsiteHomepageSliders_homepageSliderId_fkey" FOREIGN KEY ("homepageSliderId") REFERENCES "HomepageSlider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteHomepageVideos" ADD CONSTRAINT "WebsiteHomepageVideos_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteHomepageVideos" ADD CONSTRAINT "WebsiteHomepageVideos_homepageVideoId_fkey" FOREIGN KEY ("homepageVideoId") REFERENCES "HomepageVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteCommunities" ADD CONSTRAINT "WebsiteCommunities_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteCommunities" ADD CONSTRAINT "WebsiteCommunities_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitePopularCommunities" ADD CONSTRAINT "WebsitePopularCommunities_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitePopularCommunities" ADD CONSTRAINT "WebsitePopularCommunities_popularCommunityId_fkey" FOREIGN KEY ("popularCommunityId") REFERENCES "PopularCommunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteProperties" ADD CONSTRAINT "WebsiteProperties_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteProperties" ADD CONSTRAINT "WebsiteProperties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitesGetCallback" ADD CONSTRAINT "WebsitesGetCallback_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitesGetCallback" ADD CONSTRAINT "WebsitesGetCallback_getCallbackId_fkey" FOREIGN KEY ("getCallbackId") REFERENCES "GetCallback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitesMetaTags" ADD CONSTRAINT "WebsitesMetaTags_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsitesMetaTags" ADD CONSTRAINT "WebsitesMetaTags_metaTagsId_fkey" FOREIGN KEY ("metaTagsId") REFERENCES "MetaTags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteBlogs" ADD CONSTRAINT "WebsiteBlogs_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteBlogs" ADD CONSTRAINT "WebsiteBlogs_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteDevelopers" ADD CONSTRAINT "WebsiteDevelopers_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteDevelopers" ADD CONSTRAINT "WebsiteDevelopers_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteServices" ADD CONSTRAINT "WebsiteServices_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteServices" ADD CONSTRAINT "WebsiteServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
