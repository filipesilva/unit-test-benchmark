import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1110Component } from './my-comp-1110.component';

describe('MyComp1110Component', () => {
  let component: MyComp1110Component;
  let fixture: ComponentFixture<MyComp1110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
