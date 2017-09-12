import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6670Component } from './my-comp-6670.component';

describe('MyComp6670Component', () => {
  let component: MyComp6670Component;
  let fixture: ComponentFixture<MyComp6670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
