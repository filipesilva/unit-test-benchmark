import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp494Component } from './my-comp-494.component';

describe('MyComp494Component', () => {
  let component: MyComp494Component;
  let fixture: ComponentFixture<MyComp494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
