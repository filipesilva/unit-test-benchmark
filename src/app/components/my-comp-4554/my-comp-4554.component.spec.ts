import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4554Component } from './my-comp-4554.component';

describe('MyComp4554Component', () => {
  let component: MyComp4554Component;
  let fixture: ComponentFixture<MyComp4554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
