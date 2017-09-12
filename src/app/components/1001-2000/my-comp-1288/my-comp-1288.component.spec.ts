import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1288Component } from './my-comp-1288.component';

describe('MyComp1288Component', () => {
  let component: MyComp1288Component;
  let fixture: ComponentFixture<MyComp1288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
