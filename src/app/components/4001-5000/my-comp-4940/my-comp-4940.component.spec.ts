import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4940Component } from './my-comp-4940.component';

describe('MyComp4940Component', () => {
  let component: MyComp4940Component;
  let fixture: ComponentFixture<MyComp4940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
