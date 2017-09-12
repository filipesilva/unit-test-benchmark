import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4817Component } from './my-comp-4817.component';

describe('MyComp4817Component', () => {
  let component: MyComp4817Component;
  let fixture: ComponentFixture<MyComp4817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
