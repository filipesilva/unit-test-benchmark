import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1327Component } from './my-comp-1327.component';

describe('MyComp1327Component', () => {
  let component: MyComp1327Component;
  let fixture: ComponentFixture<MyComp1327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
