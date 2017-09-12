import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6648Component } from './my-comp-6648.component';

describe('MyComp6648Component', () => {
  let component: MyComp6648Component;
  let fixture: ComponentFixture<MyComp6648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
