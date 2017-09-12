import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9278Component } from './my-comp-9278.component';

describe('MyComp9278Component', () => {
  let component: MyComp9278Component;
  let fixture: ComponentFixture<MyComp9278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
