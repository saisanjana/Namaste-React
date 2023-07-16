import { render, waitFor } from "@testing-library/react";
import Body from "../Components/Body";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { StaticRouter } from "react-router-dom/server";
import { REST_DATA } from "../Mocks/data";
import "@testing-library/jest-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(REST_DATA)
    })
})

test("shimmer has loaded in body",()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    const loader = body.getByTestId("loader");
    expect(loader).toBeInTheDocument();
})

test("Restaurant list has loaded in body",async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId("reslist");
    expect(resList.children.length).toBe(15);
})

