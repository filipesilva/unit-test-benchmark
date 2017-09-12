import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4827Component } from './my-comp-4827.component';

describe('MyComp4827Component', () => {
  let component: MyComp4827Component;
  let fixture: ComponentFixture<MyComp4827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
