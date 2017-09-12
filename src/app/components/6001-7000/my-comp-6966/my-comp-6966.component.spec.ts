import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6966Component } from './my-comp-6966.component';

describe('MyComp6966Component', () => {
  let component: MyComp6966Component;
  let fixture: ComponentFixture<MyComp6966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
