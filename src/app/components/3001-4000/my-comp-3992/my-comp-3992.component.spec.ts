import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3992Component } from './my-comp-3992.component';

describe('MyComp3992Component', () => {
  let component: MyComp3992Component;
  let fixture: ComponentFixture<MyComp3992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
