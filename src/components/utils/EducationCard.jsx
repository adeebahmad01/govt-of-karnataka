import React from "react";
import img from "../../images/bitmap-copy-2.png"

const EducationCard = ({heading}) => {
  return (
    <>
      <div className="rounded py-3 border-0">
      <div className="card_education shadow bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" viewBox="0 0 86 80">
          <defs>
            <filter id="5lmh9y07fa">
              <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.509804 0 0 0 0 0.454902 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
            </filter>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g>
              <g>
                <g>
                  <g filter="url(#5lmh9y07fa)" transform="translate(-130 -1821) translate(70 1481) translate(0 163) translate(0 147)">
                    <g fill="#FFF" fillRule="nonzero">
                      <path d="M59.817 70.525c-.817-.208-1.644.294-1.847 1.114l-1.524 6.128c-.206.822.293 1.652 1.11 1.858.123.032.248.046.37.046.683 0 1.303-.464 1.477-1.16l1.524-6.128c.204-.82-.293-1.652-1.11-1.858zM42.464 42.9c.184 0 .368-.036.54-.109l15.57-6.51c.722-.301 1.065-1.138.766-1.867-.298-.73-1.13-1.074-1.85-.775l-15.026 6.283L2.83 23.355v-.475c0-.79-.634-1.43-1.415-1.43-.782 0-1.416.64-1.416 1.43v1.43c0 .579.345 1.1.875 1.321l41.048 17.16c.173.073.357.109.54.109zM59.299 57.367c-.349-.718-1.203-1.015-1.914-.659-2.713 1.363-7.246 2.948-13.657 3.164V46.851c0-.801-.64-1.452-1.429-1.452s-1.429.65-1.429 1.452v13.008c-17.744-.574-23.47-11.493-24.293-13.31V36.69c0-.8-.64-1.451-1.43-1.451-.788 0-1.428.65-1.428 1.451v10.16c0 .185.034.368.101.54.249.63 6.33 15.427 28.48 15.427 7.74 0 13.165-1.907 16.352-3.507.708-.355.998-1.224.647-1.943zM64.021 72.01c-.843 0-1.524.687-1.524 1.532v4.597c0 .845.681 1.532 1.524 1.532s1.524-.687 1.524-1.532v-4.597c0-.845-.68-1.532-1.524-1.532z" transform="translate(60 30)"/>
                      <path d="M83.939 21.143c-.787 0-1.423.632-1.423 1.41v.465L65.444 29.98v-2.548l19.038-7.806c.532-.217.88-.731.88-1.302 0-.571-.348-1.084-.878-1.303L43.224.107c-.348-.143-.738-.143-1.087 0L.88 17.022C.347 17.24 0 17.753 0 18.324c0 .57.347 1.085.88 1.302l41.257 16.915c.174.072.359.107.544.107.185 0 .37-.035.543-.107l14.919-6.116c.727-.296 1.071-1.12.77-1.84-.3-.72-1.132-1.06-1.857-.763L42.68 33.714 5.143 18.324l37.538-15.39 37.537 15.39-16.334 6.697-15.645-5.788c.083-.293.133-.595.133-.909 0-2.37-2.5-4.229-5.691-4.229s-5.69 1.858-5.69 4.229c0 2.37 2.499 4.229 5.69 4.229 1.424 0 2.694-.385 3.682-1.005l16.235 6.006V62.28c-1.651.585-2.845 2.134-2.845 3.97 0 2.33 1.915 4.228 4.268 4.228 2.353 0 4.268-1.897 4.268-4.229 0-1.835-1.193-3.384-2.845-3.969v-8c4.084-3.055 5.548-7.123 5.612-7.304.051-.148.078-.304.078-.46v-9.867c0-.778-.636-1.41-1.422-1.41-.787 0-1.423.632-1.423 1.41v9.606c-.246.598-1.101 2.44-2.845 4.258V33.03l19.037-7.763c.533-.217.88-.733.88-1.304v-1.41c0-.777-.635-1.409-1.422-1.409zm-41.258-1.41c-1.737 0-2.846-.834-2.846-1.409 0-.575 1.108-1.41 2.846-1.41 1.737 0 2.845.835 2.845 1.41s-1.108 1.41-2.845 1.41zM64.02 67.66c-.785 0-1.423-.633-1.423-1.41 0-.777.638-1.41 1.423-1.41s1.423.633 1.423 1.41c0 .777-.638 1.41-1.423 1.41zM70.073 71.638c-.205-.82-1.034-1.32-1.848-1.113-.817.205-1.314 1.037-1.11 1.858l1.525 6.128c.174.696.794 1.16 1.477 1.16.122 0 .247-.014.37-.046.817-.205 1.314-1.036 1.11-1.859l-1.524-6.128z" transform="translate(60 30)"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <br/>
        <h2 className="font-weight-bold education_card_heading">{heading}</h2>
        <p className="mb-4">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt  Holistic Personal Development.
        </p>
        <button className="btn shadow btn-theme btn-outline-theme btn-warning text-white py-2 px-5"> Learn More </button>
      </div>
    </div>
    <div className="col-10 offset-2">
      <img src={img} className="w-100" alt=""/>
    </div>
    </>
  );
};

export default EducationCard;
