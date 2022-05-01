import React from "react";

import { Layout } from "@components/layout";
import { TicketFilters, TicketsContent } from "@views/index";

const App = () => {
  return (
    <Layout>
      <TicketFilters />
      <TicketsContent />
    </Layout>
  );
};

export default App;
