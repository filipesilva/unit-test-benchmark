import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1167Component } from './my-comp-1167.component';

describe('MyComp1167Component', () => {
  let component: MyComp1167Component;
  let fixture: ComponentFixture<MyComp1167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
