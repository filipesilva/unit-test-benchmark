import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4261Component } from './my-comp-4261.component';

describe('MyComp4261Component', () => {
  let component: MyComp4261Component;
  let fixture: ComponentFixture<MyComp4261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
