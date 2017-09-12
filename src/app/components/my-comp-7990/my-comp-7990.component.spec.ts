import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7990Component } from './my-comp-7990.component';

describe('MyComp7990Component', () => {
  let component: MyComp7990Component;
  let fixture: ComponentFixture<MyComp7990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
