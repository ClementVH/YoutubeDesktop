var localapi = module.exports = {};

localapi.getVideosFromQuery = function(req, res) {

    var result = {};
    result.kind = "youtube#searchListResponse";

    var items = [
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
        {
            id: {
                kind: "youtube#video",
                videoId: "idofthevideo"
            },
            snippet: {
                title: "Awesom title",
                channelTitle: "Awesome Channel",
                publishedAt: 1477088366000,

                thumbnails: {
                    medium: {
                        url: 'testurl.png'
                    }
                }
            }
        },
    ];

    result.items = items;

    res.send(result);

}

localapi.getSuggestQuery = function(req, res) {

    var query = req.query.q;

    var result = [ query, ['test', 'test', 'test', 'test', 'test', 'test', 'test'] ];

    res.send(result);

}

localapi.getVideoInfos = function(req, res) {

    res.send({});

}