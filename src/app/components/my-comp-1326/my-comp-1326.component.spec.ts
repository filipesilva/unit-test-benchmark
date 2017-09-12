import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1326Component } from './my-comp-1326.component';

describe('MyComp1326Component', () => {
  let component: MyComp1326Component;
  let fixture: ComponentFixture<MyComp1326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
