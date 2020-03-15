<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r7=*#C>?D<ip%%}4)O5ZR{XgzNi8gXx=H&`%~X>[V3B,0:2DPO(p=p&{DNq+yx)M' );
define( 'SECURE_AUTH_KEY',  'Y{q#Nywh>TE/<E--f(mXM=Hji@4Tk)>jn:NI1QR${l}Gy4uLTXR$LD$[FZxu*s`f' );
define( 'LOGGED_IN_KEY',    'n#ftl5Oe6-2&PtDre$vgB^,y=<m1$:zd5 ,xq0 be)g2Mx`[PM uk{rD{7$XohL6' );
define( 'NONCE_KEY',        '/E@:W1/eP)*Ap<>ZX{|6/!Xt)`;iHv*#x0>8=:*2g+,AEfn2FhPddPjGAxYsm5*%' );
define( 'AUTH_SALT',        '^,(3?$h3,h7 %Dk8|G}..{b LC8z*GSj%GE{+xODmXO;iX1QBNknLqN${QC[iR[a' );
define( 'SECURE_AUTH_SALT', 'O N1Ayzr0C8`)kj;n3Jv4gm$n@axI$3k9($QxY `.@3dGW;FJs4BLy/0k95JXIq[' );
define( 'LOGGED_IN_SALT',   'zxm6HCUDc)BRq>&->T%F0FoA3h4Fd S*r<FKMtg*-mLf8j+leXUj>Kc #F/ItKNr' );
define( 'NONCE_SALT',       'DJa:_I+zE8<HJ+Y74N&Jt-=~Jlw5^?OEaWlPI8UeJck*<:6RIxgWEQwryQU#Z+Pk' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
