import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4466Component } from './my-comp-4466.component';

describe('MyComp4466Component', () => {
  let component: MyComp4466Component;
  let fixture: ComponentFixture<MyComp4466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
