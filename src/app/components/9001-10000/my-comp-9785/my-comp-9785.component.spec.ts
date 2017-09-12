import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9785Component } from './my-comp-9785.component';

describe('MyComp9785Component', () => {
  let component: MyComp9785Component;
  let fixture: ComponentFixture<MyComp9785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
