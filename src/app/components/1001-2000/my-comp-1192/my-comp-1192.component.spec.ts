import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1192Component } from './my-comp-1192.component';

describe('MyComp1192Component', () => {
  let component: MyComp1192Component;
  let fixture: ComponentFixture<MyComp1192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
