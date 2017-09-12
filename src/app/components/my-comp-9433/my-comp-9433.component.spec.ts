import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9433Component } from './my-comp-9433.component';

describe('MyComp9433Component', () => {
  let component: MyComp9433Component;
  let fixture: ComponentFixture<MyComp9433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
