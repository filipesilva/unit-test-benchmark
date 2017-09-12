import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9645Component } from './my-comp-9645.component';

describe('MyComp9645Component', () => {
  let component: MyComp9645Component;
  let fixture: ComponentFixture<MyComp9645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
