import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp496Component } from './my-comp-496.component';

describe('MyComp496Component', () => {
  let component: MyComp496Component;
  let fixture: ComponentFixture<MyComp496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
