import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5754Component } from './my-comp-5754.component';

describe('MyComp5754Component', () => {
  let component: MyComp5754Component;
  let fixture: ComponentFixture<MyComp5754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
