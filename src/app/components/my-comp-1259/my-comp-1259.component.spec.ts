import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1259Component } from './my-comp-1259.component';

describe('MyComp1259Component', () => {
  let component: MyComp1259Component;
  let fixture: ComponentFixture<MyComp1259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
