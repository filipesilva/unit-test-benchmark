import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6389Component } from './my-comp-6389.component';

describe('MyComp6389Component', () => {
  let component: MyComp6389Component;
  let fixture: ComponentFixture<MyComp6389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
