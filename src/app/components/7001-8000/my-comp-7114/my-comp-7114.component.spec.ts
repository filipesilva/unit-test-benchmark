import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7114Component } from './my-comp-7114.component';

describe('MyComp7114Component', () => {
  let component: MyComp7114Component;
  let fixture: ComponentFixture<MyComp7114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
