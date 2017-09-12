import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5109Component } from './my-comp-5109.component';

describe('MyComp5109Component', () => {
  let component: MyComp5109Component;
  let fixture: ComponentFixture<MyComp5109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
