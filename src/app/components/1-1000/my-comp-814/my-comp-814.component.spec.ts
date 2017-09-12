import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp814Component } from './my-comp-814.component';

describe('MyComp814Component', () => {
  let component: MyComp814Component;
  let fixture: ComponentFixture<MyComp814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
