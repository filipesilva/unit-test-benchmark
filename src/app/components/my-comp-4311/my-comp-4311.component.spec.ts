import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4311Component } from './my-comp-4311.component';

describe('MyComp4311Component', () => {
  let component: MyComp4311Component;
  let fixture: ComponentFixture<MyComp4311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
