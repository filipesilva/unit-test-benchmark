import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5029Component } from './my-comp-5029.component';

describe('MyComp5029Component', () => {
  let component: MyComp5029Component;
  let fixture: ComponentFixture<MyComp5029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
