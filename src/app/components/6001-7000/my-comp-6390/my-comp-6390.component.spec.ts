import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6390Component } from './my-comp-6390.component';

describe('MyComp6390Component', () => {
  let component: MyComp6390Component;
  let fixture: ComponentFixture<MyComp6390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
