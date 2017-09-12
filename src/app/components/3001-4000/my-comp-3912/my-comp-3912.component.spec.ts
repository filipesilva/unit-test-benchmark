import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3912Component } from './my-comp-3912.component';

describe('MyComp3912Component', () => {
  let component: MyComp3912Component;
  let fixture: ComponentFixture<MyComp3912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
