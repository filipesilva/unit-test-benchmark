import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1572Component } from './my-comp-1572.component';

describe('MyComp1572Component', () => {
  let component: MyComp1572Component;
  let fixture: ComponentFixture<MyComp1572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
