import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

/**
 * HeroImage component displays a hero image with title and text.
 */
const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                {/* Title */}
                <h1>{title}</h1>
                {/* Text */}
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage;
