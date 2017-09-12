import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1713Component } from './my-comp-1713.component';

describe('MyComp1713Component', () => {
  let component: MyComp1713Component;
  let fixture: ComponentFixture<MyComp1713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
