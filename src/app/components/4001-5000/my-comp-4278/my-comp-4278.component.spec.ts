import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4278Component } from './my-comp-4278.component';

describe('MyComp4278Component', () => {
  let component: MyComp4278Component;
  let fixture: ComponentFixture<MyComp4278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
