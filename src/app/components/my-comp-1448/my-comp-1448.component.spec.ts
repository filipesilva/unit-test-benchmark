import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1448Component } from './my-comp-1448.component';

describe('MyComp1448Component', () => {
  let component: MyComp1448Component;
  let fixture: ComponentFixture<MyComp1448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
