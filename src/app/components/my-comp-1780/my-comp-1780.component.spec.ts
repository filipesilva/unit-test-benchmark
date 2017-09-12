import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1780Component } from './my-comp-1780.component';

describe('MyComp1780Component', () => {
  let component: MyComp1780Component;
  let fixture: ComponentFixture<MyComp1780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
