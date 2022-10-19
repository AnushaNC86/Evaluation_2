import { useState } from "react";
import "./dashboradPages.css";

const HomeBody = () => {
  const [contents, setContents] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const SiteData = [
    {
      siteName: "Facebook",
      url: "www.facebook.com",
      sector: "Social Media",
      userName: "John",
      sitePassword: "abcd123",
      notes: "",
      icon: require("../../assets/icons/Facebook.png"),
    },
    {
      siteName: "YouTube",
      url: "www.youtube.com",
      sector: "Social Media",
      userName: "John",
      sitePassword: "abcd123",
      notes: "",
      icon: require("../../assets/icons/YouTube.png"),
    },

    {
      siteName: "Linkedin",
      url: "www.linkedin.com",
      sector: "Social Media",
      userName: "john",
      sitePassword: "abcd111",
      notes: "",
      icon: require("../../assets/icons/LinkdIn.png"),
    },
  ];

  if (localStorage.getItem("siteData") === null || undefined) {
    localStorage.setItem("user Data", JSON.stringify(SiteData));
  }

  const data = JSON.parse(localStorage.getItem("user Data") || "[]");

  console.log(data);

  return (
    <div>
      <div className="homeBodyContainer">
        <div className="bodyHeading">Sites</div>
        <div className="bodySearchAndAdd">
          <div className="bodySearch">
            <input
              type="text"
              className="searchInput"
              name="search"
              placeholder="Search"
            />
            <img
              src={require("../../assets/icons/search.png")}
              alt=""
              className="searchIcon"
            />
          </div>
          <div className="bodyAdd">
            <img
              src={require("../../assets/icons/close_btn.png")}
              alt=""
              onClick={showModal}
            />
          </div>
        </div>
      </div>
      {contents ? (
        <div className="addNewContainer">
          <div className="addNew">
            <div className="addNewSite">
              Please Click on the “+” symbol <br />
              to add sites
            </div>
          </div>
        </div>
      ) : (
        <div className="addedSitesContainer">
          <div className="addedSitesHead">
            <div className="socialMedia">Social Media</div>
            <div className="socialMediaCount">{data.length}</div>
            <div className="dropDownMedia">
              <img src={require("../../assets/icons/drop_down.png")} alt="" />
            </div>
          </div>
          <div className="siteContents">
            {data.map((ele: any) => {
              return (
                <div key={ele.siteName} className="cardContents">
                  <div className="cardUpper">
                    <div className="cardLogo">
                      {" "}
                      {ele.icon !== "" ? (
                        <img src={ele.icon} alt="" />
                      ) : (
                        <img
                          src={require("../../assets/icons/pass_logo.png")}
                          height="50px"
                          style={{
                            backgroundPosition: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </div>

                    <div className="cardCopyTitle">
                      <div className="cardTitle"> {ele.siteName}</div>
                      <div className="cardCopy">
                        <img
                          src={require("../../assets/icons/copy.png")}
                          alt="copy"
                        />
                        <div>Copy Password</div>
                      </div>
                    </div>
                  </div>
                  <div className="cardLink">{ele.url}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {modal && (
        <>
          {/* <Modal modelState={getModalState} /> */}
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis suscipit officia recusandae, eveniet
                quaerat assumenda id fugit, dignissimos maxime non natus placeat
                illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur
                possimus quaerat ipsum quos molestiae rem aspernatur dicta
                tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={showModal}>
                CLOSE
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBody;
