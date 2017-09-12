import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7459Component } from './my-comp-7459.component';

describe('MyComp7459Component', () => {
  let component: MyComp7459Component;
  let fixture: ComponentFixture<MyComp7459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
