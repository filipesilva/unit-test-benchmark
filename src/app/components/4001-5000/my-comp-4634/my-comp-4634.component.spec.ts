import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4634Component } from './my-comp-4634.component';

describe('MyComp4634Component', () => {
  let component: MyComp4634Component;
  let fixture: ComponentFixture<MyComp4634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
