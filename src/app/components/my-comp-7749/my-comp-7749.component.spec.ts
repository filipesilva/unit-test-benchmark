import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7749Component } from './my-comp-7749.component';

describe('MyComp7749Component', () => {
  let component: MyComp7749Component;
  let fixture: ComponentFixture<MyComp7749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
