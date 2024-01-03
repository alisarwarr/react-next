//REACT
import React from "react";


export const Home = React.lazy(() => import("./Home"));
export const Orders = React.lazy(() => import("./Orders"));
export const Products = React.lazy(() => import("./Products"));
export const Drafts = React.lazy(() => import("./Drafts"));
export const Wallet = React.lazy(() => import("./Wallet"));
export const Support = React.lazy(() => import("./Support"));
export const Tutorials = React.lazy(() => import("./Tutorials"));
export const Error = React.lazy(() => import("./Error"));
// BusinessTools
export const BusinessTools = React.lazy(() => import("./BusinessTools"));
export const SupplierSettings = React.lazy(() => import("./BusinessTools/SupplierSettings"));
export const Automations = React.lazy(() => import("./BusinessTools/Automations"));
export const Templates = React.lazy(() => import("./BusinessTools/Templates"));
export const Keywords = React.lazy(() => import("./BusinessTools/Keywords"));
export const PlansAndAddOns = React.lazy(() => import("./BusinessTools/PlansAndAddOns"));
export const AccountAndBilling = React.lazy(() => import("./BusinessTools/AccountAndBilling"));
export const Users = React.lazy(() => import("./BusinessTools/Users"));
export const BuyerAccounts = React.lazy(() => import("./BusinessTools/BuyerAccounts"));
export const Notifications = React.lazy(() => import("./BusinessTools/Notifications"));
export const StoreSettings = React.lazy(() => import("./BusinessTools/StoreSettings"));