import React, {useEffect} from 'react';
import styled from 'styled-components'
import {API} from "../../../constants";

const ArticlesStyled = styled.div`
  padding: 1.5rem 2rem;
`

const Articles = () => {


    useEffect(() => {
         const loadData = async () => {
            const response = await fetch(API.articles.fashion);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            } else {
                return Promise.reject(`Http error: ${response.status}`);
            }
        }

        loadData()
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("There was an error connecting: ", error);
            });

    }, [])


    return (
        <ArticlesStyled>

        </ArticlesStyled>
    );
};

export default Articles;