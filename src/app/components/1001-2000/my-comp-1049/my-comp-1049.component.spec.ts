import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1049Component } from './my-comp-1049.component';

describe('MyComp1049Component', () => {
  let component: MyComp1049Component;
  let fixture: ComponentFixture<MyComp1049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
