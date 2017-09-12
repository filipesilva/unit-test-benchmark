import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6328Component } from './my-comp-6328.component';

describe('MyComp6328Component', () => {
  let component: MyComp6328Component;
  let fixture: ComponentFixture<MyComp6328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
