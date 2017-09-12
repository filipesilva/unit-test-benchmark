import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1820Component } from './my-comp-1820.component';

describe('MyComp1820Component', () => {
  let component: MyComp1820Component;
  let fixture: ComponentFixture<MyComp1820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
