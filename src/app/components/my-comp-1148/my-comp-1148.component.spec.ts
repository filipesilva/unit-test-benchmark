import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1148Component } from './my-comp-1148.component';

describe('MyComp1148Component', () => {
  let component: MyComp1148Component;
  let fixture: ComponentFixture<MyComp1148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
