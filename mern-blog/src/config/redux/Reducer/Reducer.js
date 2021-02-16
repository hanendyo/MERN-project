import { combineReducers } from "redux";
import {HomeReducer} from './HomeReducer'
import {GlobalReducer} from './GlobalReducer'
import {CreateBlogReducer} from './CreateBlogReducer'
import {RegisterReducer} from './RegisterReducer'
import {LoginReducer} from './LoginReducer'

export const reducer = combineReducers({HomeReducer, GlobalReducer, CreateBlogReducer, RegisterReducer, LoginReducer})


