<template>
    <div>
        <h1>Bitmoji friends!</h1>

        <div class="row mb-4">
            <div class="col-6 col-sm-4 col-md-3">
                <div class="card">
                    <img class="card-img-top" :src="previewImage('me')" alt="Card image cap">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3">
                <div class="card">
                    <img class="card-img-top" :src="previewImage('you')" alt="Card image cap">
                </div>
            </div>
        </div>

        <form>
            <div class="form-group">
                <label for="search">Search</label>
                <input type="text" class="form-control" id="search" v-model="search" placeholder="e.g. Cool">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="swap" id="swap">
                    <label class="form-check-label" for="swap">
                        Swap positions
                    </label>
                </div>
            </div>
        </form>

        <div class="row">
            <div class="col-6 col-sm-4 col-md-3" v-for="image in filteredList">
                <div class="card mb-4">
                    <img class="card-img-top" :src="imageURL(image)" :title="image.tags">
                </div>
            </div>
        </div>

        <div v-if="filteredList.length < 1" class="alert alert-primary" role="alert">
            Sorry, no results :(
        </div>
    </div>
</template>

<script>
    import config from '../.config.js';

    export default {
        data() {
            return {
                ids: {
                    me: config.me,
                    you: config.you
                },
                allImages: [],
                swap: true,
                search: '',
                previews: {}
            }
        },
        mounted: function() {
            this.loadImages();
        },
        computed: {
            filteredList() {
                let search = this.search;

                return this.allImages.filter(function(image) {
                    let tags = image.tags.join(' ');

                    return tags.includes(search.toLowerCase());
                })
            }
        },
        methods: {
            loadImages: function() {
                const endpoint = '/templates.json';

                this.$http.get(endpoint).then(function(response) {
                    this.allImages = response.body.friends;
                });
            },
            imageURL: function(image) {
                let first = (this.swap) ? this.ids.me : this.ids.you;
                let second = (this.swap) ? this.ids.you : this.ids.me;

                return image.src.replace('%s', first).replace('%s', second);
            },
            previewImage: function(name) {
                if (typeof this.previews[name] !== 'undefined') {
                    return this.previews[name];
                }

                const images = [
                    '9941609',
                    '10219680',
                    '10214353',
                    '10187800'
                ];

                let image = images[Math.floor(Math.random() * images.length)];

                this.previews[name] = `https://render.bitstrips.com/v2/cpanel/${image}-${this.ids[name]}-v1.png`;

                return this.previews[name];
            }
        }
    }
</script>