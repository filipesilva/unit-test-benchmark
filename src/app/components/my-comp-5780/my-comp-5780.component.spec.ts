import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5780Component } from './my-comp-5780.component';

describe('MyComp5780Component', () => {
  let component: MyComp5780Component;
  let fixture: ComponentFixture<MyComp5780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
