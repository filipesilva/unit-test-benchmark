import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp990Component } from './my-comp-990.component';

describe('MyComp990Component', () => {
  let component: MyComp990Component;
  let fixture: ComponentFixture<MyComp990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
