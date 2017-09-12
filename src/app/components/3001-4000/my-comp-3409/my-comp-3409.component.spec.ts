import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3409Component } from './my-comp-3409.component';

describe('MyComp3409Component', () => {
  let component: MyComp3409Component;
  let fixture: ComponentFixture<MyComp3409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
