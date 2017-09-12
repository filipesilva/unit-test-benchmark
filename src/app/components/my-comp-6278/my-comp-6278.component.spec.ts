import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6278Component } from './my-comp-6278.component';

describe('MyComp6278Component', () => {
  let component: MyComp6278Component;
  let fixture: ComponentFixture<MyComp6278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
