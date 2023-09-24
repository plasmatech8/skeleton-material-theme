import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const material: CustomThemeConfig = {
	name: 'material',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0480ff
		'--color-primary-50': '217 236 255', // #d9ecff
		'--color-primary-100': '205 230 255', // #cde6ff
		'--color-primary-200': '192 223 255', // #c0dfff
		'--color-primary-300': '155 204 255', // #9bccff
		'--color-primary-400': '79 166 255', // #4fa6ff
		'--color-primary-500': '4 128 255', // #0480ff
		'--color-primary-600': '4 115 230', // #0473e6
		'--color-primary-700': '3 96 191', // #0360bf
		'--color-primary-800': '2 77 153', // #024d99
		'--color-primary-900': '2 63 125', // #023f7d
		// secondary | #9c27af
		'--color-secondary-50': '240 223 243', // #f0dff3
		'--color-secondary-100': '235 212 239', // #ebd4ef
		'--color-secondary-200': '230 201 235', // #e6c9eb
		'--color-secondary-300': '215 169 223', // #d7a9df
		'--color-secondary-400': '186 104 199', // #ba68c7
		'--color-secondary-500': '156 39 175', // #9c27af
		'--color-secondary-600': '140 35 158', // #8c239e
		'--color-secondary-700': '117 29 131', // #751d83
		'--color-secondary-800': '94 23 105', // #5e1769
		'--color-secondary-900': '76 19 86', // #4c1356
		// tertiary | #d5b800
		'--color-tertiary-50': '249 244 217', // #f9f4d9
		'--color-tertiary-100': '247 241 204', // #f7f1cc
		'--color-tertiary-200': '245 237 191', // #f5edbf
		'--color-tertiary-300': '238 227 153', // #eee399
		'--color-tertiary-400': '226 205 77', // #e2cd4d
		'--color-tertiary-500': '213 184 0', // #d5b800
		'--color-tertiary-600': '192 166 0', // #c0a600
		'--color-tertiary-700': '160 138 0', // #a08a00
		'--color-tertiary-800': '128 110 0', // #806e00
		'--color-tertiary-900': '104 90 0', // #685a00
		// success | #2d7c31
		'--color-success-50': '224 235 224', // #e0ebe0
		'--color-success-100': '213 229 214', // #d5e5d6
		'--color-success-200': '203 222 204', // #cbdecc
		'--color-success-300': '171 203 173', // #abcbad
		'--color-success-400': '108 163 111', // #6ca36f
		'--color-success-500': '45 124 49', // #2d7c31
		'--color-success-600': '41 112 44', // #29702c
		'--color-success-700': '34 93 37', // #225d25
		'--color-success-800': '27 74 29', // #1b4a1d
		'--color-success-900': '22 61 24', // #163d18
		// warning | #ec6c01
		'--color-warning-50': '252 233 217', // #fce9d9
		'--color-warning-100': '251 226 204', // #fbe2cc
		'--color-warning-200': '250 218 192', // #fadac0
		'--color-warning-300': '247 196 153', // #f7c499
		'--color-warning-400': '242 152 77', // #f2984d
		'--color-warning-500': '236 108 1', // #ec6c01
		'--color-warning-600': '212 97 1', // #d46101
		'--color-warning-700': '177 81 1', // #b15101
		'--color-warning-800': '142 65 1', // #8e4101
		'--color-warning-900': '116 53 0', // #743500
		// error | #d32e2e
		'--color-error-50': '248 224 224', // #f8e0e0
		'--color-error-100': '246 213 213', // #f6d5d5
		'--color-error-200': '244 203 203', // #f4cbcb
		'--color-error-300': '237 171 171', // #edabab
		'--color-error-400': '224 109 109', // #e06d6d
		'--color-error-500': '211 46 46', // #d32e2e
		'--color-error-600': '190 41 41', // #be2929
		'--color-error-700': '158 35 35', // #9e2323
		'--color-error-800': '127 28 28', // #7f1c1c
		'--color-error-900': '103 23 23', // #671717
		// surface | #ffffff
		'--color-surface-50': Array(3).fill('255').join(' '),
		'--color-surface-100': Array(3).fill('250').join(' '),
		'--color-surface-200': Array(3).fill('228').join(' '),
		'--color-surface-300': Array(3).fill('165').join(' '),
		'--color-surface-400': Array(3).fill('143').join(' '),
		'--color-surface-500': Array(3).fill('112').join(' '),
		'--color-surface-600': Array(3).fill('87').join(' '),
		'--color-surface-700': Array(3).fill('64').join(' '),
		'--color-surface-800': Array(3).fill('32').join(' '),
		'--color-surface-900': Array(3).fill('27').join(' ')
	}
};
