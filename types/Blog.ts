export type Blogs = Blog[]

export interface Blog {
  name: string
  title: string
  href: string
  slug: string
  uuid: string
  feature_image: string
  custom_excerpt: string
  meta_description: string
  created_at: string
  reading_time: string
  html: string
}
