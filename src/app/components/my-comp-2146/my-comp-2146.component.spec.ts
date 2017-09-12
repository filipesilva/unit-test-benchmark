import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2146Component } from './my-comp-2146.component';

describe('MyComp2146Component', () => {
  let component: MyComp2146Component;
  let fixture: ComponentFixture<MyComp2146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
