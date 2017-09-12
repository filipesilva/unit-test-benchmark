import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5143Component } from './my-comp-5143.component';

describe('MyComp5143Component', () => {
  let component: MyComp5143Component;
  let fixture: ComponentFixture<MyComp5143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
