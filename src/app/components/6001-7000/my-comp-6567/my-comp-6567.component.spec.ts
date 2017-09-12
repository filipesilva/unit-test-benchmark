import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6567Component } from './my-comp-6567.component';

describe('MyComp6567Component', () => {
  let component: MyComp6567Component;
  let fixture: ComponentFixture<MyComp6567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
