import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp569Component } from './my-comp-569.component';

describe('MyComp569Component', () => {
  let component: MyComp569Component;
  let fixture: ComponentFixture<MyComp569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
