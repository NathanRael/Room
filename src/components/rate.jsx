import { useState } from "react";

export default function Rate({rate, heartColor, isFill, type = '', toggleFavorite}){
    return (
        <>
            <div 
                className="d-flex gap-2 rate _link text-light" 
                type={type}
                onClick={toggleFavorite}
            >

                <i className={`bi bi-heart${ isFill ? '-fill' : ''} ${heartColor}`} ></i>
                {rate}
            </div>
        </>
    );
}