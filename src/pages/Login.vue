<template>
    <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center class="loginUnderlay"> 
            <v-flex xs12 sm4 elevation-6 class="loginBox">
                <v-toolbar class="pt-5 grey darken-3">
                    <v-toolbar-title class="white--text">
                        <font-awesome-icon icon="coffee" />
                        <h4 class="dev-welcome">Welcome Back to Chuck Norris API</h4>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card>
                    <v-card-text class="pt-4">
                        <div>
                            <v-form v-model="valid" ref="form">
                                <v-text-field outline color="secondary" label="Enter your e-mail address" v-model="email" :rules="emailRules"
                                    required></v-text-field>
                                <v-text-field outline color="secondary" label="Enter your password" v-model="password" min="8" :append-icon="e1 ? 'visibility_off' : 'visibility'"
                                    @click:append="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" :rules="passwordRules"
                                    counter required></v-text-field>
                                <v-layout justify-space-between>
                                    <v-btn @click="submit" :class=" { 'grey darken-3 white--text' : valid, disabled: !valid }">Login</v-btn>
                                </v-layout>
                            </v-form>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                valid: false,
                e1: true,
                password: '',
                passwordRules: [
                    (v) => !!v || 'Password is required',
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    //this.$refs.form.$el.submit();
                    this.$store.dispatch("authenticate").then(() => {
                        // eslint-disable-next-line no-console
                        console.log("User authenticated? " + this.$store.getters.isAuthenticated);
                        this.$router.push('/home');
                    }, error => {
                        // eslint-disable-next-line no-console
                        console.error(error);
                    })     
                }
            },
            clear() {
                this.$refs.form.reset()
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../material-colours.scss';

    $prod: "dev";
    $primary-color: #505050;
    $secondary-color: rebeccapurple;

    @mixin transform($property) {
        -webkit-transform: $property;
        -ms-transform: $property;
        transform: $property;
    }

    %boxDefaults {
        border: 10px dashed $material-teal-a400;
        padding: 10px;
    }

    .loginBox { 
        @include transform(rotate(350deg)); 
        @extend %boxDefaults;
    }

    .#{$prod}-welcome{
        color: blue + yellow;
    }

    .loginOverlay {
        background-color: $material-light-blue-a700;

        .loginUnderlay {
            background-color: $primary-color;
        }
    }



</style>
