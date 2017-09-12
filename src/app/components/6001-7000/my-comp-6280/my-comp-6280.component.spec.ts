import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6280Component } from './my-comp-6280.component';

describe('MyComp6280Component', () => {
  let component: MyComp6280Component;
  let fixture: ComponentFixture<MyComp6280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
