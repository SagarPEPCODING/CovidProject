import React from "react";
// import ReactDOM from "react-dom";
// import Historyi from "./HistoryInfo";
// import Informationi from "./information";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: "History" }
        this.History = this.History.bind(this);
        this.Information = this.Information.bind(this);
        this.Symptoms = this.Symptoms.bind(this);
        this.Safety = this.Safety.bind(this);
    }


    History = (event) => {
        let id = event.currentTarget.id;
        this.setState({ val: "History" });
    }

    Information = (event) => {
        let id = event.currentTarget.id;
        this.setState({ val: "Information" });
    }

    Symptoms = (event) => {
        let id = event.currentTarget.id;
        this.setState({ val: "Symptoms" });
    }

    Safety = (event) => {
        let id = event.currentTarget.id;
        this.setState({ val: "Safety_Suggestions" });
    }

    render() {
        let data;
        if (this.state.val === "History") {
            data = {
                "heading" : "History",
                "div1" : "On 31 December 2019, the World Health Organization (WHO) was formally notified about a cluster of cases of pneumonia in Wuhan City, home to 11 million people and the cultural and economic hub of central China. By 5 January, 59 cases were known and none had been fatal.1 Ten days later, WHO was aware of 282 confirmed cases, of which four were in Japan, South Korea and Thailand.2 There had been six deaths in Wuhan, 51 people were severely ill and 12 were in a critical condition. The virus responsible was isolated on 7 January and its genome shared on 12 January.3 The cause of the severe acute respiratory syndrome that became known as COVID‐19 was a novel coronavirus, SARS‐CoV‐2. The rest is history, albeit history that is constantly being rewritten: as of 12 May, 82,591 new cases of COVID‐19 worldwide were being confirmed daily and the death rate was over 4200 per day",
                "div2" : "Phylogenetic analysis suggests that SARS‐CoV‐2 originated in animals, probably bats, and was transmitted to other animals before crossing into humans at the Huanan wet market in Wuhan City.5, 6 There is some evidence that the intermediate vector may have been pangolin, a type of nocturnal anteater imported illegally for its flesh. This animal carries a coronavirus that is very similar to SARS‐CoV‐2 but differs in a crucial region that determines viral infectivity and host range. It is therefore possible that the virus passed into humans and then, through adaptation as it infected more people, mutated to acquire the characteristics that made it spread so quickly.",
                "div3" : "SARS‐CoV‐2 is not the first coronavirus to cause outbreaks of respiratory infection in humans. Six others have been identified so far, all believed to have originated in animals.6, 7 The four coronaviruses that are now endemic in humans cause 10–15% of common colds, mostly peaking between December and April in temperate climates.8 NL63 and 229E probably came from bats; OC43 and HKU1 seem to have originated in rodents. Each of these causes mild symptoms, though OC43 has ancestry as a bovine coronavirus that may have caused a pandemic at the end of the 19th century.",
                "div4" : "Two non‐endemic coronaviruses have caused serious disease. SARS‐CoV was the first to be recognised, occurring first in November 2002 in China (though not known at the time) and coming to the attention of WHO early in 2003 in Viet Nam.9 The outbreak was largely over by July, and the last cases were reported in China in April 2004. This virus was responsible for Severe Acute Respiratory Syndrome (SARS), a flu‐like illness, though diarrhoea was common. It could progress to pneumonia and respiratory failure in two weeks and 25% of people infected required intensive care. A total of 8098 cases and 774 deaths were notified.10 SARS‐CoV appears to have originated in horseshoe bats and possibly transmitted to humans via palm civet cats, traded in China for their meat."
            }
        }
        else if (this.state.val === "Information") {
            // data = [{ "heading": "Information" }, { "div": "Covid19" }];
            data = {
                "heading" : "Information",
                "div1" : "Since COVID-19 was only discovered a few months ago, its long-term effects are unknown, and while researchers are trying to look at parallels with two other coronaviruses, SARS and MERS-CoV, it will take time to have a full picture of the longer-term consequences of infection with COVID-19.",
                "div2" : "COVID-19 can cause a range of symptoms of wildly varying severity in people. Some might be asymptomatic or have mild symptoms, while others are sick enough to need hospitalisation, supplementary oxygen and the use of a ventilator. Broadly, as a respiratory virus, COVID-19 causes breathlessness, fatigue and muscle ache. As the pandemic has evolved and documented clinical case histories have accumulated, a new symptom began to emerge – the partial or total loss of the sense of taste and smell. This in itself is not unusual for a respiratory viral infection, but what was unique is that people had this symptom without any of the other usual symptoms of infection.",
                "div3" : "A striking feature of COVID-19 is how long the symptoms can last. Early in the pandemic, initial medical advice on recovery times for mild COVID-19 had suggested 1-2 weeks. However, many people have seen symptoms last for 8 to 10 weeks or longer, and symptoms can seem to go away only to come racing back. A research group at King’s College London, UK, developed a COVID-19 tracker app for people to record their symptoms daily, and estimated 200,000 have been reporting symptoms for the entire six weeks since the tracker was launched.Many people had a pattern of symptoms, where their symptoms were heightened initially, nearly disappeared, then returned again with ferocity, along with a very wide range of symptoms.A key question is what is causing the recurring symptoms – i.e. whether it is reactivation of a persistent infection, reinfection (which seems unlikely based on current data), or whether the person has become infected with another virus or even bacteria as their immune system is still recovering.",
                "div4" : "Given the multi-organ effect of COVID-19 on the body, survivors may have a variety of long-term effects on their organs, including what some doctors are calling ‘post-COVID lung disease’. Looking at the organs that are affected during infection could give an idea of where the long-term effects on the body are likely to manifest.As we are still in the throes of the pandemic, and at a relatively early stage of a new disease, it is too early to tell what COVID-19 survivors are likely to experience in a year’s time.Some researchers are concerned, however, that just as with SARS, many people with the new coronavirus will go on to develop post-viral chronic fatigue syndrome.The uncertainty of the future for COVID-19 survivors is why several long-term cohort studies (that study genetic and environmental factors in large groups over a period of time) have been repurposed to study the physical, mental and socio-economic consequences of the pandemic."
            }
        }
        else if (this.state.val === "Symptoms") {
            // data = [{ "heading": "Symptoms" }, { "div": "Covid19" }];
            data = {
                "heading" : "Symptoms",
                "div1" : "People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills Cough, Shortness of breath or difficulty breathing, Fatigue, Muscle or body aches, Headache, New loss of taste or smell, Sore throat, Congestion or runny nose, Nausea or vomiting, Diarrhea. This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.",
                "div2" : "Look for emergency warning signs* for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately: Trouble breathing, Persistent pain or pressure in the chest, New confusion, Inability to wake or stay awake, Bluish lips or face. *This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.",
                "div3" : "Influenza (Flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by infection with a new coronavirus (called SARS-CoV-2) and flu is caused by infection with influenza viruses.",
                "div4" : "There are some key differences between flu and COVID-19. COVID-19 seems to spread more easily than flu and causes more serious illnesses in some people. It can also take longer before people show symptoms and people can be contagious for longer. Another important difference is there is a vaccine to protect against flu. There is currently no vaccine to prevent COVID-19. The best way to prevent infection is to avoid being exposed to the virus. More information about differences between flu and COVID-19 is available in the different sections below.",
                "div5" : "Because some of the symptoms of flu and COVID-19 are similar, it may be hard to tell the difference between them based on symptoms alone, and testing may be needed to help confirm a diagnosis. Flu and COVID-19 share many characteristics, but there are some key differences between the two.",
                "div6" : "While more is learned every day, there is still a lot that is unknown about COVID-19 and the virus that causes it. This page compares COVID-19 and flu, given the best available information to date."
            }
        }
        else {
            // data = [{ "heading": "Safety-Information" }, { "div": "Covid19" }];
            data = {
                "heading" : "Safety-Suggestions",
                "div1" : "If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!",
                "div2" : "Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better. Make wearing a mask a normal part of being around other people. Here are the basics of how to wear a mask:- Clean your hands before you put your mask on, as well as before and after you take it off. Make sure it covers both your nose, mouth and chin. Here are some specifics on what type of mask to wear and when, depending on how much virus is circulating where you live, where you go and who you are. Wear a fabric mask unless you’re in a particular risk group. This is especially important when you can’t stay physically distanced, particularly in crowded and poorly ventilated indoor settings. Wear a medical/surgical mask if you:- Are over 60, Have underlying medical conditions, Are feeling unwell, and/or Are looking after an ill family member. For more public advice on masks, read our Q&A and watch our  videos. There is also a Q&A focused on masks and children. For health workers, medical masks are essential personal protective equipment when engaging with patients with suspected, probable or confirmed COVID-19. Respirator masks (such as FFP2, FFP3, N95, N99) should be used in settings where procedures generating aerosols are performed and must be fitted to ensure the right size is worn.",
                "div3" : "Avoid the 3Cs: spaces that are closed, crowded or involve close contact. Outbreaks have been reported in restaurants, choir practices, fitness classes, nightclubs, offices and places of worship where people have gathered, often in crowded indoor settings where they talk loudly, shout, breathe heavily or sing. The risks of getting COVID-19 are higher in crowded and inadequately ventilated spaces where infected people spend long periods of time together in close proximity. These environments are where the virus appears to spreads by respiratory droplets or aerosols more efficiently, so taking precautions is even more important. Meet people outside. Outdoor gatherings are safer than indoor ones, particularly if indoor spaces are small and without outdoor air coming in. For more information on how to hold events like family gatherings, children’s football games and family occasions, read our Q&A on small public gatherings. Avoid crowded or indoor settings but if you can’t, then take precautions: Open a window. Increase the amount of ‘natural ventilation’ when indoors. WHO has published Q&As on ventilation and air conditioning for both the general public and people who manage public spaces and buildings."
            }
        }

        return (
            <>
                <div className="content">
                    <div className="content-compartment-1">
                        <div className="height center text-size HistoryContent" id="his" onClick={this.History}>History</div>
                        <div className="height center text-size InformationContent" id="inf" onClick={this.Information}>Information</div>
                        <div className="height center text-size SymptomsContent" id="sym" onClick={this.Symptoms}>Symptoms</div>
                        <div className="height center text-size SafetyContent" id="saf" onClick={this.Safety}>Safety Suggestions</div>
                    </div>
                    <div className="content-compartment-2">
                        {data.heading}
                        <div>{data.div1}</div>
                        <br></br>
                        <div>{data.div2}</div>
                        <br></br>
                        <div>{data.div3}</div>
                        <br></br>
                        <div>{data.div4}</div>
                        <br></br>
                        <div>{data.div5}</div>
                        <br></br>
                        <div>{data.div6}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Content;