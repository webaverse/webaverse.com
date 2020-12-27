import React, { useEffect, useState } from 'react'
import createHistory from 'history/createBrowserHistory'
import { AppContext } from "./libs/contextLib";
import { InitialStateValues } from "./constants/InitialStateValues";
import storage from "./functions/Storage";
import { getCreators, getBooths, getStores, getInventoryForCreator, getProfileForCreator, getBalance } from "./functions/UIStateFunctions.js";

import Routes from "./routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import './assets/css/custom.css';
import './assets/css/content.css';

const App = () => {
  const [globalState, setGlobalState] = useState(InitialStateValues);

  const init = async () => {
    const localStorageState = await getLocalStorage();
    if (localStorageState) {
      setGlobalState(localStorageState);
    }

    const creators = await getCreators(0, globalState);
    const booths = await getBooths(0, globalState);
    const stores = await getStores();

    const tokens = [];
    const creatorProfiles = {};
    const tokensPromise = await Promise.all(creators.creators[0].map(async creator => {
      const inventory = await getInventoryForCreator(creator.address.toLowerCase(), 0, true, globalState);
      const profile = await getProfileForCreator(creator.address, globalState);
      const balance = await getBalance(creator.address);

      creatorProfiles[creator.address.toLowerCase()] = { ...profile.creatorProfiles[creator.address], balance };
      return tokens.push(...inventory.creatorInventories[creator.address.toLowerCase()][0]);
    }));

    const sortedTokens = tokens.sort((a, b) => a.id - b.id);

    setGlobalState({
                  ...localStorageState,
                  creatorInventories: creators.creatorInventories,
                  creatorBooths: booths.creatorBooths,
                  creatorProfiles: creatorProfiles,
                  stores: stores,
                  tokens: sortedTokens
                });
  }

  const updateLocalStorage = async (globalState) => {
    if (globalState.logout === "true") {
       setGlobalState({ ...globalState, logout: "false", address: "", name: "", avatarUrl: "", avatarPreview: "", avatarFileName: "" });
      await storage.set('globalState', JSON.stringify(globalState));
      await storage.set('loginToken', null);
    } else if (globalState.refresh === "true") {
      init();
    } else if (globalState.address) {
      const localStorageState = await getLocalStorage();
      await storage.set('globalState', globalState);
    }
  }

  const getLocalStorage = async () => {
    const storageState = await storage.get('globalState');

    if (storageState) {
      return storageState;
    } else {
      return;
    }
  } 

  React.useEffect(() => {
    updateLocalStorage(globalState);
  }, [globalState]);

  React.useEffect(() => {
    init();
  }, []);


  return (
        <AppContext.Provider value={{ globalState, setGlobalState }}>
          <NavBar />
          <Routes />
          <Footer />
        </AppContext.Provider>
  )
}

export default App