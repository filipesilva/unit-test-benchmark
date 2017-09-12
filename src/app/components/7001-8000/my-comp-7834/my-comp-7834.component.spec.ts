import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7834Component } from './my-comp-7834.component';

describe('MyComp7834Component', () => {
  let component: MyComp7834Component;
  let fixture: ComponentFixture<MyComp7834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
