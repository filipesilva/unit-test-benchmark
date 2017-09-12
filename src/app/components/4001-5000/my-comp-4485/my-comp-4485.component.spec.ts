import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4485Component } from './my-comp-4485.component';

describe('MyComp4485Component', () => {
  let component: MyComp4485Component;
  let fixture: ComponentFixture<MyComp4485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
