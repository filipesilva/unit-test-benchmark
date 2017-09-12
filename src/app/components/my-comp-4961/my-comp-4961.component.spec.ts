import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4961Component } from './my-comp-4961.component';

describe('MyComp4961Component', () => {
  let component: MyComp4961Component;
  let fixture: ComponentFixture<MyComp4961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
