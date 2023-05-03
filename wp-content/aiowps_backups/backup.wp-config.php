<?php


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u672755737_kNpu0' );

/** Database username */
define( 'DB_USER', 'u672755737_47PFy' );

/** Database password */
define( 'DB_PASSWORD', 'pxEwrmo4DV' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';zn%$(cj&{~(}&Fy:mal D,rWpN4&+-}w!o);Vg]QGDl$PXavj^vl6lyYqTOEFw ' );
define( 'SECURE_AUTH_KEY',   'fwyG($Fe_#8oqvH-[Z+`<vl9i4L6mM:gcO.45N]rW#Eyn+rn@xF_*E.*DJAYrb6v' );
define( 'LOGGED_IN_KEY',     'J,%zq#hrd;y7[Vt/+mIXR/)o]Dy-pT:Yey,36@s;&ThPDbsHS?_JV}BWlF-)XO2!' );
define( 'NONCE_KEY',         ' Rg0.HF^v]#j(=|i/g#[sOna!V)7$6O?0OuHUK`D=h#5TK/SVF2-}{&j~*eD~09a' );
define( 'AUTH_SALT',         'gN$_E]B;z|Ug2Oh<hvdqsZA^$i6TX|I1ePH?t?plOP<W6]#v&ziUJkZlx:>xM4H%' );
define( 'SECURE_AUTH_SALT',  'aE(%zV?H`GQDq_r(0*&]3vE+>Ey9V6.$oyb~1g]<Rg^f<ngD7h+kB|KL7uT{<wQ$' );
define( 'LOGGED_IN_SALT',    'enth+D{w[hYH6u#X[,u VKxDG>%j=FAB%9$GUVE:@tVx&s?&(P85P}S,=_ Yd`TP' );
define( 'NONCE_SALT',        ' p{q+) oM}:7!~{90KQY2?(NnX.-xF 9SL8&nu^`8@;Wqj7j2w.hB1PB@,&O;B|7' );
define( 'WP_CACHE_KEY_SALT', '?!AGy71Gwnr:C[zTAqtn{m%`uC3}E!9aA>xM{5X(Xd9=1?jO)c31$x6Ibu(Gx2/z' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
