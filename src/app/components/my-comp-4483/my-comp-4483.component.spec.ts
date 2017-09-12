import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4483Component } from './my-comp-4483.component';

describe('MyComp4483Component', () => {
  let component: MyComp4483Component;
  let fixture: ComponentFixture<MyComp4483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
