import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4830Component } from './my-comp-4830.component';

describe('MyComp4830Component', () => {
  let component: MyComp4830Component;
  let fixture: ComponentFixture<MyComp4830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
