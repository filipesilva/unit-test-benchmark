import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1495Component } from './my-comp-1495.component';

describe('MyComp1495Component', () => {
  let component: MyComp1495Component;
  let fixture: ComponentFixture<MyComp1495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
