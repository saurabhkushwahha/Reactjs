import conf from '../conf.js'
import { Client, Databases, ID,Storage,Query } from "appwrite";

export class Service{
    client= new Client()
    databases;
    bucket;
    constructor() 
    {
        this.client
                .setEndpoint(conf.appWriteUrl)
                .setProject(conf.appWriteProjectUrl);
        this.databases= new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
      async createPost({title,slug,content,featuredImge,status,userId})
      {
         try {
           return await this.databases.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
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
            throw error;
         }

      }
      async updatePost(slug,{title,content,featuredImge,status})
      {
         try {
            return await this.databases.updateDocument(
                 conf.appWriteDatabaseId,
                 conf.appWriteCollectionId,
                 slug,
                 {
                    title,
                    content,
                    featuredImge,
                    status
                 }
            ) 
         } catch (error) {
            throw error;   
         }
      }
      async deletePost(slug)
      {
        try {
          await this.databases.deleteDocument(
              conf.appWriteDatabaseId,
              conf.appWriteCollectionId,
         )    
         return true;
        } catch (error) {
            throw error;
            return false;
        }
      }
      async getPost(slug)   
      {
        try {
           return await this.databases.getDocument(
                  conf.appWriteDatabaseId,
                  conf.appWriteCollectionId,
                  slug,
           ) 
        } catch (error) {
           throw error; 
           return false;
        }
      }
      async getPosts(queries=[Query.equal("status","active")])
      {
         try {
           return await this.databases.listDocuments(
               conf.appWriteDatabaseId,
               conf.appWriteCollectionId,
               queries
           ) 
         } catch (error) {
            throw error;
            return false;
         
         }
      }
      
        // file services like upload file & delete file
     
      async uploadfile(file)   
      {
         try {
            return await this.bucket.createFile(
                 conf.appWriteBucketId,
                 ID.unique(),
                  file,
            ) 
         } catch (error) {
           throw error;
           return false;
         }
      }
      async deletefile(fileID)
      {
         try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileID,
            ) 
            return true;
         } catch (error) {
            throw error;
            return false;            
        }
      }
      getfilePreview(fileId)
      {
         return this.bucket.getFilePreview(
             conf.appWriteBucketId,
              fileId,
         )
      }
}

const service= new Service

export default service