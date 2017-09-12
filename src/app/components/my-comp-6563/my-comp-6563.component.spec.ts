import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6563Component } from './my-comp-6563.component';

describe('MyComp6563Component', () => {
  let component: MyComp6563Component;
  let fixture: ComponentFixture<MyComp6563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
