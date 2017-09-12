import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5214Component } from './my-comp-5214.component';

describe('MyComp5214Component', () => {
  let component: MyComp5214Component;
  let fixture: ComponentFixture<MyComp5214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
