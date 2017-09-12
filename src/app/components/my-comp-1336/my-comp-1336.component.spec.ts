import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1336Component } from './my-comp-1336.component';

describe('MyComp1336Component', () => {
  let component: MyComp1336Component;
  let fixture: ComponentFixture<MyComp1336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
