import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4641Component } from './my-comp-4641.component';

describe('MyComp4641Component', () => {
  let component: MyComp4641Component;
  let fixture: ComponentFixture<MyComp4641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
