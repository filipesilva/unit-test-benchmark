import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5904Component } from './my-comp-5904.component';

describe('MyComp5904Component', () => {
  let component: MyComp5904Component;
  let fixture: ComponentFixture<MyComp5904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
