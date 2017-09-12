import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1893Component } from './my-comp-1893.component';

describe('MyComp1893Component', () => {
  let component: MyComp1893Component;
  let fixture: ComponentFixture<MyComp1893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
