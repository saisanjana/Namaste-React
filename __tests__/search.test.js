import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Components/Body";
import Header from "../Components/Header";
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

test("shimmer has loaded in body",async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(body.getByTestId("searchInput")));
    const searchInput = body.getByTestId("searchInput");
    fireEvent.change(searchInput,{
        target:{
            value:"balaji"
        }
    })
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const reslist = body.getByTestId("reslist");
    expect(reslist.children.length).toBe(1);

})