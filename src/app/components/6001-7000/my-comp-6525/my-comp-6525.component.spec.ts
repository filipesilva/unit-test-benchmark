import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6525Component } from './my-comp-6525.component';

describe('MyComp6525Component', () => {
  let component: MyComp6525Component;
  let fixture: ComponentFixture<MyComp6525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
