import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7857Component } from './my-comp-7857.component';

describe('MyComp7857Component', () => {
  let component: MyComp7857Component;
  let fixture: ComponentFixture<MyComp7857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
