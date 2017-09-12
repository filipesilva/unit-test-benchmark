import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6695Component } from './my-comp-6695.component';

describe('MyComp6695Component', () => {
  let component: MyComp6695Component;
  let fixture: ComponentFixture<MyComp6695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
