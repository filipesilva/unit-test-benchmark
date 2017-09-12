import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp417Component } from './my-comp-417.component';

describe('MyComp417Component', () => {
  let component: MyComp417Component;
  let fixture: ComponentFixture<MyComp417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
