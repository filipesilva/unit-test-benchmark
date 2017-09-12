import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp953Component } from './my-comp-953.component';

describe('MyComp953Component', () => {
  let component: MyComp953Component;
  let fixture: ComponentFixture<MyComp953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
