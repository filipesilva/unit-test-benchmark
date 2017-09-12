import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1843Component } from './my-comp-1843.component';

describe('MyComp1843Component', () => {
  let component: MyComp1843Component;
  let fixture: ComponentFixture<MyComp1843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
