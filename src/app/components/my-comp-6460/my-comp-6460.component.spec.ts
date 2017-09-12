import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6460Component } from './my-comp-6460.component';

describe('MyComp6460Component', () => {
  let component: MyComp6460Component;
  let fixture: ComponentFixture<MyComp6460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
