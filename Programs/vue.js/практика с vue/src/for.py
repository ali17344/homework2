# Reading the contents of the uploaded Vue.js files to analyze them
app_vue_path = '/mnt/data/App.vue'
academy_vue_path = '/mnt/data/Academy.vue'

# Open and read the contents of the files
with open(app_vue_path, 'r', encoding='utf-8') as app_file:
    app_vue_content = app_file.read()

with open(academy_vue_path, 'r', encoding='utf-8') as academy_file:
    academy_vue_content = academy_file.read()

app_vue_content, academy_vue_content
