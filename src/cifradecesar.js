import React, { Component } from 'react'


export default class CifraDeCesar extends Component {
    render() {
        return (
            <section id="cesar">
                <div class="container">
                    <h2 class="text-center text-uppercase text-secondary mb-0">Cifra de César</h2>
                    <hr class="star-dark mb-5" />
                    <div class="row">
                        <div class="col-lg-8 mx-auto">

                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Mensagem</label>
                                        <textarea class="form-control" id="message" rows="5" placeholder="Digite sua Mensagem!" required="required" ></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chave</label>
                                        <input class="form-control" id="chave" type="number" placeholder="Chave" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Criptografar!</button>
                                    <br />
                                    <br />
                                    <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Descriptografar!</button>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <textarea class="form-control" id="message" rows="5" placeholder="Mensagem Descriptografada!" required="required"  disabled></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}