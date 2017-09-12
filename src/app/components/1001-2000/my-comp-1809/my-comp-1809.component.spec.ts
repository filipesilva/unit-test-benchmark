import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1809Component } from './my-comp-1809.component';

describe('MyComp1809Component', () => {
  let component: MyComp1809Component;
  let fixture: ComponentFixture<MyComp1809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
