import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4784Component } from './my-comp-4784.component';

describe('MyComp4784Component', () => {
  let component: MyComp4784Component;
  let fixture: ComponentFixture<MyComp4784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
