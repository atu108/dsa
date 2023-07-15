import bard

client = bard.Client()

ingredient = "aloe barbadensis"

info = client.get_ingredient_info(ingredient)

print(info)
