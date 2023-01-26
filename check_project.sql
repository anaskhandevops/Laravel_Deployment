-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2023 at 08:25 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `check_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(43, '2014_10_12_000000_create_users_table', 1),
(44, '2014_10_12_100000_create_password_resets_table', 1),
(45, '2019_08_19_000000_create_failed_jobs_table', 1),
(46, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(47, '2023_01_09_065158_create_projects_table', 1),
(48, '2023_01_09_065256_create_tasks_table', 1),
(49, '2023_01_24_070404_create_time__sheets_table', 1),
(50, '2023_01_24_161744_create_user_types_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'my-app-token', 'e22635aa0689afaab56ac5fd3d9140e067e96601f14ae767ccb59adf18076249', '[\"*\"]', '2023-01-24 17:44:36', NULL, '2023-01-24 16:49:18', '2023-01-24 17:44:36'),
(2, 'App\\Models\\User', 2, 'my-app-token', '7f2552ea34e29b93ea3d8b485004a554095868cb13d7966aa81be637bffe650c', '[\"*\"]', NULL, NULL, '2023-01-24 17:43:00', '2023-01-24 17:43:00'),
(3, 'App\\Models\\User', 3, 'my-app-token', '9f7cd7209c6d8817bd23e934d3636b351a096cd976475b56fd7394fc87029a3c', '[\"*\"]', NULL, NULL, '2023-01-25 00:33:54', '2023-01-25 00:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `created_at`, `updated_at`) VALUES
(1, 'Android Native', '2023-01-24 16:50:10', '2023-01-24 16:50:10'),
(2, 'Flutter', '2023-01-24 16:50:47', '2023-01-24 16:50:47'),
(3, 'Maria Db', '2023-01-25 05:21:13', '2023-01-25 05:21:13');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `active_status` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL DEFAULT '',
  `duration` int(255) NOT NULL DEFAULT 0,
  `expected_duration` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `project_id`, `task_name`, `active_status`, `description`, `duration`, `expected_duration`, `created_at`, `updated_at`) VALUES
(2, 1, 'Laravel APi', 'Started', 'LARAVEL APIS ARE USED IN EVERY KIND OF APPS.', 114, '50', '2023-01-24 16:51:01', '2023-01-25 05:24:52'),
(3, 1, 'Joins', 'stopped', 'Flutter App integration', 34, '3', '2023-01-24 16:51:30', '2023-01-24 17:30:23'),
(4, 1, 'Torrent', 'stopped', 'Flutter App integration', 0, '3', '2023-01-24 17:06:35', '2023-01-24 17:06:35'),
(5, 1, 'Database', 'stopped', 'Database interaction with Android Native is very crucial.', 119, '60', '2023-01-25 02:40:25', '2023-01-25 05:25:24'),
(7, 2, 'Block', 'Started', 'Blocks execute some part of screen instead of whole screen.', 0, '70', '2023-01-25 02:44:58', '2023-01-25 05:05:51');

-- --------------------------------------------------------

--
-- Table structure for table `time__sheets`
--

CREATE TABLE `time__sheets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `task_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `start_time` text NOT NULL DEFAULT '',
  `end_time` text NOT NULL DEFAULT '',
  `description` text NOT NULL DEFAULT '',
  `TotalDuration` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `time__sheets`
--

INSERT INTO `time__sheets` (`id`, `task_id`, `user_id`, `start_time`, `end_time`, `description`, `TotalDuration`, `created_at`, `updated_at`) VALUES
(1, 3, 1, '2023-01-24 21:53:01', '2023-01-24 22:04:43', 'stopped', '11', '2023-01-24 16:53:01', '2023-01-24 17:04:43'),
(2, 3, 1, '2023-01-24 22:09:18', '2023-01-24 22:30:23', 'stopped', '21', '2023-01-24 17:09:18', '2023-01-24 17:30:23'),
(3, 2, 1, '2023-01-24 22:28:33', '2023-01-24 22:30:56', 'stopped', '2', '2023-01-24 17:28:33', '2023-01-24 17:30:56'),
(4, 2, 2, '2023-01-24 22:43:13', '2023-01-24 22:44:16', 'stopped', '1', '2023-01-24 17:43:13', '2023-01-24 17:44:16'),
(5, 2, 1, '2023-01-25 08:26:05', '2023-01-25 10:17:23', 'stopped', '111', '2023-01-25 03:26:05', '2023-01-25 05:17:23'),
(6, 5, 1, '2023-01-25 08:26:19', '2023-01-25 10:25:24', 'stopped', '119', '2023-01-25 03:26:19', '2023-01-25 05:25:24'),
(7, 7, 1, '2023-01-25 10:05:51', '', 'started', '', '2023-01-25 05:05:51', '2023-01-25 05:05:51'),
(8, 2, 1, '2023-01-25 10:24:52', '', 'started', '', '2023-01-25 05:24:52', '2023-01-25 05:24:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `work_duration` varchar(255) NOT NULL DEFAULT '',
  `user_type` varchar(255) NOT NULL DEFAULT '',
  `admin_type` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `work_duration`, `user_type`, `admin_type`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Farrukh Faraz', 'farrukhfaraz@gmail.com', '', 'deve', '', '$2y$10$CdsNXy8NDQXurRoHOx1eTOsbfg51SWFAqB/SwTa6oEx/ksLQTj2nm', '2023-01-24 16:49:18', '2023-01-25 02:21:20'),
(2, 'Bhutta', 'bhutta@gmail.com', '', 'developer', '', '$2y$10$RPcDXQ4BQGktYwz9timZ8.6G9QiShexQBk/9Z/I0Lmhz32nrnC04y', '2023-01-24 17:43:00', '2023-01-24 17:43:00'),
(3, 'Admin', 'admin@gmail.com', '', 'admin', '', '$2y$10$rK85B4IF3sUfIvmLEXVw..IJSXZwvwXvgYQkPtjgP9fSFX1XYWU.2', '2023-01-25 00:33:54', '2023-01-25 00:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `users_type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `projects_project_name_unique` (`project_name`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tasks_task_name_unique` (`task_name`),
  ADD KEY `tasks_project_id_foreign` (`project_id`);

--
-- Indexes for table `time__sheets`
--
ALTER TABLE `time__sheets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `time__sheets_task_id_foreign` (`task_id`),
  ADD KEY `time__sheets_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_types_users_type_unique` (`users_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `time__sheets`
--
ALTER TABLE `time__sheets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Constraints for table `time__sheets`
--
ALTER TABLE `time__sheets`
  ADD CONSTRAINT `time__sheets_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`),
  ADD CONSTRAINT `time__sheets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
