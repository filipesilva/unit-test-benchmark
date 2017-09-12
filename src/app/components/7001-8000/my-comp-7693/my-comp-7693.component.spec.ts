import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7693Component } from './my-comp-7693.component';

describe('MyComp7693Component', () => {
  let component: MyComp7693Component;
  let fixture: ComponentFixture<MyComp7693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
