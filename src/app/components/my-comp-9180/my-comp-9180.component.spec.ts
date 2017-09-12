import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9180Component } from './my-comp-9180.component';

describe('MyComp9180Component', () => {
  let component: MyComp9180Component;
  let fixture: ComponentFixture<MyComp9180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
