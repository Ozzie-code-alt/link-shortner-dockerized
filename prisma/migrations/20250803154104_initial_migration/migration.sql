-- CreateTable
CREATE TABLE "public"."Link" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Click" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "country" TEXT,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_slug_key" ON "public"."Link"("slug");

-- AddForeignKey
ALTER TABLE "public"."Click" ADD CONSTRAINT "Click_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "public"."Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
