import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp753Component } from './my-comp-753.component';

describe('MyComp753Component', () => {
  let component: MyComp753Component;
  let fixture: ComponentFixture<MyComp753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
