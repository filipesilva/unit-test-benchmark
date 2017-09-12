import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8990Component } from './my-comp-8990.component';

describe('MyComp8990Component', () => {
  let component: MyComp8990Component;
  let fixture: ComponentFixture<MyComp8990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
