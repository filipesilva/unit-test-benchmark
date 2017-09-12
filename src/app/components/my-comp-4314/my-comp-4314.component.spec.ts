import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4314Component } from './my-comp-4314.component';

describe('MyComp4314Component', () => {
  let component: MyComp4314Component;
  let fixture: ComponentFixture<MyComp4314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
