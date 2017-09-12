import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6851Component } from './my-comp-6851.component';

describe('MyComp6851Component', () => {
  let component: MyComp6851Component;
  let fixture: ComponentFixture<MyComp6851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
