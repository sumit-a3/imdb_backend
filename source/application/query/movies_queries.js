'use strict';

var assert = require('assert');

function GetAllMatchedMoviesQuery(query) {
	console.log('in GetAllMatchedMoviesQuery::', query);
    assert(query.searchText, 'searchText is required.');
    //this.companyId = query.companyId;
    this.searchText = query.searchText;
    console.log('this::', this);
    Object.freeze(this);
}

module.exports = {
	findQuery: GetAllMatchedMoviesQuery
}

