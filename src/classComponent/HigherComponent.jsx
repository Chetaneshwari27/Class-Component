import React from "react";
import { Button } from "primereact/button";
import Image from '../assets/image.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from "@material-ui/core";
import MessageButton from '../assets/message.png'
import Saved from '../assets/saved.svg'
import Contract from '../assets/Contract.png'
import Next from '../assets/next.png'
import Cancel from '../assets/cancel.svg'

const Boxes = {
    width: "889px",
    height: "280px",
    top: "244px",
    display: "flex",
}
const BoxGrid = {
    flex: 1,
    border: "1px solid lightgrey",
    padding: "10px",
    margin: "10px",
    width: "243px",
    height: "230px",
    top: "27px",
    opacity: "0.699999988079071px",
    backgroundColor: "#E6EBEF",
    borderRadius: "5px"
}
const BoxPara = {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "23px",
    letterSpacing: "0px",
    textAlign: "left"
}
const image = {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
}
const imageText = {
    position: "relative",
    top: "0", bottom: "30px",
    lineHeight: "0",
    marginLeft: "10px"
}
const skillTitle = {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: '500',
    lineHeight: "24px",
    letterSpacing: "-0.5px",
    textAlign: "left"
}
const skillButton = {
    marginRight: '5px',
    backgroundColor: '#166489',
    color: 'white',
    border: "none",
    width: "84px",
    height: "30px"
}
const Heading1 = {
    fontFamily: "Rubik",
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "26px",
    letterSpacing: "0px",
    textAlign: "left",
}
const hireButton = {
    width: "160px",
    height: "45px",
    marginTop: "10px",
    marginLeft: "705px",
    backgroundColor: "#2378D1",
    color: "white",
    border: "none",
    borderRadius: "10px",
}
const proposalBox = {
    width: "889px",
    height: "648px",
    marginTop: "25px"
}
const proposal = {
    fontFamily: "Inter",
    fontSize: "24px",
    fontweight: "400",
    lineHeight: "29px",
    letterSpacing: "1px",
    textAlign: "left",
    marginTop: "20px"
}
const proposalPara = {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#535353"
}
const proposalParaDiv = {
    width: "889px",
    height: "600px",
    marginTop: "-17px",
    opacity: "0.699999988079071px"
}
const secondContainer = {
    width: "381px",
    height: "462px",
    left: "959px",
    border: "1px solid grey",
    marginLeft: "20px",
    borderRadius: "5px"
}
const insideSecondContainer = {
    padding: "20px"
}
const onlineStyle = {
    paddingTop: "0",
    marginTop: "0",
    background: "#2378D1",
    color: "white",
    fontSize: "15px",
    textAlign: "center",
    borderRadius: "25px"
}
const JohnMehta = {
    fontFamily: "Inter",
    fontSize: "25px",
    fontWeight: "500",
    lineHeight: "30px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#0A0A0A",
    marginTop: "5px"
}
const lastBox = {
    width: "927px",
    height: "755px",
    top: "1447px",
    marginTop: "30px",
    border: "1px solid grey",
    borderRadius: "5px"
}
const insidelastBox = {
    width: "870px",
    height: "695px",
    top: "1477px",
    left: "19.9990234375px",
    padding: "10px"
}

class HigherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFullParagraph: false,
            selectedDate: null,
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({
            selectedDate: date,
        });
    }

    toggleParagraph = () => {
        this.setState((prevState) => ({
            showFullParagraph: !prevState.showFullParagraph,
        }));
    };

    handleClick = () => {
        // Button click logic
    };

    render() {
        const { showFullParagraph } = this.state;
        const skills = ['PHP', 'SQL', 'Android', 'Java', 'SQL', 'MEARN']


        return (
            <>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "929px", height: "1300px", border: "1px solid grey", borderRadius: "5px" }}>
                        <div style={{ width: "889px", height: "214px" }}>
                            <h3 style={Heading1}>
                                Expert Tradestation, MetaTrader, Ninjatrader, TradingView
                            </h3>
                            <div
                                style={{
                                    width: "889px",
                                    height: showFullParagraph ? "auto" : "100px",
                                    top: "38px",
                                    opacity: "0.699999988079071",
                                    overflow: "hidden",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "Roboto",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "25px",
                                        letterSpacing: "0px",
                                        textAlign: "left",
                                    }}
                                >
                                    More than 22 year experiences in the software development industry. Involved in many client software development projects, applying both technology and management skills. Gained a great deal of knowledge, tactics, and problem-solving, management, and technical skills. Find below for the main technologies and knowledge areas breakdown with more details…{" "}
                                    {showFullParagraph ? null : (
                                        <span
                                            style={{ color: "#2378D1", cursor: "pointer" }}
                                            onClick={this.toggleParagraph} >
                                            read more
                                        </span>
                                    )}
                                </p>
                            </div>
                            {showFullParagraph && (
                                <div style={{ marginTop: "10px" }}>
                                    <p
                                        style={{
                                            fontFamily: "Roboto",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            lineHeight: "25px",
                                            letterSpacing: "0px",
                                            textAlign: "left",
                                        }}
                                    >
                                        Full paragraph content goes here...
                                    </p>
                                </div>
                            )}
                            <Button
                                style={hireButton}
                                onClick={this.handleClick}>
                                HIRE
                            </Button>
                        </div>
                        <p style={{ fontFamily: "Inter", fontSize: "20px", fontWeight: "400", lineHeight: "24px", letterSpacing: "-0.5px", textAlign: "left" }}>
                            Client’s Feedback
                        </p>
                        <div style={Boxes}>
                            <div style={BoxGrid}>
                                <div style={{ borderTop: "4px solid #B07CF0", borderRadius: "10px", margin: "0 auto", width: "50%" }}></div>
                                <p style={BoxPara}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div style={{ display: "flex" }}>
                                    <img style={image} src={Image} alt="img"></img>
                                    <div style={imageText}>
                                        <h4>Rahul Sharma</h4>
                                        <p style={{ color: "grey" }}>Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div style={BoxGrid}>
                                <div style={{ borderTop: "4px solid #C46E20", borderRadius: "10px", margin: "0 auto", width: "50%" }}></div>
                                <p style={BoxPara}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div style={{ display: "flex" }}>
                                    <img style={image} src={Image} alt="image"></img>
                                    <div style={imageText}>
                                        <h4>Rahul Sharma</h4>
                                        <p style={{ color: "grey" }}>Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div style={BoxGrid}>
                                <div style={{ padding: "0", borderTop: "4px solid #FF6060", borderRadius: "10px", margin: "0 auto", width: "50%" }}></div>
                                <p style={BoxPara}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div style={{ display: "flex" }}>
                                    <img style={image} src={Image} alt="image"></img>
                                    <div style={imageText}>
                                        <h4>Rahul Sharma</h4>
                                        <p style={{ color: "grey" }}>Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ skillTitle }}>Skills</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {skills.map((skill, index) => (
                                <Button key={index} style={skillButton}>
                                    {skill}
                                </Button>
                            ))}
                        </div>
                        <div style={proposalBox}>
                            <div style={{ display: "flex" }}>
                                <p style={proposal}>Proposals Details</p>
                                <div style={{ marginLeft: "610px" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>$10.00/hr</p>
                                </div>
                            </div>
                            <div style={proposalParaDiv}>
                                <p style={proposalPara}>Hi, <span style={{ marginLeft: "780px" }}>Proposed Bid</span><br /><br />I just deeply researched your requirements.<br />
                                    I can make an eye-catching, error-prune website according to your specification.<br />
                                    As a full-stack developer with five-plus years of association with Website and Mobile, I can surely convince you that I will make a highly tech-based website.<br />
                                    I have been expertise in the following stacks<br /><br />

                                    - Html5/SASS/Bootstrap/Tailwind/Javascript/Responsive web design friendly<br />
                                    - WordPress, React, Next, Vue, PHP, Laravel, Node.js.<br />
                                    - Figma, PSD to HTML, landing page, jQuery.<br /><br />

                                    As for me, now I am ready to start your job and work full-time if possible.<br />
                                    It won't make you disappointed with the lack of quality and punctuality.<br />
                                    I wish to have a message from you.<br /><br />

                                    @My past work on the same:<br /><br /></p>

                                <a href="#" style={{ color: "#0F85DB" }}>https://www.google.com</a><br />
                                <a href="#" style={{ color: "#0F85DB" }}> https://www.google.com</a><br />
                                <a href="#" style={{ color: "#0F85DB" }}>https://www.google.com</a><br /><br />
                                <p style={proposalPara}>Regards,</p>
                                <p style={proposalPara}>John Mehta</p>
                            </div>
                        </div>
                    </div>
                    <div style={secondContainer}>
                        <div style={insideSecondContainer}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img src={Image} style={{ width: "67px", height: "67px", borderRadius: "50%" }} alt='person' />
                                    <p style={onlineStyle}>ONLINE</p>
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={JohnMehta}>John Mehta</p>
                                    <p style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: "400", lineHeight: "13px", letterSpacing: "0px", textAlign: "left", color: "#545555", paddingTop: "-10px", marginTop: "-15px" }}>
                                        Website Designer
                                    </p>
                                    <div style={{ display: "flex", marginTop: "-5px" }}>
                                        <LocationOnIcon style={{ color: "green", fontSize: '20px' }} />
                                        <Typography variant="body2" style={{ fontFamily: "Inter", fontSize: "15px", fontWeight: "400", textAlign: "left", color: "#545555", }}>Lavita in Europe</Typography>
                                    </div>
                                </div>
                            </div>

                            <img src={MessageButton} style={{ marginTop: "10px" }} alt="msg"/>
                            <img src={Saved} style={{ marginTop: "20px" }} alt="saved"/>
                            <div style={{ width: "341px", height: "129px", top: "267px" }}>
                                <p style={{ fontFamily: "Rubik", fontSize: "16px", fontWeight: "400", lineHeight: "19px", letterSpacing: "-0.5px", textAlign: "left", color: "#0A0A0A" }}>
                                    Education:
                                </p>
                                <p style={{ fontFamily: "Roboto", fontSize: "14px", fontWeight: "400", lineHeight: "25px", letterSpacing: "0px", textAlign: "left", color: "#545454" }}>
                                    Ho Chi Minh City University of Information <br />
                                    Technology<br />Engineer's degree, Information Technology<br />1990-2000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={lastBox}>
                    <div style={insidelastBox}>
                        <p style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: "400", lineHeight: "29px", letterSpacing: "-1px", textAlign: "left", color: "#0A0A0A" }}>
                            Contract Terms
                        </p>
                        <img src={Contract} style={{ width: "850px", height: "176px", top: "49px", borderRadius: "5px" }} alt="contract"></img>
                        <div style={{ width: "400px", height: "129px", top: "245px", left: "0px" }}>
                            <p style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "400", lineHeight: "22px", letterSpacing: "-0.5px", textAlign: "left", color: "#0A0A0A" }}>
                                Select Number Of <br />Milestone<span style={{ color: "#FF0C0C" }}>*</span>
                            </p>
                            <input type="number" style={{ width: "400px", height: "40px", marginTop: "-30px" }} />
                            <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left", color: "#FF0C0C", marginTop: "0px" }}>
                                *You can’t create more than 30 Milestone.
                            </p>
                        </div>
                        <div style={{ width: "400px", height: "96px", top: "399px" }}>
                            <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left" }}>
                                Start Date(Optional)
                            </p>
                            <input type="date" style={{ width: "400px", height: "50px", top: "37px" }} />
                        </div>
                        <div style={{ width: "800px", height: "172px", top: "523px" }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "365px", height: "80px" }}>
                                    <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left", color: "#0A0A0A" }}>
                                        Milestone Description<span style={{ color: "#FF0C0C" }}>*</span>
                                    </p>
                                    <div style={{ display: "flex" }}>
                                        <p>1</p><input type="text" style={{ width: "300px", height: "45px", top: "38px" }} />
                                    </div>
                                </div>
                                <div style={{ width: "203px", height: "80px", left: "300px", padding: "0px" }}>
                                    <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left" }}>
                                        Amount<span style={{ color: "#FF0C0C" }}>*</span>
                                    </p>
                                    <input type="text" style={{ width: "150px", height: "45px", top: "38px" }} />
                                </div>
                                <div style={{ width: "204px", height: "80px", left: "592px" }}>
                                    <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left" }}>Date<span style={{ color: "#FF0C0C" }}>*</span></p>
                                    <input type="date" style={{ width: "150px", height: "45px", top: "37px" }} />
                                </div>
                                <div style={{ width: "75px", height: "80px", left: "808px" }}>
                                    <p style={{ fontFamily: "Roboto", fontSize: "18px", fontWeight: "400", lineHeight: "21px", letterSpacing: "-0.5px", textAlign: "left" }}>
                                        Status<span style={{ color: "#FF0C0C" }}>*</span>
                                    </p>
                                    <div style={{ width: "55px", height: "45px", top: "37px", backgroundColor: "lightpink", borderRadius: "5px" }}>
                                        <p style={{ fontFamily: "Roboto", fontSize: "13px", fontWeight: "500", lineHeight: "15px", letterSpacing: "0px", textAlign: "center", paddingTop: "14px", color: "#FF0C0C" }}>
                                            Ongoing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ width: "159px", height: "57px", marginTop: "-35px", border: "1px solid grey", display: "flex", borderRadius: "999px" }}>
                            <p style={{ fontFamily: "Roboto", fontSize: "32px", fontWeight: "400", lineHeight: "38px", letterSpacing: "0px", color: "#6F6F6F", marginTop: "8px", paddingLeft: "10px" }}>
                                +</p>
                            <p style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "400", lineHeight: "19px", letterSpacing: "0px", textAlign: "left", color: "#6F6F6F", marginTop: "17.5px", paddingLeft: "10px" }}>
                                Add Milestone</p>
                        </button>
                    </div>
                </div>

                <div style={{ width: "927px", height: "125px", border: "1px solid grey", marginTop: "30px", borderRadius: "5px" }}>
                    <div style={{ display: "flex" }}>
                        <input type="checkbox" style={{ width: "18px", height: "18px", marginTop: "15px", backgroundColor: "#66AC3D", color: "white", WebkitAppearance: "none", MozAppearance: "none", appearance: "none", border: "none", }} />
                        <p style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "400", lineHeight: "19px", letterSpacing: "0px", textAlign: "left" }}>
                            Yes, I understand and agree to the Savio Terms of Service, including the User Agreement and Privacy Policy.</p>
                    </div>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <img src={Cancel} style={{paddingLeft:"580px"}}/>
                        <img src={Next} style={{ width: "153px", height: "56px", top: "49px", left: "776px", marginLeft: "20px" }} alt="next"/>
                    </div>
                </div>
            </>
        );
    }
}

export default HigherComponent;