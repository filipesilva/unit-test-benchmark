import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp261Component } from './my-comp-261.component';

describe('MyComp261Component', () => {
  let component: MyComp261Component;
  let fixture: ComponentFixture<MyComp261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
