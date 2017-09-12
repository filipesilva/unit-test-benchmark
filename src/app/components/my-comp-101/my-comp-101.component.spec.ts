import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp101Component } from './my-comp-101.component';

describe('MyComp101Component', () => {
  let component: MyComp101Component;
  let fixture: ComponentFixture<MyComp101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
