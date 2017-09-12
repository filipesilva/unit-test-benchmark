import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7257Component } from './my-comp-7257.component';

describe('MyComp7257Component', () => {
  let component: MyComp7257Component;
  let fixture: ComponentFixture<MyComp7257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
