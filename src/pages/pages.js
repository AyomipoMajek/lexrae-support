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
    route: "/",
    element: <HomeComponent />
  },
  {
    route: "/about",
    element: <AboutComponent />
  },
  {
    route: "/blogs",
    element: <BlogsComponent />
  },
  {
    route: "/blogs/:id",
    element: <BlogsDetailComponent />
  },
  {
    route: "/career",
    element: <CareerComponent/>
  },
  {
    route: "/career/:id",
    element: <CareerDetailComponent />
  },
  {
    route: "/contact",
    element: <ContactUsComponent />
  },
  {
    route: "/services",
    element: <ServicesComponent />
  }
]

export default pages
