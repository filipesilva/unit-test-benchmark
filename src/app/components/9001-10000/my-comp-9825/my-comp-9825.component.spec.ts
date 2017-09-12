import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9825Component } from './my-comp-9825.component';

describe('MyComp9825Component', () => {
  let component: MyComp9825Component;
  let fixture: ComponentFixture<MyComp9825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
