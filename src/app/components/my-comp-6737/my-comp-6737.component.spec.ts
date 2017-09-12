import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6737Component } from './my-comp-6737.component';

describe('MyComp6737Component', () => {
  let component: MyComp6737Component;
  let fixture: ComponentFixture<MyComp6737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
