import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams{
   listingId?:string;
}

const page = async({params}:{params:IParams}) => {

   const currentUser = await getCurrentUser();
   const listing = await getListingById(params);
   

   if(!listing){
      return(
         <ClientOnly>
            <EmptyState />
         </ClientOnly>
      )
   }

   return (
      <ClientOnly>
         <ListingClient
            listing={ {...listing, createdAt: listing.createdAt.toISOString()} }
            currentUser={currentUser}
         />

      </ClientOnly>
   )
}

export default page