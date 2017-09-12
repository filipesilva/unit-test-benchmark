import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6756Component } from './my-comp-6756.component';

describe('MyComp6756Component', () => {
  let component: MyComp6756Component;
  let fixture: ComponentFixture<MyComp6756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
