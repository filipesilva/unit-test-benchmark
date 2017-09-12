import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp443Component } from './my-comp-443.component';

describe('MyComp443Component', () => {
  let component: MyComp443Component;
  let fixture: ComponentFixture<MyComp443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
