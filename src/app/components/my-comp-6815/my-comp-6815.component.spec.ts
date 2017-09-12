import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6815Component } from './my-comp-6815.component';

describe('MyComp6815Component', () => {
  let component: MyComp6815Component;
  let fixture: ComponentFixture<MyComp6815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
