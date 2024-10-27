import React from "react";
import "./TutorialsLayout.css";
import { useEffect, useState } from "react";
// import htmlTutorial from "./htmlTutorial";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TutorialSidebar from "./TutorialSidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const TutorialsLayout = (props) => {
  const [copy, setCopy] = useState(false);
  const tutorialsTitle = props.tutorial;
  const TutorialName = props.tutorialName;
  return (
    <div className="tutorials-layout  scrollbar-none scrollbar-thumb-blue-500 px-4 py-8 w-9/12 b">
     
      <div className="tutorials-sidebar-main">
        <TutorialSidebar tutorialName={TutorialName}/>
      </div>
     <div className="content-body">
     <div className="main-wrapper rounded-2xl bg-[#004AAD]">
        {tutorialsTitle.map((section, index) => (
          <div key={index}>
            <h1 className="main-heading">{section.mainHeading} <hr /></h1>
            
            {section.subHeadings.map((subHeading) => (
              <div>
                <div className="sub-wrapper rounded-2xl" key={subHeading.id}>
                  <h2 className="sub-heading">{subHeading.subHeading}</h2>
                  <p className="paragraph">{subHeading.subHeadingParagraph} </p>
                 
                 {subHeading.note?<p className="note">
                  <hr style={{border:"1px solid black"}}/>
                    <strong>Note:</strong> {subHeading.note}
                  </p>:""}
                  {subHeading.codeExample?<div className="example-code">
                    <pre>
                      <div className="bg-[#3a404d] rounded-md overflow-hidden">
                        <div className="flex justify-between px-4 text-white text-xs items-center">
                          <p className="text-sm">Example Code</p>
                          {copy ? (
                            <button className="py-1 inline-flex items-center gap-1">
                              <span className="text-base mt-1">
                                <ion-icon name="checkmark-sharp"></ion-icon>
                              </span>
                              Copied!
                            </button>
                          ) : (
                            <button
                              className="py-1 inline-flex items-center gap-1"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  subHeading.codeExample
                                );
                                setCopy(true);
                                setTimeout(() => {
                                  setCopy(false);
                                }, 3000);
                              }}
                            >
                              <span className="text-base mt-1">
                                <ion-icon name="clipboard-outline"></ion-icon>
                              </span>
                              Copy Code
                            </button>
                          )}
                        </div>
                        <SyntaxHighlighter
                          language="python"
                          style={atomOneDark}
                          customStyle={{ padding: "25px" ,width:"100%"}}
                          wrapLongLines={true}
                        >
                          {subHeading.codeExample}
                        </SyntaxHighlighter>
                      </div>
                    </pre>
                  </div>:""}
                </div>

                <table border="1">
                  <thead>
                    {/* <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                    </tr> */}
                  </thead>
                  <tbody>
                    {subHeading.tableData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Name}</td>
                        <td>{row.Age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               { subHeading.diagramLink?<p>
                  Diagram Link:{""}
                  {/* <a href={subHeading.diagramLink}>{subHeading.diagramLink}</a> */}
                  <img src={subHeading.diagramLink} alt="" />
                </p>:""}
               {subHeading.videoLink? <p>
                  Video Link:{" "}
                  <a href={subHeading.videoLink}>{subHeading.videoLink}</a>
                </p>:""}
                <ul>
                  {subHeading.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="tutorials-layout-footer">
        <Footer/>
      </div>
      <Outlet/>
     </div>
      
      
    </div>
  );
};

export default TutorialsLayout;
