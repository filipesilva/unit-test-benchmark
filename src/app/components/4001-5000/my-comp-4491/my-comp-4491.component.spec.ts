import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4491Component } from './my-comp-4491.component';

describe('MyComp4491Component', () => {
  let component: MyComp4491Component;
  let fixture: ComponentFixture<MyComp4491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
