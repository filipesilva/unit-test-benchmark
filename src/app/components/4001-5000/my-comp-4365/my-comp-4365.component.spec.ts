import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4365Component } from './my-comp-4365.component';

describe('MyComp4365Component', () => {
  let component: MyComp4365Component;
  let fixture: ComponentFixture<MyComp4365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
