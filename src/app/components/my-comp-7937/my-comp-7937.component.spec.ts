import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7937Component } from './my-comp-7937.component';

describe('MyComp7937Component', () => {
  let component: MyComp7937Component;
  let fixture: ComponentFixture<MyComp7937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
