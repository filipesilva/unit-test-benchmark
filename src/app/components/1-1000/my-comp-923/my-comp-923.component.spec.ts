import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp923Component } from './my-comp-923.component';

describe('MyComp923Component', () => {
  let component: MyComp923Component;
  let fixture: ComponentFixture<MyComp923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
