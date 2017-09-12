import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp359Component } from './my-comp-359.component';

describe('MyComp359Component', () => {
  let component: MyComp359Component;
  let fixture: ComponentFixture<MyComp359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
