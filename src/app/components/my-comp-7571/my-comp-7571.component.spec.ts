import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7571Component } from './my-comp-7571.component';

describe('MyComp7571Component', () => {
  let component: MyComp7571Component;
  let fixture: ComponentFixture<MyComp7571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
