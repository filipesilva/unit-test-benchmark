import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1539Component } from './my-comp-1539.component';

describe('MyComp1539Component', () => {
  let component: MyComp1539Component;
  let fixture: ComponentFixture<MyComp1539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
