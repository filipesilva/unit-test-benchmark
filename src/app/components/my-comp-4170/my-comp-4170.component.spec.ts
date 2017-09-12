import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4170Component } from './my-comp-4170.component';

describe('MyComp4170Component', () => {
  let component: MyComp4170Component;
  let fixture: ComponentFixture<MyComp4170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
