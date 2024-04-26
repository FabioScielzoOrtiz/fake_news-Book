Search.setIndex({"docnames": ["Fake_News_Analysis_Classification", "intro"], "filenames": ["Fake_News_Analysis_Classification.ipynb", "intro.md"], "titles": ["<strong>Fake News Analysis and Detection with Naive Bayes</strong>", "Fake News: Analysis and Detection"], "terms": {"import": 0, "numpi": 0, "np": 0, "panda": 0, "pd": 0, "polar": 0, "pl": 0, "sy": 0, "pickl": 0, "seaborn": 0, "sn": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "set_styl": 0, "whitegrid": 0, "re": 0, "nltk": 0, "download": 0, "from": 0, "corpu": 0, "vader": 0, "sentimentintensityanalyz": 0, "vader_lexicon": 0, "sklearn": 0, "feature_extract": 0, "text": [0, 1], "tfidfvector": 0, "neighbor": 0, "kneighborsclassifi": 0, "model_select": 0, "train_test_split": 0, "metric": 0, "accuracy_scor": 0, "confusion_matrix": 0, "confusionmatrixdisplai": 0, "naive_bay": 0, "gaussiannb": 0, "bernoullinb": 0, "categoricalnb": 0, "complementnb": 0, "multinomialnb": 0, "wordcloud": 0, "baseestim": 0, "transformermixin": 0, "classifiermixin": 0, "cross_val_scor": 0, "kfold": 0, "path": 0, "insert": 0, "0": 0, "r": 0, "c": 0, "user": 0, "fscielzo": 0, "packag": 0, "bigeda_package_priv": 0, "bigeda": 0, "plot": 0, "barplot": 0, "pyml_package_priv": 0, "pyml": 0, "simpleevalu": 0, "class": 0, "naive_tfidf_classifi": 0, "def": 0, "__init__": 0, "self": 0, "n_top_train": 0, "10": 0, "n_top_new": 0, "fit": 0, "x": 0, "y": 0, "classes_": 0, "uniqu": 0, "top_tokens_train_class_": 0, "tfidf_mean_class": 0, "arrai": 0, "mean": 0, "axi": 0, "argsort": 0, "return": 0, "predict": 0, "y_hat": 0, "i": 0, "rang": 0, "shape": 0, "top_tokens_new": 0, "toarrai": 0, "prop_match": 0, "prop_matches_valu": 0, "list": 0, "append": 0, "argmax": 0, "sparsetodens": 0, "pass": 0, "none": 0, "transform": 0, "In": 0, "thi": [0, 1], "work": [0, 1], "we": [0, 1], "analyz": 0, "Not": 0, "appli": 0, "supervis": 0, "algorithm": 0, "The": [0, 1], "set": 0, "ar": [0, 1], "go": 0, "contain": 0, "44898": 0, "about": 0, "american": 0, "polit": 0, "issu": 0, "between": 0, "31": 0, "march": 0, "2015": 0, "18": 0, "februari": 0, "2018": 0, "some": 0, "them": 0, "other": 0, "have": [0, 1], "inform": 0, "variabl": 0, "which": [0, 1], "wa": 0, "kaggl": 0, "its": 0, "link": 0, "avail": 0, "anymor": 0, "load": 0, "an": 0, "creat": 0, "indic": 0, "1": 0, "fake_df": 0, "read_csv": 0, "csv": 0, "true_df": 0, "true": 0, "df_true": 0, "with_column": 0, "seri": 0, "repeat": 0, "len": 0, "alia": 0, "df_fake": 0, "news_df": 0, "concat": 0, "how": 0, "vertic": 0, "fals": 0, "ye": 0, "head": 0, "7": 0, "5": 0, "titletextsubjectdatefakestrstrstrstri32": 0, "quot": 0, "donald": 0, "trump": 0, "": 0, "j": 0, "decemb": 0, "2": 0, "drunk": 0, "brag": 0, "hous": 0, "intellig": 0, "sheriff": 0, "david": 0, "On": 0, "fridai": 0, "30": 0, "so": 0, "ob": 0, "christma": 0, "d": 0, "29": 0, "pope": 0, "franci": 0, "u": 0, "25": 0, "racist": 0, "alabama": 0, "fresh": 0, "off": 0, "23": 0, "can": 0, "weight": 0, "rel": 0, "differ": 0, "cover": 0, "unique_subject": 0, "count_subject": 0, "subject": 0, "return_count": 0, "unique_subjects_sort": 0, "freq_subjects_sort": 0, "rel_freq_subjects_sort": 0, "round": 0, "sum": 0, "3": 0, "100": 0, "news_subjects_rel_freq": 0, "datafram": 0, "rel_freq_": 0, "8": 0, "subjectsrel_freq_": 0, "strf64": 0, "politicsnew": 0, "worldnew": 0, "22": 0, "6": 0, "20": 0, "15": 0, "left": 0, "9": 0, "govern": 0, "us_new": 0, "middl": 0, "east": 0, "As": 0, "you": 0, "see": 0, "most": 0, "part": 0, "focu": [0, 1], "usa": 0, "scenario": 0, "also": 0, "signific": 0, "amount": 0, "world": 0, "visual": 0, "both": 0, "color": 0, "darkorang": 0, "figsiz": 0, "4": 0, "fontsiz": 0, "y_up_limit": 0, "xlabel": 0, "xlabel_s": 0, "12": 0, "title_s": 0, "print": 0, "nfake": 0, "well": [0, 1], "balanc": 0, "sinc": 0, "52": 0, "48": 0, "each": 0, "group": 0, "to_numpi": 0, "n_new": 0, "words_count": 0, "split": 0, "group_bi": 0, "agg": 0, "col": 0, "fakewords_counti32f640385": 0, "6400991423": 0, "197905": 0, "hte": 0, "ha": 0, "423": 0, "385": 0, "defin": 0, "function": 0, "take": 0, "input": 0, "output": 0, "what": [0, 1], "gener": 0, "fulfil": 0, "certain": 0, "condit": 0, "case": 0, "ones": 0, "convert": 0, "lowercas": 0, "new_text": 0, "lower": 0, "remov": 0, "web": 0, "page": 0, "sub": 0, "http": 0, "punctuat": 0, "mark": 0, "regex": 0, "_": 0, "multipl": 0, "white": 0, "space": 0, "individu": 0, "sep": 0, "length": 0, "syntaxwarn": 0, "invalid": 0, "escap": 0, "sequenc": 0, "11": 0, "appdata": 0, "local": 0, "temp": 0, "ipykernel_20212": 0, "2381969994": 0, "py": 0, "show": 0, "my": 0, "email": 0, "fabio": 0, "gmail": 0, "com": 0, "project": [0, 1], "carri": 0, "out": 0, "2024": 0, "univers": 0, "www": 0, "uc3m": 0, "e": 0, "home": 0, "dtype": 0, "u10": 0, "stop": 0, "consid": 0, "signif": 0, "stop_word": 0, "english": 0, "pic": 0, "getti": 0, "acr": 0, "filessupport": 0, "flickr": 0, "fj": 0, "somodevilla": 0, "var": 0, "henningsen": 0, "ck": 0, "cdata": 0, "subscrib": 0, "mcname": 0, "amp": 0, "wfb": 0, "screenshot": 0, "hesher": 0, "nyp": 0, "cking": 0, "helton": 0, "raedl": 0, "donnel": 0, "getelementbyid": 0, "src": 0, "behar": 0, "createel": 0, "getelementsbytagnam": 0, "parentnod": 0, "wnd": 0, "insertbefor": 0, "jssdk": 0, "nowicki": 0, "xfbml": 0, "camerota": 0, "sdk": 0, "don": 0, "t": 0, "he": 0, "m": 0, "doesn": 0, "suu": 0, "thei": 0, "didn": 0, "veri": 0, "won": 0, "one": 0, "ve": 0, "when": 0, "ll": 0, "would": 0, "like": 0, "even": 0, "could": 0, "two": 0, "mani": 0, "anger": 0, "reilli": 0, "said": 0, "told": 0, "via": 0, "map_el": 0, "ad": 0, "id": 0, "arang": 0, "text_id": 0, "explod": 0, "frame": 0, "column": 0, "tokens_explode_df": 0, "form": 0, "filter": 0, "is_in": 0, "count": 0, "colum": 0, "tokens_df": 0, "from_panda": 0, "to_panda": 0, "groupbi": 0, "unstack": 0, "fill_valu": 0, "stack": 0, "reset_index": 0, "name": 0, "tokens_count": 0, "la": 0, "unique_token": 0, "count_token": 0, "depend": 0, "tokensfakecountstri32i64": 0, "aa": 0, "022": 0, "124": 0, "aaa": 0, "07": 0, "19": 0, "aaaaaaaand": 0, "00": 0, "all": 0, "index": 0, "text_idtokensfakei32stri320": 0, "wish": 0, "happi": 0, "tail": 0, "text_idtokensfakei32stri3244897": 0, "energi": 0, "044897": 0, "technologi": 0, "aviat": 0, "among": 0, "repetit": 0, "9977651": 0, "That": 0, "same": 0, "But": 0, "n_class": 0, "int": 0, "125562": 0, "faketokens_counti32f640368": 0, "01409": 0, "409": 0, "368": 0, "frequent": 0, "top_fake_tokens_count": 0, "sort": 0, "descend": 0, "freq_top_fake_tokens_count": 0, "top_not_fake_tokens_count": 0, "freq_top_not_fake_tokens_count": 0, "n_top": 0, "fig": 0, "ax": 0, "subplot": 0, "flatten": 0, "red": 0, "alpha": 0, "85": 0, "blue": 0, "set_titl": 0, "set_ylabel": 0, "size": 0, "set_xlabel": 0, "tick_param": 0, "rotat": 0, "labels": 0, "suptitl": 0, "f": 0, "bold": 0, "02": 0, "subplots_adjust": 0, "hspace": 0, "wspace": 0, "genuin": 0, "vice": 0, "versa": 0, "genuine_top_fake_tokens_count_idx": 0, "genuine_top_not_fake_tokens_count_idx": 0, "genuine_top_fake_tokens_count": 0, "freq_genuine_top_fake_tokens_count": 0, "genuine_top_not_fake_tokens_count": 0, "freq_genuine_top_not_fake_tokens_count": 0, "cloud": [0, 1], "word_cloud_fake_data": 0, "zip": 0, "word_cloud_not_fake_data": 0, "wordcloud_fak": 0, "width": 0, "400": 0, "height": 0, "200": 0, "background_color": 0, "random_st": 0, "123": 0, "generate_from_frequ": 0, "wordcloud_not_fak": 0, "imshow": 0, "interpol": 0, "bilinear": 0, "14": 0, "05": 0, "hide": 0, "style": 0, "ital": 0, "66": 0, "interpret": 0, "promin": 0, "obama": 0, "clinton": 0, "media": 0, "twitter": 0, "suggest": 0, "figur": 0, "dure": 0, "period": 0, "align": 0, "2016": 0, "presidenti": 0, "elect": 0, "presenc": 0, "impli": 0, "platform": 0, "might": 0, "spread": 0, "discuss": 0, "right": 0, "displai": 0, "reuter": 0, "washington": 0, "These": 0, "more": 0, "formal": 0, "institut": 0, "than": 0, "those": 0, "known": 0, "intern": 0, "organ": 0, "sourc": 0, "here": 0, "associ": 0, "offici": 0, "entiti": 0, "process": 0, "infer": 0, "articl": 0, "mention": 0, "high": 0, "profil": 0, "person": 0, "social": 0, "while": 0, "relat": 0, "interest": 0, "studi": 0, "differenti": 0, "wai": 0, "lot": 0, "littl": 0, "One": 0, "do": 0, "through": 0, "or_": 0, "05cm": 0, "dfrac": 0, "p_1": 0, "p_0": 0, "35cm": 0, "15cm": 0, "n_1": 0, "n_0": 0, "where": 0, "proport": 0, "time": 0, "appear": 0, "observ": 0, "12cm": 0, "against": 0, "accord": 0, "vector": 0, "n": 0, "odds_fake_notfak": 0, "odds_notfake_fak": 0, "top_fake_tokens_odd": 0, "top_not_fake_tokens_odd": 0, "odds_fake_notfake_sort": 0, "odds_notfake_fake_sort": 0, "genuine_top_fake_tokens_odds_idx": 0, "genuine_top_not_fake_tokens_odds_idx": 0, "genuine_top_fake_tokens_odd": 0, "odds_genuine_top_fake_token": 0, "genuine_top_not_fake_tokens_odd": 0, "freq_genuine_top_not_fake_tokens_odd": 0, "68": 0, "finicum": 0, "cum": 0, "philosoph": 0, "boiler": 0, "uninterrupt": 0, "wikimedia": 0, "specif": 0, "narr": 0, "commonli": 0, "found": 0, "It": 0, "worth": 0, "note": 0, "seem": 0, "unusu": 0, "context": 0, "includ": 0, "unexpect": 0, "less": 0, "relev": 0, "content": 0, "parti": 0, "russia": 0, "china": 0, "presid": 0, "state": 0, "clearli": 0, "discours": 0, "possess": 0, "countri": 0, "leader": 0, "mai": 0, "action": 0, "polici": 0, "attribut": 0, "sensat": 0, "authorit": 0, "matter": 0, "main": [0, 1], "mine": 0, "natur": 0, "languag": 0, "retriev": 0, "quantifi": 0, "A": 0, "simpl": 0, "measur": 0, "within": 0, "approach": 0, "although": 0, "limit": 0, "though": 0, "provid": 0, "For": [0, 1], "mathemat": 0, "50": 0, "second": 0, "doe": 0, "much": 0, "To": 0, "solv": 0, "problem": 0, "multipli": 0, "question": 0, "rest": 0, "possibl": 0, "reduc": 0, "therefor": 0, "statist": 0, "account": 0, "2cm": 0, "n_d": 0, "toke": 0, "log": 0, "total": 0, "If": 0, "greater": 0, "tfidf": 0, "cdot": 0, "given": 0, "present": 0, "small": 0, "onli": 0, "few": 0, "becaus": 0, "befor": 0, "common": 0, "scheme": 0, "good": 0, "goal": 0, "instead": 0, "raw": 0, "occurr": 0, "scale": 0, "down": 0, "impact": 0, "occur": 0, "henc": 0, "empir": 0, "featur": 0, "fraction": 0, "train": 0, "formula": 0, "df": 0, "smooth_idf": 0, "effect": 0, "equat": 0, "abov": 0, "zero": 0, "entir": 0, "ignor": 0, "default": 0, "constant": 0, "numer": 0, "denomin": 0, "extra": 0, "seen": 0, "everi": 0, "collect": 0, "exactli": 0, "onc": 0, "prevent": 0, "divis": 0, "n_tokens_toi": 0, "tokens_toi": 0, "ndt": 0, "len_d": 0, "650": 0, "5000": 0, "nt": 0, "13": 0, "tf_valu": 0, "idf_valu": 0, "tfidf_valu": 0, "n_col": 0, "n_row": 0, "lineplot": 0, "marker": 0, "o": 0, "markers": 0, "n_t": 0, "v": 0, "delax": 0, "96": 0, "nd": 0, "df2": 0, "df3": 0, "join": 0, "tf_df": 0, "df4": 0, "n_uniqu": 0, "idf_df": 0, "tf_idf_df": 0, "tf_idf": 0, "next": 0, "tabl": 0, "quantiti": 0, "better": 0, "behav": 0, "text_idtokensfakend": 0, "tfn": 0, "idftf_idfi32stri32u32u32f64u32f64f640": 0, "132500": 0, "01280972": 0, "7127980": 0, "0325540": 0, "realiti": 0, "112500": 0, "00419784": 0, "1218240": 0, "0164870": 0, "support": 0, "122500": 0, "00838453": 0, "4573820": 0, "0276590": 0, "1132500": 0, "05221244": 0, "0506440": 0, "2106330": 0, "tweet": 0, "00819524": 0, "1350490": 0, "03308": 0, "min_df": 0, "least": 0, "top_fake_tokens_tfidf_df": 0, "top_not_fake_tokens_tfidf_df": 0, "top_fake_tokens_tfidf_valu": 0, "top_fake_tokens_tfidf": 0, "top_not_fake_tokens_tfidf_valu": 0, "top_not_fake_tokens_tfidf": 0, "55": 0, "genuine_top_fake_tokens_tfidf_idx": 0, "genuine_top_not_fake_tokens_tfidf_idx": 0, "genuine_top_fake_tokens_tfidf": 0, "genuine_top_fake_tokens_tfidf_valu": 0, "genuine_top_not_fake_tokens_tfidf": 0, "genuine_top_not_fake_tokens_tfidf_valu": 0, "cnn": 0, "judg": 0, "black": 0, "school": 0, "fox": 0, "women": 0, "heavili": 0, "kei": 0, "involv": 0, "scene": 0, "possibli": 0, "around": 0, "highlight": 0, "russian": 0, "nuclear": 0, "islam": 0, "european": 0, "court": 0, "bill": 0, "legal": 0, "secur": 0, "special": 0, "depth": 0, "report": 0, "explain": 0, "togeth": 0, "tend": 0, "toward": 0, "sensation": 0, "potenti": 0, "attract": 0, "attent": 0, "manipul": 0, "opinion": 0, "address": 0, "broader": 0, "public": 0, "section": 0, "develop": [0, 1], "sever": 0, "step": 0, "follow": 0, "along": 0, "assum": 0, "y_1": 0, "dot": 0, "y_n": 0, "prime": 0, "mathbb": 0, "k": 0, "categori": 0, "mathcal": 0, "lbrace": 0, "rbrace": 0, "p": 0, "x_1": 0, "x_p": 0, "x_j": 0, "x_": 0, "1j": 0, "nj": 0, "th": 0, "x_i": 0, "i1": 0, "ip": 0, "theorem": 0, "y_i": 0, "1cm": 0, "assumpt": 0, "independ": 0, "rightarrow": 0, "perp": 0, "x_r": 0, "quad": 0, "foral": 0, "neq": 0, "under": 0, "prod_": 0, "ij": 0, "propto": 0, "criteria": 0, "consist": 0, "probabl": 0, "widehat": 0, "arg": 0, "underset": 0, "max": 0, "problemat": 0, "point": 0, "aris": 0, "option": 0, "ani": 0, "whe": 0, "strictli": 0, "typic": 0, "domin": 0, "lead": 0, "done": 0, "chanc": 0, "make": 0, "sens": 0, "avoid": 0, "distribut": 0, "chosen": 0, "anoth": 0, "sim": 0, "mu_": 0, "sigma": 0, "2_": 0, "n_c": 0, "sum_": 0, "substack": 0, "varianc": 0, "respect": 0, "int_": 0, "varepsilon": 0, "f_": 0, "dx": 0, "suitabl": 0, "continu": 0, "thought": 0, "t_j": 0, "d_i": 0, "geq": 0, "learn": 0, "sampl": 0, "further": 0, "call": 0, "laplac": 0, "smooth": 0, "lidston": 0, "discret": 0, "usual": 0, "previou": 0, "dummi": 0, "wether": 0, "forc": 0, "belong": 0, "minmaxscal": 0, "after": 0, "result": 0, "h_j": 0, "modif": 0, "design": 0, "imbalanc": 0, "k_1": 0, "k_2": 0, "_i": 0, "propmatch": 0, "match": 0, "enough": 0, "test": 0, "cross": 0, "valid": 0, "x_train": 0, "x_test": 0, "y_train": 0, "y_test": 0, "train_siz": 0, "75": 0, "dictionari": 0, "save": 0, "score": 0, "best": 0, "inner_scor": 0, "param": 0, "fold": 0, "n_split": 0, "shuffl": 0, "naive_tfidf": 0, "tfidf_vector": 0, "gnb": 0, "mnb": 0, "cmnb": 0, "bnb": 0, "hyperparamet": 0, "common_param_grid": 0, "trial": 0, "param_grid": 0, "tfidf_vectorizer__smooth_idf": 0, "suggest_categor": 0, "tfidf_vectorizer__min_df": 0, "03": 0, "param_grid_naive_tfidf": 0, "updat": 0, "naive_tfidf__n_top_tokens_train": 0, "40": 0, "60": 0, "80": 0, "150": 0, "250": 0, "naive_tfidf__n_top_tokens_test": 0, "70": 0, "90": 0, "120": 0, "130": 0, "param_grid_gaussiannb": 0, "param_grid_multinominalnb": 0, "mnb__alpha": 0, "suggest_float": 0, "param_grid_complementmultinominalnb": 0, "cmnb__alpha": 0, "param_grid_bernoullinb": 0, "bnb__alpha": 0, "simple_ev": 0, "search_method": 0, "optuna": 0, "accuraci": 0, "direct": 0, "maxim": 0, "n_trial": 0, "35": 0, "tfidf_naiv": 0, "inner_best_param": 0, "inner_result": 0, "initi": 0, "tfidf_vect": 0, "spare": 0, "matric": 0, "x_train_tfidf_spar": 0, "x_test_tfidf_spar": 0, "n_neighbor": 0, "euclidean": 0, "cv": 0, "min": 0, "get_param": 0, "gaussian_naive_bay": 0, "multinomial_naive_bay": 0, "45": 0, "complement_multinomial_naive_bay": 0, "bernoulli_naive_bay": 0, "file": 0, "open": 0, "wb": 0, "dump": 0, "rb": 0, "inner_scores_valu": 0, "best_model": 0, "scatterplot": 0, "95": 0, "titl": 0, "xtick": 0, "linspac": 0, "ytick": 0, "conclus": 0, "pretti": 0, "bnb_alpha": 0, "far": 0, "awai": 0, "set_param": 0, "y_test_hat": 0, "future_perform": 0, "y_pred": 0, "y_true": 0, "almost": 0, "perfect": 0, "confus": 0, "matrix": 0, "cm": 0, "normal": 0, "label": 0, "disp": 0, "display_label": 0, "cmap": 0, "values_format": 0, "3f": 0, "text_kw": 0, "realli": 0, "bit": 0, "compound": 0, "sia": 0, "repres": 0, "overal": 0, "piec": 0, "deriv": 0, "posit": 0, "neg": 0, "neutral": 0, "similar": 0, "similarli": 0, "lexicon": 0, "rate": 0, "calcul": 0, "squar": 0, "factor": 0, "adjust": 0, "explan": 0, "convei": 0, "emot": 0, "often": 0, "concept": 0, "joi": 0, "satisfact": 0, "approv": 0, "love": 0, "great": 0, "wonder": 0, "awesom": 0, "etc": 0, "hand": 0, "sad": 0, "disappoint": 0, "disapprov": 0, "hate": 0, "terribl": 0, "aw": 0, "strong": 0, "tone": 0, "factual": 0, "descript": 0, "contextu": 0, "ambigu": 0, "sentiment_nam": 0, "lambda": 0, "els": 0, "news_type_nam": 0, "sid": 0, "sentiment_scor": 0, "polarity_scor": 0, "positive_new": 0, "negative_new": 0, "neutral_new": 0, "z": 0, "prop_sentiment_class": 0, "prop_class_senti": 0, "higher": 0, "feel": 0, "green": 0, "grei": 0, "quit": 0, "object": 1, "analys": 1, "characteris": 1, "compar": 1, "non": 1, "system": 1, "capabl": 1, "accur": 1, "word": 1, "base": 1, "frequenc": 1, "odd": 1, "ratio": 1, "tf": 1, "idf": 1, "us": 1, "extract": 1, "techniqu": 1, "naiv": 1, "bay": 1, "famili": 1, "model": 1, "proven": 1, "classif": 1, "task": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fake": [0, 1], "new": [0, 1], "analysi": [0, 1], "detect": [0, 1], "naiv": 0, "bay": 0, "requir": 0, "introduct": 0, "data": 0, "topic": 0, "type": 0, "number": 0, "word": 0, "per": 0, "token": 0, "stopword": 0, "comput": 0, "averag": 0, "top": 0, "base": 0, "frequenc": 0, "odd": 0, "ratio": 0, "term": 0, "frequeci": 0, "invers": 0, "document": 0, "understand": 0, "tf": 0, "idf": 0, "toi": 0, "exampl": 0, "us": 0, "our": 0, "valu": 0, "classif": 0, "classifi": 0, "gaussian": 0, "multinomi": 0, "bernoulli": 0, "categor": 0, "complement": 0, "predictor": 0, "respons": 0, "definit": 0, "outer": 0, "inner": 0, "evalu": 0, "pipelin": 0, "paramet": 0, "grid": 0, "hyper": 0, "optim": 0, "hpo": 0, "knn": 0, "model": 0, "select": 0, "estim": 0, "futur": 0, "perform": 0, "sentiment": 0}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Fake News Analysis and Detection with Naive Bayes": [[0, "fake-news-analysis-and-detection-with-naive-bayes"]], "Requirements": [[0, "requirements"]], "Introduction": [[0, "introduction"]], "Data": [[0, "data"]], "News topics": [[0, "news-topics"]], "News types": [[0, "news-types"]], "Number of words per news type": [[0, "number-of-words-per-news-type"]], "Tokenizer": [[0, "tokenizer"]], "Stopwords": [[0, "stopwords"]], "Computing Tokens": [[0, "computing-tokens"]], "Average number of tokens per news type": [[0, "average-number-of-tokens-per-news-type"]], "Top tokens per news type based on frequency": [[0, "top-tokens-per-news-type-based-on-frequency"]], "Odds Ratio": [[0, "odds-ratio"]], "Top tokens per news type based on Odds Ratio": [[0, "top-tokens-per-news-type-based-on-odds-ratio"]], "Term Frequecy - Inverse Document Frequency": [[0, "term-frequecy-inverse-document-frequency"]], "Understanding TF-IDF with a toy example": [[0, "understanding-tf-idf-with-a-toy-example"]], "Computing TF-IDF": [[0, "computing-tf-idf"]], "Top tokens per news type based on TF-IDF": [[0, "top-tokens-per-news-type-based-on-tf-idf"]], "Using our TF-IDF values": [[0, "using-our-tf-idf-values"]], "News Classification": [[0, "news-classification"]], "Naive Bayes Classifiers": [[0, "naive-bayes-classifiers"]], "Gaussian Naive Bayes": [[0, "gaussian-naive-bayes"]], "Multinomial Naive Bayes": [[0, "multinomial-naive-bayes"]], "Bernoulli Naive Bayes": [[0, "bernoulli-naive-bayes"]], "Categorical Naive Bayes": [[0, "categorical-naive-bayes"]], "Complement Naive Bayes": [[0, "complement-naive-bayes"]], "TF-IDF Naive Classifier": [[0, "tf-idf-naive-classifier"]], "Predictors and Response Definition": [[0, "predictors-and-response-definition"]], "Outer-Inner Evaluation Definition": [[0, "outer-inner-evaluation-definition"]], "Pipelines": [[0, "pipelines"]], "Parameter Grids": [[0, "parameter-grids"]], "Hyper-parameter Optimization (HPO)": [[0, "hyper-parameter-optimization-hpo"]], "Naive TF-IDF Classifier": [[0, "naive-tf-idf-classifier"]], "KNN Classifier": [[0, "knn-classifier"]], "Gaussian Naive Bayes Classifier": [[0, "gaussian-naive-bayes-classifier"]], "Multinomial Naive Bayes Classifier": [[0, "multinomial-naive-bayes-classifier"]], "Complement Multinomial Naive Bayes Classifier": [[0, "complement-multinomial-naive-bayes-classifier"]], "Bernoulli Naive Bayes Classifier": [[0, "bernoulli-naive-bayes-classifier"]], "Model selection": [[0, "model-selection"]], "Estimation of future performance": [[0, "estimation-of-future-performance"]], "Sentiment Analysis": [[0, "sentiment-analysis"]], "Fake News: Analysis and Detection": [[1, "fake-news-analysis-and-detection"]]}, "indexentries": {}})