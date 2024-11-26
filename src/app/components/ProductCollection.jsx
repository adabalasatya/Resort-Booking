"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Circles } from "react-loader-spinner";

const ProductCollection = () => {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const collectionHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://resort-booking-three.vercel.app/api/admin/add-product`);
      const newData = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText); 
      }

      console.log("productData:", newData);
      setCollections(newData.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collectionHandler();
  }, []);

  return (
    <div className="productSection">
      <div className="shelfArrows">
        <button className="arrowBtn leftArrow">{"<"}</button>
        <button className="arrowBtn rightArrow">{">"}</button>
      </div>
      {collections.length ? (
        collections.map((item) => (
          <div key={item._id} className="shelfCard">
            <div className="cardTop">
              <Image
               
                src={item.image}
                alt={item.title}
                className="cardImage"
                width={300}
                height={200}
                layout="fit" 
                objectFit="fit" 
              />
            </div>
            <div className="cardContent">
              <h3 className="cardTitle">{item.title}</h3>
              <p className="cardPrice">Price: Rs. {item.price}</p>
              <div className="cardAmenities">
                <h4>Amenities:</h4>
                {item.amen.map((amenity, i) => (
                  <span key={i} className="amenityItem">
                    * {amenity}
                  </span>
                ))}
              </div>
              <Link href={`/detail/${item._id}`}>
                <button className="detailBtn">View Details</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="loaderContainer">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCollection;