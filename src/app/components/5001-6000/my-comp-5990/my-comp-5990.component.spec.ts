import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5990Component } from './my-comp-5990.component';

describe('MyComp5990Component', () => {
  let component: MyComp5990Component;
  let fixture: ComponentFixture<MyComp5990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
