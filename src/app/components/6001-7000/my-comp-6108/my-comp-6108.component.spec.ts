import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6108Component } from './my-comp-6108.component';

describe('MyComp6108Component', () => {
  let component: MyComp6108Component;
  let fixture: ComponentFixture<MyComp6108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
