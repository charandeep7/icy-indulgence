-- CreateIndex
CREATE INDEX `unique_flavor_type_title` ON `Flavors`(`type`, `title`);

-- CreateIndex
CREATE INDEX `unique_search_query` ON `SearchQuery`(`query`);
