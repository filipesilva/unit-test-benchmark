import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1206Component } from './my-comp-1206.component';

describe('MyComp1206Component', () => {
  let component: MyComp1206Component;
  let fixture: ComponentFixture<MyComp1206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
