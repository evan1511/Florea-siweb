-- CreateTable
CREATE TABLE "MostProducts" (
    "id_product" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama_produk" VARCHAR(255) NOT NULL,
    "harga" INTEGER NOT NULL,
    "jumlah_beli" INTEGER NOT NULL,

    CONSTRAINT "MostProducts_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "Products" (
    "id_product" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nama_produk" VARCHAR(255) NOT NULL,
    "harga" INTEGER NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "id_product" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "nama_produk" VARCHAR(255) NOT NULL,
    "harga" INTEGER NOT NULL,
    "jumlah_beli" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue" (
    "month" VARCHAR(4) NOT NULL,
    "revenue" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "revenue_month_key" ON "revenue"("month");

-- AddForeignKey
ALTER TABLE "MostProducts" ADD CONSTRAINT "MostProducts_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;
