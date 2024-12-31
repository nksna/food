import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { MasterService } from 'src/app/service/master.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

fdescribe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let service:MasterService

  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      providers: [MasterService,HttpClient],
      imports:[HttpClientModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    service =TestBed.inject(MasterService) as jasmine.SpyObj<MasterService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update filteredCategories when searchTerm is empty', () => {
    // Mocking categories
    component.categories = [
      { categoryId: 1, categoryName: 'Category 1' },
      { categoryId: 2, categoryName: 'Category 2' },
      { categoryId: 3, categoryName: 'Category 3' },
    ];
    
    // Setting initial searchTerm
    component.searchTerm = '';

    // Triggering applyFilter
    component.applyFilter();

    // Expectation: filteredCategories should be equal to categories
    expect(component.filteredCategories).toEqual(component.categories);
  });
  it('should update filteredCategories when searchTerm is empty', () => {
    // Mocking categories
    component.categories = [
      { categoryId: 1, categoryName: 'Category 1' },
      { categoryId: 2, categoryName: 'Category 2' },
      { categoryId: 3, categoryName: 'Category 3' },
    ];
    
    // Setting initial searchTerm
    component.searchTerm = 'data';

    // Triggering applyFilter
    component.applyFilter();

    // Expectation: filteredCategories should be equal to categories
    
  });
  it('should be call navigation', ()=>{
    const data="df";
    const helo="gg"
    component.navigation(data,helo);
  })
  it('should be call loadallfoodcategories',()=>{
    component.loadallfoodcategories()
    const mockResponse = {
      data: [
        { categoryId: 1, categoryName: 'Category 1', photoUrl: 'url1' },
        { categoryId: 2, categoryName: 'Category 2', photoUrl: 'url2' },
        // Add more categories as needed
      ]
    };
   
})
})
