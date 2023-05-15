import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavouriteListings";
import FavouritesClient from "./FavouritesClient";


const FavouritesPage = async ()=>{

   const listings = await getFavoriteListings();
   const currentUser = await getCurrentUser();

   if(listings.length===0)

   return(
      <ClientOnly>
         <EmptyState
            title='No favorites found'
            subtitle="Looks like you have no favorite listings"
         />
      </ClientOnly>
   )

   return(
      <ClientOnly>
         <FavouritesClient
            listings={listings}
            currentUser={currentUser}
         />
      </ClientOnly>
   )
}

export default FavouritesPage;