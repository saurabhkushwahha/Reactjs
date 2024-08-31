import conf from '../conf.js'
import { Client, Databases, ID,Storage,Query } from "appwrite";

export class Service{
    client= new Client()
    databases;
    bucket;
    constructor() 
    {
        this.client
                .setEndpoint(conf.appWriteID)
                .setProject(conf.appWriteProjectID);
        this.databases= new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
      async createPost({title,slug,content,featuredImge,status,userId})
      {
         try {
           return await this.databases.createDocument(
            conf.appWriteDatabaseID,
            conf.appWriteCollectionID,
            slug,
            {
                title,
                content,
                featuredImge,
                status,
                userId,
            }
        ) 
         } catch (error) {
            console.log("AppWrite Service :: createPost :: error",error)
         }

      }
      async updatePost(slug,{title,content,featuredImge,status})
      {
         try {
            return await this.databases.updateDocument(
                 conf.appWriteDatabaseID,
                 conf.appWriteCollectionID,
                 slug,
                 {
                    title,
                    content,
                    featuredImge,
                    status
                 }
            ) 
         } catch (error) {
            console.log("AppWrite Service :: updatePost :: error",error)
         }
      }
      async deletePost(slug)
      {
        try {
          await this.databases.deleteDocument(
              conf.appWriteDatabaseID,
              conf.appWriteCollectionID,
         )    
         return true;
        } catch (error) {
         console.log("AppWrite Service :: deletePost :: error",error)
            return false;
        }
      }
      async getPost(slug)   
      {
        try {
           return await this.databases.getDocument(
                  conf.appWriteDatabaseID,
                  conf.appWriteCollectionID,
                  slug,
           ) 
        } catch (error) {
          console.log("AppWrite Service :: getPost :: error",error)
           return false;
        }
      }
      async getPosts(queries=[Query.equal("status","active")])
      {
         try {
           return await this.databases.listDocuments(
               conf.appWriteDatabaseID,
               conf.appWriteCollectionID,
               queries
           ) 
         } catch (error) {
            console.log("AppWrite Service :: getPosts :: error",error)
            return false;
         
         }
      }
      
        // file services like upload file & delete file
     
      async uploadfile(file)   
      {
         try {
            return await this.bucket.createFile(
                 conf.appWriteBucketID,
                 ID.unique(),
                  file,
            ) 
         } catch (error) {
            console.log("AppWrite Service :: upload file :: error",error)
           return false;
         }
      }
      async deletefile(fileID)
      {
         try {
            await this.bucket.deleteFile(
                conf.appWriteBucketID,
                fileID,
            ) 
            return true;
         } catch (error) {
            console.log("AppWrite Service :: deleteFile :: error",error)
            return false;            
        }
      }
      getfilePreview(fileId)
      {
         return this.bucket.getFilePreview(
             conf.appWriteBucketID,
              fileId,
         )
      }
}

const service= new Service

export default service