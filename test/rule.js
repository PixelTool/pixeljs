var rule = {};

rule.kanzhun = '{"name":"[root]","type":"{}","def":[{"name":"name","type":"string","uuid":"16dbe997-7152-4206-afdb-47b688d359be","last":false,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(1) > span","method":"text"}},{"name":"summary","type":"string","uuid":"d2c366d0-838e-4aad-b192-21227dd6fedf","last":false,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > div.wrap_style.mb15 > article > p","method":"text"}},{"name":"link","type":"string","uuid":"b0de6a5d-0a6f-454f-b8a8-79d71bf2ebc1","last":false,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(2) > span","method":"text"}},{"name":"logo","type":"string","uuid":"3fdc41d0-694e-4777-8fb5-cde3a2f9e610","last":false,"source":{"selector":"body > section.co_header.clearfix > a > img","method":"[src]"}},{"name":"size","type":"string","uuid":"b8e98065-49e9-46a1-8842-40f5a167f80d","last":false,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(5) > span","method":"text"}},{"name":"industry","type":"string","uuid":"b5360914-b27a-4615-9e91-b71d44f99bd4","last":false,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(3) > a","method":"text"}},{"name":"location","type":"string","uuid":"2ccfc6c4-a845-41eb-8686-701481ceefa8","last":true,"source":{"selector":"body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(7) > a","method":"text"}}],"uuid":"dbd8fc24-4f9a-46d7-bb34-6047bf277526"}';
rule.rainx = '{"name": "[root]","type": "{}","def": [{"name": "name","type": "string", "uuid": "9b981218-ece4-4477-a1fa-17476bf7ccf6", "last": false, "source": {"selector": "body > center > div:nth-child(2) > h2:nth-child(2)", "method": "text"} }, {"name": "li", "type": "[]", "uuid": "683836e7-3a2e-4961-9cb5-5ace0f576261", "last": true, "def": [{"name": "p", "type": "string", "uuid": "998be1dc-dd82-4889-a44b-541ed675ea25", "last": true, "source": {"selector": "body > center > div:nth-child(2) > p", "method": "text"} } ] } ], "uuid": "c9e89a90-74ee-414e-a490-56f90734abbc"}'; 
rule.kanzhun_zhaopin = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "16dbe997-7152-4206-afdb-47b688d359be", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(1) > span", "method": "text"} }, {"name": "summary", "type": "string", "uuid": "d2c366d0-838e-4aad-b192-21227dd6fedf", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > div.wrap_style.mb15 > article > p", "method": "text"} }, {"name": "link", "type": "string", "uuid": "b0de6a5d-0a6f-454f-b8a8-79d71bf2ebc1", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(2) > span", "method": "text"} }, {"name": "logo", "type": "string", "uuid": "3fdc41d0-694e-4777-8fb5-cde3a2f9e610", "last": false, "source": {"selector": "body > section.co_header.clearfix > a > img", "method": "[src]"} }, {"name": "size", "type": "string", "uuid": "b8e98065-49e9-46a1-8842-40f5a167f80d", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(5) > span", "method": "text"} }, {"name": "industry", "type": "string", "uuid": "b5360914-b27a-4615-9e91-b71d44f99bd4", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(3) > a", "method": "text"} }, {"name": "location", "type": "string", "uuid": "2ccfc6c4-a845-41eb-8686-701481ceefa8", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_l_con.clearfix > dl > dd:nth-child(3) > p:nth-child(7) > a", "method": "text"} }, {"name": "tags", "type": "[]", "uuid": "e8092523-b6b7-414c-bcbf-39c83d9785b3", "last": false, "def": [{"name": "tag", "type": "string", "uuid": "e5c33bb8-3d7e-4d7c-8685-e5792c6bb720", "last": true } ] }, {"name": "zhaopin_list", "type": "[]", "uuid": "76885470-7f9a-4243-911b-a3132001a114", "last": true, "def": [{"name": "title", "type": "string", "uuid": "658595e8-0f87-42b3-a620-782206f600d1", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_r_con > div.wrap_style.mb15 > ul > li > a", "method": "text"} }, {"name": "salary", "type": "string", "uuid": "bc5a7bd7-e481-4972-b3b9-86b3b02309e7", "last": false, "source": {"selector": "body > div.container_v2.clearfix > section.f_r_con > div.wrap_style.mb15 > ul > li > span", "method": "text"} }, null ], "source": {"selector": "body > div.container_v2.clearfix > section.f_r_con > div.wrap_style.mb15 > ul > li", "method": "text"} } ], "uuid": "dbd8fc24-4f9a-46d7-bb34-6047bf277526"}';
rule.useragentstring = '{"name": "[root]", "type": "[]", "def": [{"name": "left", "type": "string", "uuid": "40c0d8d1-f955-4b44-94bf-55df33044247", "last": false, "source": {"selector": "#dieTabelle > tbody > tr > td.wort", "method": "text"} }, {"name": "right", "type": "string", "uuid": "fdd4cde7-23ae-40bb-8094-6505bb4a0923", "last": true, "source": {"selector": "#dieTabelle > tbody > tr > td.erklaerung", "method": "text"} } ], "uuid": "fde392e1-a21b-4ce1-8ef6-f63d54dbca21"}';
rule.news_dbnotes = '{"name": "[root]", "type": "[]", "def": [{"name": "title", "type": "string", "uuid": "289c4f7e-491b-4500-8899-26ecac536fdc", "last": false, "source": {"selector": "body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(3) > a", "method": "text"} }, {"name": "url", "type": "string", "uuid": "df67a952-aa39-43f7-9281-87a7294b082a", "last": false, "source": {"selector": "body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(3) > a", "method": "[href]"} }, {"name": "date", "type": "string", "uuid": "c42c876d-cac6-4205-9a42-de6ecd2cec58", "last": true, "source": {"selector": "body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.subtext", "method": "text"} } ], "uuid": "879a3913-7794-471a-ba2b-4c554afdf475"}';
rule.alexa = '{"name": "[root]", "type": "[]", "def": [{"name": "url", "type": "string", "uuid": "49a6a76c-4a6c-458c-a768-4a4615e58f96", "last": false, "source": {"selector": "#alx-content > div > section.content-fixed.page-product-content > span > span > section > ul > li > div.desc-container > p > a", "method": "text"} }, {"name": "desc", "type": "string", "uuid": "5d00c8de-5ff7-4b93-abe6-64702d2382cb", "last": true, "source": {"selector": "#alx-content > div > section.content-fixed.page-product-content > span > span > section > ul > li > div.desc-container > div", "method": "text"} } ], "uuid": "f00cfe2e-e67c-48ac-a2a1-1d2de6b1f67f"}';
rule.touzijie = '{"name": "[root]", "type": "[]", "def": [{"name": "name", "type": "string", "uuid": "f2e4d6a9-9b94-40b3-b9a4-191bb5f313ac", "last": false, "source": {"selector": ".tab-content > #search-list-people > li > a", "method": "text"} }, {"name": "url", "type": "string", "uuid": "28229e29-e20b-4b45-b712-cdec03be21e1", "last": true, "source": {"selector": ".tab-content > #search-list-people > li > a", "method": "[href]"} } ], "uuid": "2408ea1a-c2d0-4b92-a9c4-613393faf6c1", "source": {"selector": ".tab-content > #search-list-people > li", "method": "text"} }';
rule.github = '{"name":"[root]","type":"[]","def":[{"name":"name","type":"string","uuid":"42b0a730-2ee2-48b5-8b08-723b5a16d7e8","last":false,"source":{"selector":"#user_search_results>div>div:nth-child(1)>div.user-list-info>a","method":"text"}},{"name":"avatar","type":"string","uuid":"98cfbce6-f3b1-46cc-8521-6ec72f0e9efd","last":false,"source":{"selector":"#user_search_results>div>div:nth-child(1)>a>img","method":"[src]"}},{"name":"url","type":"string","uuid":"5454c164-74de-4456-a5ad-1095a951ba84","last":true,"source":{"selector":"#user_search_results>div>div:nth-child(1)>div.user-list-info>a","method":"[href]"}}],"uuid":"3dd896d5-f484-4ee5-8f42-66af27d3e580","source":{"selector":"#user_search_results>div>div","method":"text"}}';
rule.dajie = '{"name": "[root]", "type": "[]", "def": [{"name": "name", "type": "string", "uuid": "531267c3-e58e-4c4e-8376-ca6d1682497e", "last": false, "source": {"selector": "#J_suggestList > li > div.comp-list-mid > p.comp-list-title > span > a", "method": "text"} }, {"name": "avatar", "type": "string", "uuid": "bcfd9257-7d1b-4aaf-a725-83dac15690e6", "last": false, "source": {"selector": "#J_suggestList > li > div.comp-list-left > a > img", "method": "[src]"} }, {"name": "url", "type": "string", "uuid": "423afdad-0236-4430-af67-56b73e153258", "last": true, "source": {"selector": "#J_suggestList > li > div.comp-list-mid > p.comp-list-title > span > a", "method": "[href]"} } ], "uuid": "4a7af4b0-31e6-43f9-943f-386b0ea1aca6", "source": {"selector": "#J_suggestList > li", "method": "text"} }';
rule.ruolin_detail = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "e2cb2670-d919-42c9-841d-760e39352db2", "last": false, "source": {"selector": "body > div.main.clearfix > div.comp-detail-left > div.comp-gen-info.cf > ul.comp-gen-words.cf > li:nth-child(2)", "filter": "substr|\'5\'", "method": "text"} }, {"name": "link", "type": "string", "uuid": "3fd032b4-1623-4946-bf39-f15ae218e40c", "last": false, "source": {"selector": "body > div.main.clearfix > div.comp-detail-left > div.comp-gen-info.cf > ul.comp-gen-words.cf > li:nth-child(6) > span", "method": "text"} }, {"name": "industry", "type": "string", "uuid": "2175fdfa-92a8-410a-b485-fb722b90ac0c", "last": false, "source": {"selector": "body > div.main.clearfix > div.comp-detail-left > div.comp-gen-info.cf > ul.comp-gen-words.cf > li:nth-child(3) > a", "method": "text"} }, {"name": "size", "type": "string", "uuid": "339d8a99-3e7b-48b8-9bc5-2d40984d2c14", "last": false, "source": {"selector": "body > div.main.clearfix > div.comp-detail-left > div.comp-gen-info.cf > ul.comp-gen-words.cf > li:nth-child(5)", "filter": "substr|\'5\'", "method": "text"} }, {"name": "location", "type": "string", "uuid": "43e1c254-b66e-4581-b847-77e5ec28a046", "last": true, "source": {"selector": "body > div.main.clearfix > div.comp-detail-left > div.comp-gen-info.cf > ul.comp-gen-words.cf > li.comp-addL > span", "method": "text"} } ], "uuid": "aa4995d5-8606-468d-8436-767ed29fc2c1"}';
rule.sf_detail = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "c4563f12-76de-453c-97cf-ebfa2c788523", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > h4", "method": "text"} }, {"name": "social_network", "type": "[]", "uuid": "027f2ee6-9c7b-4985-a1ba-3116c361cb13", "last": false, "def": [{"name": "name", "type": "string", "uuid": "3a560c1e-fb53-4445-97d2-5cca4e7f9a2e", "last": false, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[class]", "filter": "match|\'-\\\\[^-\\\\]+$\'|replace|\'-\'"} }, {"name": "value", "type": "string", "uuid": "c98dd859-417f-42b7-a411-534c0dc42fb0", "last": true, "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li > a", "method": "[href]"} } ], "source": {"selector": "body > header > div > div > div.col-md-4 > div > div > ul > li", "method": "text"} }, {"name": "profile", "type": "[]", "uuid": "38f4f845-51c7-41e3-bcd9-6db1cb985249", "last": true,  "def": [{"name": "name", "type": "string", "uuid": "774f03fa-949b-4052-873c-2883221bd561", "last": false, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\'(\\\\[^：\\\\]+)：\'|replace|\'：\'|\'\'"} }, {"name": "value", "type": "string", "uuid": "17639b6b-bda3-44b9-aab0-52ecd757452a", "last": true, "source": {"selector": "body > header > div > div > div.col-md-5 > ul > li", "method": "text", "filter": "match|\'：(\\\\[^：\\\\]+)\'|replace|\'：\'|\'\'"} } ] } ], "uuid": "c54ea1b3-c482-4055-930e-eb894f0e919c"}';
rule.tzj_detail = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "6bc521ec-e866-43b4-8524-20d39a044aa9", "last": false, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > h1", "method": "text"} }, {"name": "avatar", "type": "string", "uuid": "c497e133-fc81-41ff-b865-33820b9c232a", "last": false, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > div.box-caption > div > img", "method": "[src]"} }, {"name": "detail", "type": "[]", "uuid": "086adcd0-4e55-4ff2-8e18-c7bc9d3c1eca", "last": false, "def": [{"name": "name", "type": "string", "uuid": "9c195b42-c75f-4e96-9147-c5fb00ecff35", "last": false, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > div.box-caption > ul > li", "method": "text", "filter": "split|\'：\'|\'2\'|index|\'0\'"} }, {"name": "value", "type": "string", "uuid": "16f4d632-2602-4f6a-87cb-ee8c5551a6bf", "last": true, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > div.box-caption > ul > li", "method": "text", "filter": "split|\'：\'|\'2\'|index|\'1\'"} } ] }, {"name": "contact_info", "type": "string", "uuid": "633ad340-ccc4-45c4-9b98-7b459636d9b2", "last": false, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > div:nth-child(4) > p", "method": "text"} }, {"name": "summary", "type": "string", "uuid": "889e19e4-a9b3-470d-be19-e39147d43ec5", "last": true, "source": {"selector": "body > div.content > div > div.box-fix-c > div.news-show.company-show > div:nth-child(5)", "method": "text"} } ], "uuid": "e1b95fed-ebd9-4017-bdfa-ae25f26d2ecb"}';
rule.itjuzi = '{"name": "[root]", "type": "{}", "def": [{"name": "name", "type": "string", "uuid": "8474dbad-6849-42d7-a2dd-508a9a16b789", "last": false, "source": {"selector": "body > div.wrapper > div:nth-child(4) > div > div > p > a", "method": "text"} }, {"name": "avatar", "type": "string", "uuid": "0c62af5c-ac03-45d3-9b78-858ae5c3381d", "last": false, "source": {"selector": "#page-content > article > div.normal-box.person-info > div > a > img", "method": "[src]"} }, {"name": "profile", "type": "[]", "uuid": "196d2c04-c23d-42da-9db2-2141bb806a3e", "last": false, "def": [{"name": "name", "type": "string", "uuid": "34ff0974-5967-4f75-b703-be881c96eed5", "last": false, "source": {"selector": "#page-content > article > div.normal-box.person-info > div > div > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'0\'"} }, {"name": "value", "type": "string", "uuid": "7053e225-9d8d-474d-b694-8e14489477be", "last": true, "source": {"selector": "#page-content > article > div.normal-box.person-info > div > div > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'1\'"} } ] }, {"name": "detail", "type": "[]", "uuid": "2c6177df-aae3-4da0-8a37-902c07e8fab1", "last": false, "def": [{"name": "name", "type": "string", "uuid": "47a5c966-c40d-4454-a042-7f20645be4c7", "last": false, "source": {"selector": "#page-content > article > div:nth-child(2) > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'0\'"} }, {"name": "value", "type": "string", "uuid": "99e1e844-4ecb-4e42-80c2-b94def1ed60d", "last": true, "source": {"selector": "#page-content > article > div:nth-child(2) > ul > li", "method": "text", "filter": "split|\': \'|\'2\'|index|\'1\'"} } ] }, {"name": "company", "type": "[]", "uuid": "333aaee1-ce11-4abd-934e-02a016da0e81", "last": true, "def": [{"name": "name", "type": "string", "uuid": "9b8d568b-0656-4266-97f8-b15935fc530c", "last": false, "source": {"selector": "#company-similar > div > div > h4 > a", "method": "text"} }, {"name": "title", "type": "string", "uuid": "d3cd5716-d0a9-4666-ab1a-3953ae65c474", "last": false, "source": {"selector": "#company-similar > div > div > h4", "method": "text"} }, {"name": "summary", "type": "string", "uuid": "45a31ddb-a800-4534-8221-4e9231aafb3f", "last": false, "source": {"selector": "#company-similar > div > div > p", "method": "text"} }, {"name": "avatar", "type": "string", "uuid": "b7701a48-108b-4628-a549-eabc9f1ec333", "last": true, "source": {"selector": "#company-similar > div > a > img", "method": "[src]"} }, {"name": "url", "type": "string", "uuid": "f04b6a8f-0256-40cf-a891-341e6c6e776b", "last": true, "source": {"selector": "#company-similar > div > div > h4 > a", "method": "[href]"} } ] } ], "uuid": "457aa624-8e4b-4d30-b722-2b102e23e7c1"}'
rule.baidu = '{"name": "[root]", "type": "[]", "def": [{"name": "title", "type": "string", "uuid": "75109948-b8ee-4e40-8072-bd3b6997de6a", "last": false, "source": {"selector": "#content_left > ul > li > h3 > a", "method": "text"} }, {"name": "url", "type": "string", "uuid": "cc6ad3af-15e3-405c-9b2f-3f1fec5066c0", "last": false, "source": {"selector": "#content_left > ul > li > h3 > a", "method": "[href]"} }, {"name": "info", "type": "string", "uuid": "cb0b6c98-e933-463b-b861-e32c407ddd6b", "last": true, "source": {"selector": "#content_left > ul > li > div  .c-author", "method": "text"} } ], "uuid": "73fa84fe-f2f5-4f9d-898d-1711eea725cd", "source": {"selector": "#content_left > ul > li", "method": "text"} }';
rule.baidu_web = '{"name": "[root]", "type": "[]", "def": [{"name": "title", "type": "string", "uuid": "725da083-d4dd-4568-aa70-1c39dc52d24e", "last": false, "source": {"selector": "#content_left > .c-container > h3 > a", "method": "text"} }, {"name": "url", "type": "string", "uuid": "cafbf259-9714-4be7-b8ef-386655f8cc7b", "last": false, "source": {"selector": "#content_left > .c-container > h3 > a", "method": "[href]"} }, {"name": "content", "type": "string", "uuid": "3a32c715-e0c5-41e7-b545-4b2c5ca2efc9", "last": false, "source": {"selector": "#content_left > .c-container  *  .c-abstract", "method": "text", "filter": "placeholder"} }, {"name": "content1", "type": "string", "uuid": "a68cbbc4-c336-42cb-9275-9b31865d81ea", "last": false, "source": {"selector": "#content_left > .c-container  > .c-abstract", "method": "text", "filter": "placeholder"} }, {"name": "content2", "type": "string", "uuid": "85b1ae5c-e92e-4d6d-b5b1-f5e9b3cd4aa3", "last": true, "source": {"selector": "#content_left > .c-container  > div.c-row > div.c-span-last", "method": "text", "filter": "placeholder"} } ], "uuid": "214d613e-6345-4f64-9d51-9b2909bc215e", "source": {"selector": "#content_left > .c-container", "method": "text"} }';
module.exports = rule;

//body > div.container_v2.clearfix > section.f_r_con > div.wrap_style.mb15 > ul > li > 

// /(\d+条相同新闻|百度快照|  - )/g


// {
//   "name": "[root]",
//   "type": "[]",
//   "def": [
//     {
//       "name": "title",
//       "type": "string",
//       "uuid": "75109948-b8ee-4e40-8072-bd3b6997de6a",
//       "last": false,
//       "source": {
//         "selector": "#content_left > ul > li > h3 > a",
//         "method": "text"
//       }
//     },
//     {
//       "name": "url",
//       "type": "string",
//       "uuid": "cc6ad3af-15e3-405c-9b2f-3f1fec5066c0",
//       "last": false,
//       "source": {
//         "selector": "#content_left > ul > li > h3 > a",
//         "method": "[href]"
//       }
//     },
//     {
//       "name": "info",
//       "type": "string",
//       "uuid": "cb0b6c98-e933-463b-b861-e32c407ddd6b",
//       "last": true,
//       "source": {
//         "selector": "#content_left > ul > li > div  .c-author",
//         "method": "text"
//       }
//     }
//   ],
//   "uuid": "73fa84fe-f2f5-4f9d-898d-1711eea725cd",
//   "source": {"selector": "#content_left > ul > li", "method": "text"}
// }