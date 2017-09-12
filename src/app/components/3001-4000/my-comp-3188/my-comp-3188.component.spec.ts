import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3188Component } from './my-comp-3188.component';

describe('MyComp3188Component', () => {
  let component: MyComp3188Component;
  let fixture: ComponentFixture<MyComp3188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
