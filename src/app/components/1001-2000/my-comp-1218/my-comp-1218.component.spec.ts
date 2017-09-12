import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1218Component } from './my-comp-1218.component';

describe('MyComp1218Component', () => {
  let component: MyComp1218Component;
  let fixture: ComponentFixture<MyComp1218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
