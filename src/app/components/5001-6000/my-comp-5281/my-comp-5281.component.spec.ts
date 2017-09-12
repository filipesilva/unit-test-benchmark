import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5281Component } from './my-comp-5281.component';

describe('MyComp5281Component', () => {
  let component: MyComp5281Component;
  let fixture: ComponentFixture<MyComp5281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
