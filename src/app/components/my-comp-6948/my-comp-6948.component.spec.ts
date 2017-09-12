import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6948Component } from './my-comp-6948.component';

describe('MyComp6948Component', () => {
  let component: MyComp6948Component;
  let fixture: ComponentFixture<MyComp6948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
