import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1860Component } from './my-comp-1860.component';

describe('MyComp1860Component', () => {
  let component: MyComp1860Component;
  let fixture: ComponentFixture<MyComp1860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
