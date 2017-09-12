import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4094Component } from './my-comp-4094.component';

describe('MyComp4094Component', () => {
  let component: MyComp4094Component;
  let fixture: ComponentFixture<MyComp4094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
