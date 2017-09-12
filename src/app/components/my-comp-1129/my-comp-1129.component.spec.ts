import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1129Component } from './my-comp-1129.component';

describe('MyComp1129Component', () => {
  let component: MyComp1129Component;
  let fixture: ComponentFixture<MyComp1129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
