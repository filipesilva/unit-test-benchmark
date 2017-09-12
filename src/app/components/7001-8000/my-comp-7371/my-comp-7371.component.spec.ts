import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7371Component } from './my-comp-7371.component';

describe('MyComp7371Component', () => {
  let component: MyComp7371Component;
  let fixture: ComponentFixture<MyComp7371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
