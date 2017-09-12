import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1997Component } from './my-comp-1997.component';

describe('MyComp1997Component', () => {
  let component: MyComp1997Component;
  let fixture: ComponentFixture<MyComp1997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
