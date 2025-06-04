export const Routes = {
  index: "/",
  tickets: "/tickets",
  createTicket: "/tickets/create",
  editTicket: "/tickets/:id/edit",
  quotes: "/quotes",
  quotesDetails: "/quotes/:reference",
  editQuote: "/client-area/budgets/:id", // TODO: Old My Area route, change it when implemented
  createCustomQuote: "/quotairzone/custom-quote", // TODO: Old My Area route, change it when implemented
  importDuctzoneProject: "/quotairzone/ductzone-file-import", // TODO: Old My Area route, change it when implemented
  createEasyzoneSolution: "/quotairzone/assistant/pack-easyzone", // TODO: Old My Area route, change it when implemented
  createCalculationProject: "/quotairzone/assistant/control-system", // TODO: Old My Area route, change it when implemented
  createRadiantUnderfloorSolutionAssistant: "/quotairzone/assistant/pack-radiant365/underfloor", // TODO: Old My Area route, change it when implemented
  createRadiantRadiatorSolutionAssistant: "/quotairzone/assistant/pack-radiant365/radiators", // TODO: Old My Area route, change it when implemented
  createAidooSolution: "/quotairzone/aidoo", // TODO: Old My Area route, change it when implemented
  editCustomQuote: "/quotairzone/custom-quote/:id", // TODO: Old My Area route, change it when implemented
  editImportDuctzoneProject: "/quotairzone/ductzone-file-import/:id", // TODO: Old My Area route, change it when implemented
  editEasyzoneSolution: "/quotairzone/assistant/pack-easyzone/:id", // TODO: Old My Area route, change it when implemented
  editCalculationProject: "/quotairzone/assistant/control-system/:id", // TODO: Old My Area route, change it when implemented
  editRadiantSolutionAssistant: "/quotairzone/assistant/pack-radiant365/:id", // TODO: Old My Area route, change it when implemented
  editAidooSolution: "/quotairzone/aidoo/:id", // TODO: Old My Area route, change it when implemented
  createLiteSolution: "/assistant", // TODO: Old My Area route, change it when implemented
  editLiteSolution: "/assistant/:id",
  orders: "/orders",
  orderDetail: "/orders/:reference",
  warranties: "/warranties",
  createWarranty: "/warranties/new",
  warrantyDocumentation: "/warranties/:id/documentation",
  warrantyDetails: "/warranties/:id",
  returns: "/returns",
  createReturn: "/returns/create",
  returnDetail: "/returns/:id",
  addresses: "/addresses",
  createAddress: "/addresses/create",
  profile: "/profile",
  editProfile: "/profile/edit",
  users: "/profile/users",
  createCompanyUser: "/profile/users/create",
  editCompanyUser: "/profile/users/:id",
  changePassword: "/profile/new-password",
  cancelAccount: "/profile/cancel-account",
  editClient: "/profile/client/edit",
  invoices: "/invoices",
  atps: "/atps",
  atpDetail: "/atps/:id",
  createAtp: "/atps/new",
  atpsOrders: "/atps/orders",
  atpsOrdersDetail: "/atps/orders/:id",
  documentsCreateAtp: "/atps/new/docs/:id",
  deliveryNotes: "/delivery-notes",
  academy: "/academy",
  quoteAssistant: "/quotairzone/assistant",
  products: "/products",
  myarea: "/my-area",
  newsList: "/news",
}
