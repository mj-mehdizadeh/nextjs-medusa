import { MEDUSA_BACKEND_URL, NEXT_PUBLIC_MEDUSA_API_KEY, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { Hydrate } from "@tanstack/react-query"
import { CartProvider, MedusaProvider } from "medusa-react"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"
import Layout from "@modules/layout/templates"

import { Template } from "../types/template"
import ReloadListener from "@lib/hooks/reload-listener"


function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown, _header?: Template, _footer?: Template }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
      publishableApiKey={NEXT_PUBLIC_MEDUSA_API_KEY}
    >
      <ReloadListener/>
      <Hydrate state={pageProps.dehydratedState}>
        <CartDropdownProvider>
          <MobileMenuProvider>
            <CartProvider>
              <StoreProvider>
                <AccountProvider>
                  <Layout header={pageProps?._header} footer={pageProps?._footer}>
                    {getLayout(<Component {...pageProps} />)}
                  </Layout>
                </AccountProvider>
              </StoreProvider>
            </CartProvider>
          </MobileMenuProvider>
        </CartDropdownProvider>
      </Hydrate>
    </MedusaProvider>
  )
}

export default App
