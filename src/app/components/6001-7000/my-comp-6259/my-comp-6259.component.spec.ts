import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6259Component } from './my-comp-6259.component';

describe('MyComp6259Component', () => {
  let component: MyComp6259Component;
  let fixture: ComponentFixture<MyComp6259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
