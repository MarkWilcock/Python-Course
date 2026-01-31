# Python Course README

This is the content of a set of Python courses.  For more details see [the course outlines](https://zomalex.co.uk/python-courses/python_course_list.html)

## Foundation course - Agenda

### Bootcamp

Getting started

* [lesson](basics_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/basics_lesson.ipynb)
* [exercise](basics_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/basics_exercise.ipynb)

Data types

* [lesson](data_types_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/data_types_lesson.ipynb)
* [exercise](data_types_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/data_types_exercise.ipynb)

Strings (and methods, and indexing / slicing)

* [lesson](strings_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/strings_lesson.ipynb)
* [exercise](strings_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/strings_exercise.ipynb)

### Data Structures

Lists

* [lesson](lists_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/lists_lesson.ipynb)
* [exercise](lists_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/lists_exercise.ipynb)

Tuples

* [lesson](tuples_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/tuples_lesson.ipynb)
* [exercise](tuples_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/tuples_exercise.ipynb)

Dicts

* [lesson](dicts_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/dicts_lesson.ipynb)
* [exercise](dicts_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/dicts_exercise.ipynb)

List comprehensions

* [lesson](list_comprehensions_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/list_comprehensions_lesson.ipynb)
* [exercise](list_comprehensions_exercise.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/list_comprehensions_exercise.ipynb)

### Practical examples

Install a package: [exercise](install_module_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/install_module_lesson.ipynb)

Use the request package in an [exercise](api_astronauts_exercise.ipynb) in a practical example to retrieve data from an API of the people currently in space. [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/api_astronauts_exercise.ipynb)

### Miscellaneous modules and packages

A very brief look at some common modules and packages:

* [datetime](datetime_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/datetime_lesson.ipynb)
* [math and statistics](math_stats_modules_lesson.ipynb) [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](
  https://colab.research.google.com/github/markwilcock/python-course/blob/main/math_stats_modules_lesson.ipynb)

## Intermediate course - agenda

Consolidation of foundation content [day2_starter_exercise](day2_starter_exercise.ipynb). This revises strings, lists and dicts, and has a final brain teaser exercise.

Data Structures -  Tuples [lesson](tuples_lesson.ipynb) and [exercise](tuples_exercise.ipynb)

Control flow [lesson](control_flow_lesson.ipynb) and [exercise](control_flow_exercise.ipynb)

Writing functions [lesson](functions_lesson.ipynb), [exercise](functions_exercise.ipynb) and [another exercise](functions_exercise_bmi.ipynb)

### Practical Examples

[OpenAI demo](api_openai_example.ipynb) connects to ChatGPT to have a conversation

[Web Scraping tutorial](web_scrape_lesson.ipynb)

Read and write Excel files: a simple [starter example](excel_automation_starter_example.ipynb) and a [more complete example](practical_example_1.ipynb) that reads several tables from an Excel file into pandas DataFrames, merges the the tables, summarises the data, creates a chart then exports the summarised data in both CSV and Excel file formats

[Introduction to data analysis with pandas - tutorial](data_analysis/bank_churn_example.ipynb)

[Introduction to data visualisation with seaborn - tutorial](data_analysis/pandas_seaborn_intro_lesson.ipynb)

[Retrieving data from SQL - demo](data_analysis/pandas_sql_connection.ipynb)

Retrieve Data from an API / web pages the requests package

* [Police Street Crime Exercise](api_police_exercise.ipynb) retrieves recent crime incidents in a local area
* COVID Cases examples using [requests](api_covid_requests_example.ipynb) and  then the [uk_covid19 SDK](api_covid_sdk_example.ipynb)

## Advanced course - agenda

The advanced course focusses on data analysis with the numpy, pandas and seaborn packages.  The numpy package underpins many data analysis packages (including pandas), and AI packages.

**numpy** [lesson](data_analysis/numpy_lesson.ipynb) and [exercise](data_analysis/numpy_exercise.ipynb)

**pandas** is *the* library for data analysis in Python.  The course covers it in detail.

* [lesson 1](data_analysis/pandas_lesson_01.ipynb) and [exercise 1](data_analysis/pandas_exercise_01.ipynb)
* [lesson 2](data_analysis/pandas_lesson_02.ipynb) and [exercise 2](data_analysis/pandas_exercise_02.ipynb)
* [lesson 3](data_analysis/pandas_lesson_03.ipynb) and [exercise 3](data_analysis/pandas_exercise_03.ipynb)
* [lesson 4](data_analysis/pandas_lesson_04.ipynb) and [exercise 4](data_analysis/pandas_exercise_04.ipynb)
* titanic [exercise](data_analysis/pandas_titanic_exercise.ipynb)
* [fx rates example](data_analysis/pandas_timeseries_example_fx_rates.ipynb) (time-series data)
* [league table example](data_analysis/pandas_adv_example_league_table.ipynb)
* [COVID cases example](data_analysis/pandas_example_covid_cases.ipynb)

Visualise data with the **seaborn** package.

* [diamonds exercise](data_viz/seaborn_diamonds_exercise.ipynb)
* [iris exercise](data_viz/seaborn_iris_exercise.ipynb)
* [MPG example](data_viz/viz_mpg.ipynb)
* [survey example](data_viz/viz_survey.ipynb)
* [restaurant tips example](data_viz/viz_tips.ipynb)
* [titanic passenger example](data_viz/viz_titanic.ipynb)

### Functional and object-oriented styles of programming

Functional programming [lesson](functional_lesson.ipynb) and [exercise](functional_exercise.ipynb)

Building classes (object-oriented programming) [lesson](oop_lesson.ipynb) and [exercise](oop_exercise_vaccine.ipynb)

### Optional sections

If time allows, a very brief look at:

* [exceptions](exceptions_lesson.ipynb),
* [type annotations](type_annotations_lesson.ipynb),
* reading or writing files, managing directories with the [os and shutil](os_module_lesson.ipynb) modules
* the [re module for regex functionality](regex_lesson.ipynb)
