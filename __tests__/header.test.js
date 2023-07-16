import { render } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    const logo = header.getByTestId("logo");
    expect(logo.src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwIUy1t2Lz3UzqmOIhgjaYxb7uAL7zIg2hVo6QEyLHZ3-rl_e6haXHtQYjFK1ORyCDBw&usqp=CAU")
})

test("Cart Items should be 0",() => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("0");
})