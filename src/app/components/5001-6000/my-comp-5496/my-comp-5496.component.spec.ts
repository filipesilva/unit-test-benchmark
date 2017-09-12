import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5496Component } from './my-comp-5496.component';

describe('MyComp5496Component', () => {
  let component: MyComp5496Component;
  let fixture: ComponentFixture<MyComp5496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
