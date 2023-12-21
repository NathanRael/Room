import { useState } from "react";

export default function Rate({rate, heartColor, isFill, type = '', toggleFavorite, fontSize = '_link'}){
    return (
        <>
            <div 
                className={`d-flex gap-2 rate  text-light ${fontSize}`}
                type={type}
                onClick={toggleFavorite}
            >

                <i className={`bi bi-star${ isFill ? '-fill' : ''} ${heartColor}`} ></i>
                {rate != null ? rate : 'not rated'}
            </div>
        </>
    );
}