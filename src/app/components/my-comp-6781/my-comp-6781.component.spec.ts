import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6781Component } from './my-comp-6781.component';

describe('MyComp6781Component', () => {
  let component: MyComp6781Component;
  let fixture: ComponentFixture<MyComp6781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
