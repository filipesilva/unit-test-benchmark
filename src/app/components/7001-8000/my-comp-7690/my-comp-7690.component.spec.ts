import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7690Component } from './my-comp-7690.component';

describe('MyComp7690Component', () => {
  let component: MyComp7690Component;
  let fixture: ComponentFixture<MyComp7690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
