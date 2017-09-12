import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1394Component } from './my-comp-1394.component';

describe('MyComp1394Component', () => {
  let component: MyComp1394Component;
  let fixture: ComponentFixture<MyComp1394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
