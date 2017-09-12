import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6786Component } from './my-comp-6786.component';

describe('MyComp6786Component', () => {
  let component: MyComp6786Component;
  let fixture: ComponentFixture<MyComp6786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
