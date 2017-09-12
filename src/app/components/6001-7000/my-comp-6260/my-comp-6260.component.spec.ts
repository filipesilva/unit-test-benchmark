import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6260Component } from './my-comp-6260.component';

describe('MyComp6260Component', () => {
  let component: MyComp6260Component;
  let fixture: ComponentFixture<MyComp6260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
