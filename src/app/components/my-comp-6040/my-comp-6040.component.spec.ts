import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6040Component } from './my-comp-6040.component';

describe('MyComp6040Component', () => {
  let component: MyComp6040Component;
  let fixture: ComponentFixture<MyComp6040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
