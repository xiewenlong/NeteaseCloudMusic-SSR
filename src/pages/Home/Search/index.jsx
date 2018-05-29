/*
 * @authors :Bin Mei
 * @date    :2017-05-26
 * @description： 网易音乐 -- 搜索
 */

import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { Link ,browserHistory } from 'react-router';
import { fetchJson } from 'src/utils/fetch';
import {StaticToast} from 'src/components/common';
import format from "src/utils/format";
import actions from "src/store/actions";

import './Search.scss';


class Search extends Component{
	constructor(props){
		super(props);
    	this.state = {
    	};
	}
	componentDidMount(){
		let {ACTIONS} = this.props;
	}
	render(){
		
		return ( 
			<section className="i-search">
					搜索
			</section>
		);
	}
};

function mapStateToProps(state){
	// const {list} = state.homeList;
	return {};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Search);