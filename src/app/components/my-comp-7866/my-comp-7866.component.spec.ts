import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7866Component } from './my-comp-7866.component';

describe('MyComp7866Component', () => {
  let component: MyComp7866Component;
  let fixture: ComponentFixture<MyComp7866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
