using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Net;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {
        private CloudBlobContainer _container;

        public ImagesController()
        {
            CloudStorageAccount storageAccount = new CloudStorageAccount(
                new Microsoft.WindowsAzure.Storage.Auth.StorageCredentials(             
                "aztkedxstorage", 
                "ImjkHjqvoDBSNviDcEtXr+dCTkQ8gqukHagkHbO/TWWkQbZm5fCm2fw7DT165gg4ZrU1Yj1sfgU0Wyfu46QjQw=="), true);
            
            CloudBlobClient client = storageAccount.CreateCloudBlobClient();
            _container = client.GetContainerReference("savedImages");
        }

        public async Task<IActionResult> PostImage([FromBody]ImagePostRequest request)
        {
            CloudBlockBlob blob = _container.GetBlockBlobReference($"{request.Id}.{request.EncodingFormat}");
            HttpWebRequest aReq = (HttpWebRequest) WebRequest.Create(request.URL);
            HttpWebResponse aRes = (await aReq.GetResponseAsync()) as HttpWebResponse;
            var stream = aRes.GetResponseStream();
            await blob.UploadFromStreamAsync(stream);
            stream.Dispose();
            return Ok();
        }
    }

    public class ImagePostRequest
    {
        public string URL{get;set;}
        public string Id{get;set;}
        public string EncodingFormat{get;set;}
    }
}