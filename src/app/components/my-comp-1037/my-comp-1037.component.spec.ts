import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1037Component } from './my-comp-1037.component';

describe('MyComp1037Component', () => {
  let component: MyComp1037Component;
  let fixture: ComponentFixture<MyComp1037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
