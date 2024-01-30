import React from 'react';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram';

const Footer = () => {
	return(
		<div className='flex flex-row'>
			<section>
				<SocialIcon url='https://www.instagram.com/uofrcybersec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' />
			</section>
		</div>
	)
}

export default Footer;
