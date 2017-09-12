import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6850Component } from './my-comp-6850.component';

describe('MyComp6850Component', () => {
  let component: MyComp6850Component;
  let fixture: ComponentFixture<MyComp6850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
