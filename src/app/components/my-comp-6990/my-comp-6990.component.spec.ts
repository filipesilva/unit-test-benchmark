import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6990Component } from './my-comp-6990.component';

describe('MyComp6990Component', () => {
  let component: MyComp6990Component;
  let fixture: ComponentFixture<MyComp6990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
