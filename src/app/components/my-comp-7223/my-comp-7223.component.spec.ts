import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7223Component } from './my-comp-7223.component';

describe('MyComp7223Component', () => {
  let component: MyComp7223Component;
  let fixture: ComponentFixture<MyComp7223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
