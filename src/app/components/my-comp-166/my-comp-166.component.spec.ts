import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp166Component } from './my-comp-166.component';

describe('MyComp166Component', () => {
  let component: MyComp166Component;
  let fixture: ComponentFixture<MyComp166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
