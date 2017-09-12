import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9982Component } from './my-comp-9982.component';

describe('MyComp9982Component', () => {
  let component: MyComp9982Component;
  let fixture: ComponentFixture<MyComp9982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
