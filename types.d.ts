export interface IBlogPost extends Document {
   title: string;
   description: string;
   slug: string;
   thumbNail: string;
   content: string;
   createdAt?: Date;
   lastModified?: Date;
   author?: {
      name: string;
      profileImageUrl: string;
   },
   _id: string;
 }