import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2117Component } from './my-comp-2117.component';

describe('MyComp2117Component', () => {
  let component: MyComp2117Component;
  let fixture: ComponentFixture<MyComp2117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
