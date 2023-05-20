import React from 'react'
import { motion } from "framer-motion";
import "./dash.css"

const Dash = () => {
  return (
    <section>
        <div className='blob'>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(233, 100, 67)"}}></stop>
                <stop offset="100%" style={{stopColor: "rgb(144, 78, 149)"}}></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              
              <animate attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M413,322Q422,394,355,430Q288,466,216.5,449Q145,432,111.5,372Q78,312,88.5,253.5Q99,195,136.5,156.5Q174,118,230,83.5Q286,49,327.5,99.5Q369,150,386.5,200Q404,250,413,322Z;
                  M398.5,304.5Q380,359,335.5,419.5Q291,480,219,454Q147,428,91,378Q35,328,42.5,252.5Q50,177,98,123.5Q146,70,212,81Q278,92,353.5,96Q429,100,423,175Q417,250,398.5,304.5Z;
                  M446,312.5Q399,375,338.5,391.5Q278,408,212.5,418Q147,428,120,367.5Q93,307,73,242.5Q53,178,91.5,110Q130,42,205.5,58Q281,74,338,101Q395,128,444,189Q493,250,446,312.5Z;
                  M394.5,307Q385,364,338,424.5Q291,485,223.5,449Q156,413,126.5,359.5Q97,306,59.5,236.5Q22,167,88.5,126Q155,85,220,69.5Q285,54,345,87Q405,120,404.5,185Q404,250,394.5,307Z;
                  M427.5,301Q371,352,330.5,413Q290,474,225.5,439Q161,404,116,359.5Q71,315,50.5,242.5Q30,170,98,137Q166,104,225.5,78.5Q285,53,354,79Q423,105,453.5,177.5Q484,250,427.5,301Z;
                  M443.5,315Q404,380,343,405Q282,430,215.5,427Q149,424,97,374.5Q45,325,70.5,259.5Q96,194,129,146Q162,98,219,99Q276,100,338.5,111.5Q401,123,442,186.5Q483,250,443.5,315Z;
                  M425.5,306Q383,362,332,393.5Q281,425,203,445.5Q125,466,117,383.5Q109,301,77.5,238.5Q46,176,99.5,129Q153,82,217,79Q281,76,361,83Q441,90,454.5,170Q468,250,425.5,306Z;
                  M470.5,330Q441,410,365.5,443Q290,476,228.5,434.5Q167,393,102.5,360Q38,327,36.5,249.5Q35,172,94.5,127.5Q154,83,219,71.5Q284,60,353,83Q422,106,461,178Q500,250,470.5,330Z;
                  M430.5,301Q371,352,328.5,402Q286,452,212.5,447.5Q139,443,123.5,372.5Q108,302,69,236Q30,170,84.5,113.5Q139,57,215.5,34.5Q292,12,336.5,76Q381,140,435.5,195Q490,250,430.5,301Z;
                  M413,322Q422,394,355,430Q288,466,216.5,449Q145,432,111.5,372Q78,312,88.5,253.5Q99,195,136.5,156.5Q174,118,230,83.5Q286,49,327.5,99.5Q369,150,386.5,200Q404,250,413,322Z"
              ></animate> {/* Adding the same value with the first and end */}

            </path>
          </svg>
        </div>
        {/* Glow Effect */}

        <div className='blob'>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(233, 100, 67)"}}></stop>
                <stop offset="100%" style={{stopColor: "rgb(144, 78, 149)"}}></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              
              <animate attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M413,322Q422,394,355,430Q288,466,216.5,449Q145,432,111.5,372Q78,312,88.5,253.5Q99,195,136.5,156.5Q174,118,230,83.5Q286,49,327.5,99.5Q369,150,386.5,200Q404,250,413,322Z;
                  M398.5,304.5Q380,359,335.5,419.5Q291,480,219,454Q147,428,91,378Q35,328,42.5,252.5Q50,177,98,123.5Q146,70,212,81Q278,92,353.5,96Q429,100,423,175Q417,250,398.5,304.5Z;
                  M446,312.5Q399,375,338.5,391.5Q278,408,212.5,418Q147,428,120,367.5Q93,307,73,242.5Q53,178,91.5,110Q130,42,205.5,58Q281,74,338,101Q395,128,444,189Q493,250,446,312.5Z;
                  M394.5,307Q385,364,338,424.5Q291,485,223.5,449Q156,413,126.5,359.5Q97,306,59.5,236.5Q22,167,88.5,126Q155,85,220,69.5Q285,54,345,87Q405,120,404.5,185Q404,250,394.5,307Z;
                  M427.5,301Q371,352,330.5,413Q290,474,225.5,439Q161,404,116,359.5Q71,315,50.5,242.5Q30,170,98,137Q166,104,225.5,78.5Q285,53,354,79Q423,105,453.5,177.5Q484,250,427.5,301Z;
                  M443.5,315Q404,380,343,405Q282,430,215.5,427Q149,424,97,374.5Q45,325,70.5,259.5Q96,194,129,146Q162,98,219,99Q276,100,338.5,111.5Q401,123,442,186.5Q483,250,443.5,315Z;
                  M425.5,306Q383,362,332,393.5Q281,425,203,445.5Q125,466,117,383.5Q109,301,77.5,238.5Q46,176,99.5,129Q153,82,217,79Q281,76,361,83Q441,90,454.5,170Q468,250,425.5,306Z;
                  M470.5,330Q441,410,365.5,443Q290,476,228.5,434.5Q167,393,102.5,360Q38,327,36.5,249.5Q35,172,94.5,127.5Q154,83,219,71.5Q284,60,353,83Q422,106,461,178Q500,250,470.5,330Z;
                  M430.5,301Q371,352,328.5,402Q286,452,212.5,447.5Q139,443,123.5,372.5Q108,302,69,236Q30,170,84.5,113.5Q139,57,215.5,34.5Q292,12,336.5,76Q381,140,435.5,195Q490,250,430.5,301Z;
                  M413,322Q422,394,355,430Q288,466,216.5,449Q145,432,111.5,372Q78,312,88.5,253.5Q99,195,136.5,156.5Q174,118,230,83.5Q286,49,327.5,99.5Q369,150,386.5,200Q404,250,413,322Z"
              ></animate> {/* Adding the same value with the first and end */}

            </path>
          </svg>
        </div>


    </section>
  )
}

export default Dash