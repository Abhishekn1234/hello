import React from 'react';
import MyNavbar from './Navbar';
import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Card from 'antd/es/card/Card';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div>
       <MyNavbar/>
       <Layout>
       <div>
       <Content style={{ padding: '0 0px' }}>
        <div className="site-layout-content">
            <Card  style={{backgroundColor:"blue"}}>
            <h1 style={{color:"white",textAlign:"center"}} >A Complete Overview<br/> of Hospital Management System </h1>
            <h5 style={{color:"white",textAlign:"center"}}>Created By Abhishek N Dec 2023
            </h5>
            <br/><br/>
            </Card>
            <div className="container-fluid-xl" style={{backgroundColor:"palegreen"}} >
            <h5 style={{textAlign:"center"}}>A Complete Overview of Hospital Management System</h5><br/><br/><br/><br/>
            <p style={{textAlign:"justify",justifyContent:"center",padding:"0 30px",fontSize:"medium"}}>
            The healthcare industry is one of the most important sectors of our economy. It is responsible for providing care to hundreds and billions of people around the world. The health of all people is paramount to their well-being, which means that the healthcare industry is an important part of society as a whole.Technology has played an increasingly more important role in the delivery of healthcare. <b>Hospital management system</b> has emerged to be an evolving healthcare technology trend in recent times. A HMS is a comprehensive solution for healthcare facilities to gather patient data, secure vital records, automate scheduling, and more!
            <br/><br/>
            <b>What is Hospital Management System?</b>
            <p><b>
            A Hospital Management System (HMS)</b>, a.k.a. a hospital information system is a software solution that helps a hospital or medical care facility to manage its operations. In other words, it is an integrated solution that helps manage hospital resources and functions efficiently by integrating multiple hospital departments into one single network. The most widely used type of hospital information management system is a <b>computer-based patient record (CPR)</b>, which maintains the medical and treatment history of patients. An efficient hospital information management system can be beneficial for a team consisting of doctors, health workers, pharmacists, nurses, business managers etc.<br/>For example – A nursing staff member may be required to enter data into a computer database every time they change a patient’s position or administer medication. This allows all relevant personnel to access accurate information about each patient’s condition at any given time. Thus, it improves communication between departments as well as reducing errors caused by miscommunication among medical professionals.The HIM department has been increasingly using technology over time to make sure that their processes are streamlined and efficient. This means that one will be able to keep track of all their patients’ records on a single platform so that they are aware of everything from the start to finish. One of the most important things about a hospital information management system is that it is constantly evolving to meet new challenges.<br/>
            <br/>

            </p>
            <p>
              <b>Types of Hospital Management System</b>
              <p>
              A few years ago, healthcare facilities employed HMS’ (hospital management systems) that lacked advanced features and did not support essential modules for enhanced healthcare delivery.Currently, an advanced hospital management system is used by a majority of hospitals since it helps them to keep a track of employees and patients.<br/> Here are the three major types of hospital management system available in the market:
              Application Service Provider/CloudAn application service provider, or ASP, is a company that allows you to outsource your software needs. They provide you with software in the form of web applications rather than software that runs on your own computers. ASPs have many advantages over traditional proprietary systems, including lower costs and increased scalability.For example, if your hospital does not have enough money for an expensive computer system or does not have the IT staff needed to support such a system then an application service provider may be able to help solve both problems at once by providing hosted healthcare applications. They can be easily scaled up as needed for increased demand at any given time (for example during COVID times).Cloud-based hospital management systems are the most cost-effective and efficient since you only pay for the software/hosting resources a s long as you need it. Cloud-based hospital management systems are a great way to improve the efficiency of your hospital. They can help you reduce costs, streamline your workflow, and ensure that your patients receive the best care possible. <br/>
             <b>Enterprise (On-Premise) Software</b>
             The primary benefit of using an on-premise hospital management system is its ability to integrate with other systems in the hospital. Another benefit of an on-premise hospital management system is that it can be customized to meet the needs of individual hospitals. This customization allows hospitals to develop their own unique processes and procedures for handling patient cases and other issues.<br/>
             <b>Benefits of a health information system or a hospital management system?</b><br/>
            <li>
            Access to patient data, improved with the implementation of an information system</li>
            <li>
            Efficient handling of clinical, administrative and financial information
            Improved practice as a result of better decision making</li>
            <li>
            Helps in generating automatically generated reports.</li>
            <li>
            Improved patient care</li>
            <li>
            Reduced medical errors</li>
            <li>
            Enhanced patient satisfaction, leading to reduced readmissions and rehospitalization rates</li>
            <li>
            Notable Features of a Health Information System or a Hospital Management Software</li><br/>

            A Hospital Management System (HMS) is a software designed to handle electronic medical records, laboratory tests and their results, radiology images, pharmacy records etc. It helps in managing patient data efficiently so that hospitals can provide better care and services.

            In today’s times, most of the hospitals are preferring a cloud-based hospital software management. This is primarily due to its user-friendly approach, easy access from multiple devices. Such kind of HIS will enable users to make the best use of their desktop, laptop, smartphones, and tablets. <b>

            Patient Registration and Scheduling</b>

            A HIS or HMS is also patient registration software. It helps to manage patient data, schedule appointments, track their information (demographics or medical history). 
            Helps you manage the registration process by allowing you to input new patients into your database with ease. 
            You’ll be able to access patient records quickly when they need follow-up care or get emergency treatment after hours. 
            You’ll also be able to improve customer satisfaction by offering more streamlined registration processes for incoming patients as well as providing faster access for current clients. 
            Enables employees within each departmental area of your facility—from radiology all the way down through physical therapy—to know when patients will arrive at their location without having access to each other’s schedules; therefore, improving coordination across departments. Also, one can reduce the time spent on filing paper work with insurance companies. 
            Electronic Health Records (EHR) and EMR Management

            Electronic health records (EHR) are the digital equivalent of a patient’s medical history.
            EHR is a system that maintains electronic health records. 
            EHR software also helps doctors, nurses, and other healthcare providers share information with each other about their treatment plans for each patient.
            It stores the medical history and information related to a particular patient. 
            EMR is a system that allows electronic health records to be accessed and transmitted
            Both the EHR and EMR feature will help in offering effective treatment for patients when they need it most. <br/>
            <b>Nursing Management System (NMS)</b>

            The Nursing Management System (NMS) is used to manage nursing staff and automate the entire process of managing them. 
            The system helps in managing their schedules, assignments, attendance and leave. It also helps in managing their training schedule.
            The NMS software can be easily integrated with other hospital management systems such as medical records system (MRS), pharmacy management system (PMS), laboratory information system (LIS) etc.
            It will help you to acquire the data entered by the medical staffs from all other departments together on a single screen. This will eliminate the occurrence of duplicate entries into more than one place by different people at different times. 
            Laboratory Information System (LIS)/ Laboratory Information Management

                The LIS is a system for storing and managing laboratory test results. 
                It can be used as a centralized database to store all the blood test reports, urine test results, biopsy slides and other procedures like radiology, imaging and pathology.
                The LIS is also useful for the Radiology department where it can be used to store and manage radiology images of X-rays, CT scans, MRI scans or ultrasounds etc. 
                It also helps in storing pathology images such as histopathology slides of biopsies taken from patients.
                In addition to these uses it can also be used in cytology image storage where smears are stained with chemicals to identify certain cells or bacteria present in them.<br/>
                <b>
                Online Doctor and Hospital Booking</b>

                Online doctor appointment helps you manage the appointment of doctors in your hospital. 
                Through this feature, you can easily schedule appointments for patients and doctors. It also allows patients to book appointments with the doctor online.
                Hospital booking will enable you to book appointments with doctors, hospitals and clinics.
                It helps you find out the availability of a doctor or hospital and schedule an appointment.The software can be customized easily so that it fits the requirements of your business perfectly.
                <b>Online Doctor Video Consultation</b>
                There are many ways you can use the doctor video consultation. 
                You can use it to connect with doctors, patients, or other doctors. 
                This feature allows you to talk to your patients in real-time and get them the care they need faster.
                It also helps connect you with other people who are interested in making a change for the better in their lives or their community.
                Having a hospital management system or health information system is an important part of running a hospital. With the help of such a system, you can keep track of all your patients and their medical records, in addition to allowing access to this information from anywhere in the world! You will also be able to generate reports automatically which will improve decision-making when it comes down to caring for these people who need our help most. 
                      </p>
                    </p>
                    </p>
                    <br/>
                    

                    </div>
                </div>
        </Content>
        </div>
        <Footer style={{ textAlign: 'center',backgroundColor:"black" }}>
          <Card style={{textAlign:'left',backgroundColor:"red",color:"white"}}>
          <h5>
            Products</h5><br/>
            <h4>Hospital Information System</h4>
            <h4> Medicine Resources
            </h4>
           
            <h4>Business Hospital Management</h4>

            </Card><br/>
            <Card style={{textAlign:"left",backgroundColor:"red",color:"white"}}>
              <h5>Services</h5><br/>
              <h4>Clinical</h4>
              <h4>Financial</h4>
              <h4>Labroratory</h4>
              <h4>Inpatient</h4>
              <h4>Nursing</h4>
              <h4>Pharmaceutical</h4>
            </Card><br/>
            <Card style={{backgroundColor:"red",color:"white"}}>
              <h1>
                Book a quote!.....
               </h1>
               
                <h1>
                Contact
                </h1><br/>
                <b>
                Info Doctrate Solutions,<br/>
               1st Floor,ABC Complex <br/>
               Near Sardar Vallabhai Patel Road,<br/>
               Main Road,KSR Bengaluru,Karanataka<br/>
               India - Pincode:699622<br/>
               Mail:infodoctrotatesolution@gmail.com<br/>
               Ph:+91 7654980882 ,+91 9898765423<br/>
                </b>
              
               
            </Card>
         </Footer>
                </Layout>  l 
              
            </div>
          )
        }

        export default Dashboard
