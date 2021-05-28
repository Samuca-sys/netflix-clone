import React from 'react';

import {
	ImFacebook2,
	ImInstagram,
	ImTwitter,
	ImYoutube,
	ImHeart,
} from 'react-icons/im';

import './styles.css';

export function Footer() {
	return (
		<footer>
			<div className='footer--info'>
				<div className='footer--icons'>
					<a
						href='https://www.facebook.com/netflixbrasil'
						target='_blank'
						aria-label='facebook'
						rel='noreferrer'
					>
						<ImFacebook2 size={30} />
					</a>
					<a
						href='https://www.instagram.com/NetflixBrasil'
						target='_blank'
						aria-label='instagram'
						rel='noreferrer'
					>
						<ImInstagram size={30} />
					</a>
					<a
						href='https://twitter.com/NetflixBrasil'
						target='_blank'
						aria-label='twitter'
						rel='noreferrer'
					>
						<ImTwitter size={30} />
					</a>
					<a
						href='https://www.youtube.com/user/NetflixBRA'
						target='_blank'
						aria-label='youtube'
						rel='noreferrer'
					>
						<ImYoutube size={30} />
					</a>
				</div>
				<div className='footer--list'>
					<ul>
						<li>
							<span>Idioma e Legendas</span>
						</li>
						<li>
							<span>Imprensa</span>
						</li>
						<li>
							<span>Privacidade</span>
						</li>
						<li>
							<span>Entre em contato</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>Audiodescrição</span>
						</li>
						<li>
							<span>Relações com investidores</span>
						</li>
						<li>
							<span>Avisos legais</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>Centro de Ajuda</span>
						</li>
						<li>
							<span>Carreiras</span>
						</li>
						<li>
							<span>Preferências de cookies</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>Cartão pré-pago</span>
						</li>
						<li>
							<span>Termos de uso</span>
						</li>
						<li>
							<span>Informações corporativas</span>
						</li>
					</ul>
				</div>
				<p>
					Made with <ImHeart /> by
					<a href='https://github.com/samuca-sys'>
						<span> Samuel Macedo</span>
					</a>
					.
				</p>
				<p>Data from TheMovieDB.</p>
				<p>
					&copy; 1997-
					{new Date().getFullYear()} | Netflix, Inc.
				</p>
			</div>
		</footer>
	);
}
