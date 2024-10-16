import React from "react"

const HomeComponent = React.lazy(()=> import("./Home"))
const AboutComponent = React.lazy(()=> import("./About"))
const BlogsComponent = React.lazy(()=> import("./Blogs"))
const BlogsDetailComponent = React.lazy(()=> import("./BlogsDetail"))
const CareerComponent = React.lazy(()=> import("./Career"))
const CareerDetailComponent = React.lazy(()=> import("./CareerDetail"))
const ContactUsComponent = React.lazy(()=> import("./ContactUs"))
const ServicesComponent = React.lazy(()=> import("./Services"))

const pages = [
  {
    name: "Home",
    route: "/",
    element: <HomeComponent />
  },
  {
    name: "About",
    route: "/about",
    element: <AboutComponent />
  },
  {
    name: "Blogs",
    route: "/blogs",
    element: <BlogsComponent />
  },
  {
    route: "/blogs/:id",
    element: <BlogsDetailComponent />
  },
  {
    name: "Career",
    route: "/career",
    element: <CareerComponent/>
  },
  {
    route: "/career/:id",
    element: <CareerDetailComponent />
  },
  {
    name: "Contact",
    route: "/contact",
    element: <ContactUsComponent />
  },
  {
    name: "Services",
    route: "/services",
    element: <ServicesComponent />
  }
]

export default pages
