import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6451Component } from './my-comp-6451.component';

describe('MyComp6451Component', () => {
  let component: MyComp6451Component;
  let fixture: ComponentFixture<MyComp6451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
