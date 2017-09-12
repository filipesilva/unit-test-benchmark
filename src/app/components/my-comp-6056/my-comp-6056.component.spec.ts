import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6056Component } from './my-comp-6056.component';

describe('MyComp6056Component', () => {
  let component: MyComp6056Component;
  let fixture: ComponentFixture<MyComp6056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
