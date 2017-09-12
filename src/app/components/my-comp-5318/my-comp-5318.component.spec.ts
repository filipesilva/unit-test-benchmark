import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5318Component } from './my-comp-5318.component';

describe('MyComp5318Component', () => {
  let component: MyComp5318Component;
  let fixture: ComponentFixture<MyComp5318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
