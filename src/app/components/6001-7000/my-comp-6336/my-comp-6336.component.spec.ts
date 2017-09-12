import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6336Component } from './my-comp-6336.component';

describe('MyComp6336Component', () => {
  let component: MyComp6336Component;
  let fixture: ComponentFixture<MyComp6336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
