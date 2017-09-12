import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1984Component } from './my-comp-1984.component';

describe('MyComp1984Component', () => {
  let component: MyComp1984Component;
  let fixture: ComponentFixture<MyComp1984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
