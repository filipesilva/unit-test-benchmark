import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6030Component } from './my-comp-6030.component';

describe('MyComp6030Component', () => {
  let component: MyComp6030Component;
  let fixture: ComponentFixture<MyComp6030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
