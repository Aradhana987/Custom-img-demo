import React from 'react';
import { ErrorMessage } from 'formik';

export const setItem = (key, value) => {
    localStorage.setItem(key, value);
};

export const getItem = (key) => {
    return localStorage.getItem(key);
};

export const removeItem = (key) => {
    return localStorage.removeItem(key);
};
export const ErrorMSG = (error) => {
    return (
        <small className="text-danger ">
            <ErrorMessage name={error}></ErrorMessage>
        </small>
    );
};

export const transferDataAddToCart = (data) => {
    return data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            price: item.finalAmount ? item.finalAmount : item.amount ? item.amount : item.price,
            quantity: item.quantity,
            attributes: {
                item_price: item.amount ? item.amount : item.attributes.item_price,
                ingridents: item.extraItem
                    ? item.extraItem.map((d) => {
                          return { item_ingridient: d.id };
                      })
                    : item.item_ingridient,
            },
        };
    });
};
