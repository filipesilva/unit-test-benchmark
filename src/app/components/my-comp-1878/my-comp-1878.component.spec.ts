import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1878Component } from './my-comp-1878.component';

describe('MyComp1878Component', () => {
  let component: MyComp1878Component;
  let fixture: ComponentFixture<MyComp1878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
