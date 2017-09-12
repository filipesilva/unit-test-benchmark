import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1156Component } from './my-comp-1156.component';

describe('MyComp1156Component', () => {
  let component: MyComp1156Component;
  let fixture: ComponentFixture<MyComp1156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
