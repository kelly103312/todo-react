import React, { useState } from "react";
function useLocalStorage(itemName,initialValue){
    {/*
      itemName: parametro de tipo string, que permite saber el item del local storage en el cual se guardará los cambios realizados
      initialValue: valor inicial del atributo
   */}
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 3000);
    });
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export {useLocalStorage};