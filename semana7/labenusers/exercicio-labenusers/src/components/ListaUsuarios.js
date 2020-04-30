import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const BoxLista = styled.div`
    display: grid;
    justify-content: center;
`
const Item = styled.div`
`

const BotaoLista = styled.button`
`

class ListaUsuarios extends React.Component {
    state = {
        usersList: []
    };

    componentDidMount() {
        this.getUsersList();
    }

    getUsersList = async () => {
        try {
            const resposta = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                {
                    headers: {
                        Authorization: 'Beatriz-Mattos-Julian'
                    }
                }
            );

            this.setState({ usersList: resposta.data });

        } catch (error) {
        }
    };

    onClickDeletar = userId => {
        if(window.confirm('Tem certeza que deseja deletar esse usuário?')) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                {
                    headers: {
                        Authorization: "Beatriz-Mattos-Julian"
                    }
                }
            )
                .then(resposta => {
                    window.alert('Usuario deletado com sucesso');
                    this.getUsersList();
                })
                
            } else {
                .catch(error => {
                    window.alert('Erro na exclusão do usuário.');
                });

            }
    };

    render() {
        return (
            <BoxLista>

                <div>
                    <h2>Lista</h2>

                    <div>
                        {this.state.usersList.map(user => {
                            return (
                                <Item>
                                    <p>{user.name}</p>
                                    <BotaoLista onClick={() => this.onClickDeletar(user.id)}>Remover</BotaoLista>
                                </Item>
                            );
                        })}
                    </div>

                </div>
            </BoxLista>
        );
    }
}

export default ListaUsuarios;