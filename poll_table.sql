--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7 (Ubuntu 10.7-1.pgdg16.04+1)
-- Dumped by pg_dump version 10.7 (Ubuntu 10.7-1.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: polls; Type: TABLE; Schema: public; Owner: nokea
--

CREATE TABLE public.polls (
    id integer NOT NULL,
    name text NOT NULL,
    question text NOT NULL,
    yes_votes integer,
    no_votes integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.polls OWNER TO nokea;

--
-- Name: polls_id_seq; Type: SEQUENCE; Schema: public; Owner: nokea
--

CREATE SEQUENCE public.polls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.polls_id_seq OWNER TO nokea;

--
-- Name: polls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nokea
--

ALTER SEQUENCE public.polls_id_seq OWNED BY public.polls.id;


--
-- Name: polls id; Type: DEFAULT; Schema: public; Owner: nokea
--

ALTER TABLE ONLY public.polls ALTER COLUMN id SET DEFAULT nextval('public.polls_id_seq'::regclass);


--
-- Data for Name: polls; Type: TABLE DATA; Schema: public; Owner: nokea
--

COPY public.polls (id, name, question, yes_votes, no_votes, created_at, updated_at) FROM stdin;
2	name1	quest1	0	0	2019-07-20 12:49:36.648503	2019-07-20 12:49:36.648503
3	name2	do polls matter?	1	1	2019-07-20 12:49:36.648503	2019-07-20 12:49:36.648503
4	Heralds Boulders	Are Polls Made up of matter?	0	1	2019-07-20 12:49:36.648503	2019-07-20 12:49:36.648503
\.


--
-- Name: polls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nokea
--

SELECT pg_catalog.setval('public.polls_id_seq', 4, true);


--
-- Name: polls polls_pkey; Type: CONSTRAINT; Schema: public; Owner: nokea
--

ALTER TABLE ONLY public.polls
    ADD CONSTRAINT polls_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

