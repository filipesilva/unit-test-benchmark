import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4012Component } from './my-comp-4012.component';

describe('MyComp4012Component', () => {
  let component: MyComp4012Component;
  let fixture: ComponentFixture<MyComp4012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
