import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1067Component } from './my-comp-1067.component';

describe('MyComp1067Component', () => {
  let component: MyComp1067Component;
  let fixture: ComponentFixture<MyComp1067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
