import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4990Component } from './my-comp-4990.component';

describe('MyComp4990Component', () => {
  let component: MyComp4990Component;
  let fixture: ComponentFixture<MyComp4990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
